const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
    index: true
  },

  firstName: String,
  lastName: String,

  phone: String,
  email: String,

  optInSMS: Boolean,
  optInEmail: Boolean,

  tags: [String]

}, { timestamps: true })


module.exports = mongoose.model('CustomerInfo', CustomerSchema)