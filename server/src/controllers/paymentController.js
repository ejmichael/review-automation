const qs = require('qs');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const querystring = require('querystring');
const Subscription = require('../models/subscriptionModel');

// Define the field order as per PayFast documentation
const FIELD_ORDER = [
  'merchant_id', 'merchant_key', 'return_url', 'cancel_url', 'notify_url',
  'name_first', 'name_last', 'email_address', 'cell_number',
  'm_payment_id', 'amount', 'item_name', 'item_description',
  'custom_int1', 'custom_int2', 'custom_int3', 'custom_int4', 'custom_int5',
  'custom_str1', 'custom_str2', 'custom_str3', 'custom_str4', 'custom_str5',
  'email_confirmation', 'confirmation_address',
  'payment_method',
  'subscription_type', 'billing_date', 'recurring_amount', 'frequency', 'cycles'
];

// Function to generate the PayFast signature
const generateSignature = (params, passphrase) => {
  // Filter out undefined or empty values
  const filteredParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== '')
    .sort(([a], [b]) => a.localeCompare(b)); // Sort alphabetically

  // Construct the query string
  const queryString = filteredParams.map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&');

  // Append passphrase if provided
  const stringToHash = passphrase ? `${queryString}&passphrase=${passphrase}` : queryString;

  // Return the MD5 hash of the string
  return crypto.createHash('md5').update(stringToHash).digest('hex');
};


// Controller to initiate subscription
exports.initiateSubscription = async (req, res) => {
  console.log("Initiating payment on backend");

  try {
    const {
      amount,
      itemName,
      email,
      name,
      googlePlaceId,
      returnUrl,
      cancelUrl,
      notifyUrl,
    } = req.body;

    const orderReference = uuidv4();
    const paymentReference = uuidv4();

    const payfastUrl = "https://sandbox.payfast.co.za/eng/process";
    //const payfastUrl = "https://www.payfast.co.za/eng/process"; // Live URL
     const merchantId = '10039862';
     const merchantKey = 'ddrsjo9ep59vx';
    //const merchantId = process.env.PAYFAST_MERCHANT_ID;
    //const merchantKey = process.env.PAYFAST_MERCHANT_KEY;

    // Construct the query string
    const queryParams = new URLSearchParams({
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: notifyUrl,
      amount: amount, // Example: "100.00"
      item_name: itemName,
      email_address: email,
      m_payment_id: paymentReference, // Include the reference as PayFast's custom field
      subscription_type: '1',  // 1 for recurring
      frequency: '3',  // Frequency: 3 = monthly
      cycles: '0',  // 0 for indefinite
      custom_str1: googlePlaceId || '',
      custom_str2: name || '',
    });

    const redirectUrl = `${payfastUrl}?${queryParams.toString()}`;

    // Save subscription attempt to DB
    await Subscription.create({
      name,
      email,
      googlePlaceId,
      paymentReference,
      orderReference,
      status: 'pending',
    });

    

    // Send the reference and redirect URL back to the client
    res.status(200).json({
      redirectUrl,
      paymentReference,
      orderReference,
    });

    console.log("response sent");
  } catch (error) {
    console.error("Error initiating subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.handleNotify = async (req, res) => {
  console.log('🔔 ITN Received:', req.body);

  try {
    const pfData = req.body;

    // Step 1: Extract signature and remove it from data
    const incomingSignature = pfData.signature;
    delete pfData.signature;

    // Step 2: Rebuild signature based on pfData + merchant key
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY;

    // Sort the keys alphabetically
    const sortedKeys = Object.keys(pfData).sort();
    const dataString = sortedKeys
      .map(key => `${key}=${encodeURIComponent(pfData[key])}`)
      .join('&');

    // Append merchant_key
    const stringToHash = `${dataString}&merchant_key=${merchantKey}`;

    const calculatedSignature = crypto
      .createHash('md5')
      .update(stringToHash)
      .digest('hex');

    if (incomingSignature !== calculatedSignature) {
      console.error('Signature mismatch!');
      return res.status(400).send('Signature mismatch');
    }

    // Step 3: Verify data with PayFast
    const response = await axios.post(
      'https://www.payfast.co.za/eng/query/validate', 
      querystring.stringify(req.body),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    if (response.data !== 'VALID') {
      console.error('PayFast validation failed:', response.data);
      return res.status(400).send('Invalid payment notification');
    }

    // Step 4: Update subscription in DB if payment complete
    if (pfData.payment_status === 'COMPLETE') {
      console.log('✅ Payment complete for', pfData.m_payment_id);

      await Subscription.findOneAndUpdate(
        { paymentReference: pfData.m_payment_id },
        { status: 'active' }
      );

      // Additional logic here (send confirmation emails, etc)
    } else {
      console.warn('Payment not complete:', pfData.payment_status);
    }

    // Step 5: Send HTTP 200 to acknowledge receipt
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error handling IPN:', error);
    res.status(500).send('Internal Server Error');
  }
};
