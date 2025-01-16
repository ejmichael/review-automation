const mongoose = require('mongoose')

const businessInfoSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  emailAddress: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('BusinessInfo', businessInfoSchema);
