const qs = require('qs');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const querystring = require('querystring');
const Subscription = require('../models/subscriptionModel');
const Lead = require('../models/leadsModel');


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

const PRICING = {
  basic: "19.00",
  growth: "29.00",
  comprehensive: "1299.00",
};

// Controller to initiate subscription
exports.initiateSubscription = async (req, res) => {
  console.log("Initiating payment on backend");


  try {
   const {leadId, plan} = req.body;

   const lead = await Lead.findById(leadId)

   if(!lead) {
    return res.status(500).json({ message: "No customer created"})
   }

    const chosenPlan = (plan || "basic").toLowerCase();
    const amount = PRICING[chosenPlan] || PRICING.basic;

    const orderReference = uuidv4();
    const paymentReference = uuidv4();

    // const payfastUrl = "https://sandbox.payfast.co.za/eng/process";
    const payfastUrl = "https://www.payfast.co.za/eng/process"; // Live URL
    //  const merchantId = '10039862';
    //  const merchantKey = 'ddrsjo9ep59vx';
    const merchantId = process.env.PAYFAST_MERCHANT_ID;
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY;


    // 🔑 Payfast setup
    //  const merchant_id = '10039862';
    //  const merchant_key = 'ddrsjo9ep59vx';
    // const merchant_id = process.env.PAYFAST_MERCHANT_ID;
    // const merchant_key = process.env.PAYFAST_MERCHANT_KEY;
    const return_url = "https://review-automation.onrender.com/success" ;
    const cancel_url = "https://review-automation.onrender.com/cancel";
    const notify_url = "https://review-automation-backend.onrender.com/notify";

    // Build Payfast payment URL
    // const paymentData = {
    //   merchant_id,
    //   merchant_key,
    //   return_url,
    //   cancel_url,
    //   notify_url,
    //   amount: amount.toFixed(2),
    //   item_name: `${businessName} - ${firstName} ${lastName}`,
    //   email_address: emailAddress,
    //   custom_str1: customer._id.toString(), // track customer
    // };

    // Construct the query string
    const queryParams = new URLSearchParams({
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url,
      cancel_url,
      notify_url,
      amount: amount, // Example: "100.00"
      item_name: "Review Automation",
      email_address: lead.email,
      m_payment_id: paymentReference, // Include the reference as PayFast's custom field
      subscription_type: '1',  // 1 for recurring
      frequency: '3',  // Frequency: 3 = monthly
      cycles: '0',  // 0 for indefinite
      custom_str1: lead._id.toString() || '',
      custom_str2: lead.businessName || '',
    });

    const redirectUrl = `${payfastUrl}?${queryParams.toString()}`;

    // Save subscription attempt to DB
    await Subscription.create({
      leadId: lead._id,
      paymentReference,
      plan: chosenPlan,
      status: "pending",
      provider: "payfast",
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

    const leadId = pfData.custom_str1;
    await Lead.findByIdAndUpdate(leadId, { status: "paid" });

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
