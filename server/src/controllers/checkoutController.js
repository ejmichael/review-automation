const Lead = require("../models/leadsModel");

const startCheckout = async (req, res) => {
  try {
    const { firstName, email, phone, businessName, plan } = req.body;

    if (!firstName || !email || !phone || !businessName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingPending = await Lead.findOne({ email: email.toLowerCase().trim(), status: "pending" });
    if (existingPending) {
      return res.status(200).json({ leadId: existingPending._id, message: "Lead already started" });
    }

    const lead = await Lead.create({
      firstName,
      email,
      phone,
      businessName,
      plan: plan || "standard",
      status: "pending",
    });

    // Next step: generate PayFast subscription redirect URL and return it
    return res.status(201).json({ leadId: lead._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { startCheckout }