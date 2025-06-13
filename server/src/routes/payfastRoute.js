const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const axios = require('axios');
const querystring = require('querystring');
const { initiateSubscription, handleNotify } = require("../controllers/paymentController");

const payfastRouter = express.Router()

  //IPN Test

  const merchantKey = 'xty3ticuu2gup';  // Replace with your sandbox merchant key
const merchantId = '26051467';

  payfastRouter.post('/ipn', async (req, res) => {
  const pfData = req.body;
  const incomingSignature = pfData.signature;

  // Step 1: Rebuild the signature
  const data = [
    pfData.merchant_key,
    pfData.m_payment_id,
    pfData.amount_gross,
    pfData.payment_status,
    secretKey,
  ].join('&');

  const calculatedSignature = crypto
    .createHash('md5')
    .update(data)
    .digest('hex');

  // Step 2: Compare the signatures
  if (incomingSignature !== calculatedSignature) {
    console.error('Signature mismatch!');
    return res.status(400).send('Signature mismatch');
  }

  // Step 3: Process the payment based on status
  if (pfData.payment_status === 'COMPLETE') {
    console.log('Subscription successful');
    // Save subscription status to MongoDB
    // Update user subscription status, etc.
  } else {
    console.error('Payment failed or cancelled');
  }

  // Send response to acknowledge receipt of IPN
  res.sendStatus(200);
});



payfastRouter.post("/subscribe", initiateSubscription);
payfastRouter.post("/notify", handleNotify); // PayFast IPN handler

module.exports = payfastRouter;
