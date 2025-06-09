// routes/payfast.js
import express from 'express';
import crypto from 'crypto';
import qs from 'querystring';
const router = express.Router();

router.post('/payfast/subscribe', (req, res) => {
  const { businessID, email } = req.body;

  const data = {
    merchant_id: process.env.PAYFAST_MERCHANT_ID,
    merchant_key: process.env.PAYFAST_MERCHANT_KEY,
    return_url: `https://yourfrontend.com/dashboard/${businessID}/home`,
    cancel_url: `https://yourfrontend.com/cancel`,
    notify_url: `https://yourbackend.com/payfast/ipn`,

    name_first: 'Business',
    email_address: email,
    m_payment_id: businessID, // used to track the business
    amount: '199.00', // upfront payment
    item_name: 'Review Automation Subscription',
    subscription_type: 1,
    billing_date: new Date().toISOString().split('T')[0],
    recurring_amount: '199.00',
    frequency: 3, // monthly
    cycles: 0, // unlimited
  };

  let query = qs.stringify(data).replace(/%20/g, '+');

  if (process.env.PAYFAST_PASSPHRASE) {
    query += `&passphrase=${process.env.PAYFAST_PASSPHRASE}`;
  }

  const signature = crypto.createHash('md5').update(query).digest('hex');
  data.signature = signature;

  const redirectUrl = `https://www.payfast.co.za/eng/process?${qs.stringify(data)}`;
  res.json({ redirectUrl });
});

export default router;
zxzzzx