const qs = require("qs");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

// Generate signature for PayFast request
const generateSignature = (params, passphrase) => {
  const string = qs.stringify(params, { encode: false });
  const finalString = passphrase ? `${string}&passphrase=${passphrase}` : string;
  return crypto.createHash("md5").update(finalString).digest("hex");
};

// Initiate PayFast subscription
exports.initiateSubscription = (req, res) => {

  const { email, name } = req.body;
  const paymentRef = uuidv4();

  console.log(email, name);
  

  const data = {
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    // merchant_key: process.env.PAYFAST_MERCHANT_KEY,
    return_url: "https://review-automation.onrender.com/success",
    cancel_url: "https://review-automation.onrender.com/cancel",
    notify_url: "https://review-automation-backend.onrender.com/api/payfast/notify",
    m_payment_id: paymentRef,
    amount: 199.00,
    item_name: "Monthly Subscription",
    name_first: name || "Subscriber",
    email_address: email,

    // Subscription fields
    subscription_type: 1,
    billing_date: new Date().toISOString().split("T")[0],
    recurring_amount: 199.00,
    frequency: 3, // 3 = Monthly
    cycles: 0 // Infinite
  };

  data.signature = generateSignature(data, "1lovePamlyn4ever");

  const redirectUrl = `https://sandbox.payfast.co.za/eng/process?${qs.stringify(data)}`;
  // const redirectUrl = `https://www.payfast.co.za/eng/process?${qs.stringify(data)}`;

  return res.status(200).json({
    redirectUrl,
    paymentReference: paymentRef,
  });
};

// Handle PayFast notify URL
exports.handleSubscriptionNotify = (req, res) => {
  // TODO: Validate PayFast response here
  const { payment_status, m_payment_id, custom_str1 } = req.body;
  console.log("PayFast Subscription Notification:", req.body);

  if (payment_status === "COMPLETE") {
    console.log(`✅ Subscription complete for ${m_payment_id}`);
    // Activate business in your DB
  } else {
    console.log(`⚠️ Payment status: ${payment_status}`);
  }

  res.status(200).send("OK");
};
