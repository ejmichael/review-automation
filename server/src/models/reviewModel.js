const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    businessID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    optInSMS: {
      type: Boolean,
      default: false,
    },
    optInEmail: {
      type: Boolean,
      default: false,
    },
  }, { 
    timestamps: true 
});
  module.exports = mongoose.model('Review', reviewSchema)