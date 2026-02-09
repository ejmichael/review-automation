const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
    index: true
  },

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },

  rating: {
    type: Number,
    min: 1,
    max: 5
  },

  feedback: String,

  redirectedToGoogle: Boolean

}, { timestamps: true })

module.exports = mongoose.model('Feedback', FeedbackSchema)
