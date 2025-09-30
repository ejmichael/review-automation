const CustomerInfo = require('../models/customerInfoModel');
const crypto = require('crypto'); // for Payfast signature if needed
const nodemailer = require('nodemailer')

const createCustomer = async (req, res) => {
  const { 
    firstName, 
    lastName, 
    businessName, 
    buildingName,
    street,
    city,
    country,
    phoneNumber,
    emailAddress,
    amount // 💰 pass in the plan amount from frontend
  } = req.body;

  try {
    // Check if customer already exists
    const customerExists = await CustomerInfo.findOne({ emailAddress });
    if (customerExists) {
      return res.status(400).json({ message: "Customer already registered." });
    }

    // Create customer
    const customer = await CustomerInfo.create({
      firstName,
      lastName,
      businessName,
      buildingName,
      street,
      city,
      country,
      phoneNumber,
      emailAddress,
      isPaid: false,
    });

    if (!customer) {
      return res.status(400).json({ message: "Customer not created" });
    }

    // 🔑 Payfast setup
    //  const merchant_id = '10039862';
    //  const merchant_key = 'ddrsjo9ep59vx';
    const merchant_id = process.env.PAYFAST_MERCHANT_ID;
    const merchant_key = process.env.PAYFAST_MERCHANT_KEY;
    const return_url = "https://review-automation.onrender.com/success" ;
    const cancel_url = "https://review-automation.onrender.com/cancel";
    const notify_url = "https://review-automation-backend.onrender.com/notify";

    // Build Payfast payment URL
    const paymentData = {
      merchant_id,
      merchant_key,
      return_url,
      cancel_url,
      notify_url,
      amount: amount.toFixed(2),
      item_name: `${businessName} - ${firstName} ${lastName}`,
      email_address: emailAddress,
      custom_str1: customer._id.toString(), // track customer
    };

    // Convert data to query string
    const queryString = Object.keys(paymentData)
      .map((key) => `${key}=${encodeURIComponent(paymentData[key])}`)
      .join("&");

    //const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;
    const payfastUrl = `https://www.payfast.co.za/eng/process?${queryString}`;

    // Send payment URL back to frontend
    return res.status(201).json({
      message: "Customer created, redirect to Payfast",
      payfastUrl,
      customerId: customer._id,
    });

  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({ message: error.message });
  }
};


const notifyPayment = async (req, res) => {
  try {
    const { payment_status, custom_str1, email_address, amount_gross } = req.body;

    if (payment_status !== "COMPLETE") {
      return res.status(400).send("Payment not complete");
    }

    // Find the customer using the ID passed in custom_str1
    const customer = await CustomerInfo.findById(custom_str1);
    if (!customer) return res.status(404).send("Customer not found");

    // Update DB
    customer.isPaid = true;
    await customer.save();

    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    // Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `💰 New Payment Received from ${customer.businessName}`,
      text: `
        Customer: ${customer.firstName} ${customer.lastName}
        Email: ${customer.emailAddress}
        Business: ${customer.businessName}
        Amount Paid: R${amount_gross}
      `,
    });

    // Email to CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: customer.emailAddress,
      subject: `✅ Payment Received - Welcome aboard!`,
      text: `
        Hi ${customer.firstName},

        Thank you for your payment of R${amount_gross}.
        Our team will be in touch with you shortly to:
        - Arrange collection of your material
        - Set up your review card
        - Help you get started with the system

        Welcome to the family 🎉
      `,
    });

    return res.status(200).send("Payment processed and emails sent");

  } catch (err) {
    console.error("Notify payment error:", err);
    res.status(500).send("Error handling payment");
  }
};


module.exports = {
  createCustomer,
  notifyPayment
};
