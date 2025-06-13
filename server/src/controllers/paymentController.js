const qs = require('qs');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const querystring = require('querystring');

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
exports.initiateSubscription = (req, res) => {
 console.log("Initiating payment  on backend");
    
  const { amount, itemName, email } = req.body;
    const orderReference = uuidv4();
    const paymentReference = uuidv4(); 
  
    // Your PayFast merchant credentials
    // const payfastUrl = "https://sandbox.payfast.co.za/eng/process"; // Testing URL
    // const merchantId = "10000100"; // Replace with actual Merchant ID
    // const merchantKey = "46f0cd694581a"; // Replace with actual Merchant Key
    const payfastUrl = "https://www.payfast.co.za/eng/process"; // Live URL
    const merchantId = process.env.PAYFAST_MERCHANT_ID; // Replace with actual Merchant ID
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY; // Replace with actual Merchant Key
    const returnUrl = "https://www.bloodsugartracker.co.za/success";
    const cancelUrl = "https://www.bloodsugartracker.co.za/cancel";
    const notifyUrl = "https://www.bloodsugartracker.co.za/notify";
  
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
    });
  
    const redirectUrl = `${payfastUrl}?${queryParams.toString()}`;

    // Send the reference and redirect URL back to the client
    res.status(200).json({
      redirectUrl,
      paymentReference,
      orderReference, // Include the reference for use in order creation
    });

    console.log("response sent");
};

exports.handleNotify = (req, res) => {
  console.log('🔔 ITN Received:', req.body);

  if (req.body.payment_status === 'COMPLETE') {
    console.log('✅ Subscription complete for', req.body.m_payment_id);
    // Activate user or update DB here
  }

  res.status(200).send('OK');
};
