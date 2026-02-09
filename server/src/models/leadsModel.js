const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema( {
    firstName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, required: true, trim: true },
    businessName: { type: String, required: true, trim: true },

    plan: { type: String, default: "standard" },

    status: {
      type: String,
      enum: ["pending", "paid", "expired"],
      default: "pending",
      index: true,
    },

    paymentReference: { type: String }, // m_payment_id
  },
  { timestamps: true })

module.exports = mongoose.model('Lead', LeadSchema)