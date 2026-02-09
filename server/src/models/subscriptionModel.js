const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema(
  {
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business", default: null, index: true },
    leadId: { type: mongoose.Schema.Types.ObjectId, ref: "Lead", default: null, index: true },

    plan: { type: String, default: "standard" },
    status: { type: String, enum: ["pending", "active", "cancelled", "past_due"], default: "pending" },

    paymentReference: { type: String, required: true, index: true }, // m_payment_id
    provider: { type: String, default: "payfast" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
