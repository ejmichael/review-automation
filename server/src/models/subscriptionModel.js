// models/Subscription.js
const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  googlePlaceId: { type: String },
  paymentReference: { type: String, required: true }, // m_payment_id
  orderReference: { type: String },
  status: { type: String, default: 'pending' }, // pending, completed, failed
  source: { type: String, default: 'payfast' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

SubscriptionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
