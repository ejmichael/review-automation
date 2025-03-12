const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    businessID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BusinessInfo',
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
    },
    email: {
      type: String,
    },
    optInSMS: {
      type: Boolean,
      default: false,
    },
    optInEmail: {
      type: Boolean,
      default: false,
    },
    feedback: {
      type: String,
    }
  }, { 
    timestamps: true 
});
  module.exports = mongoose.model('Review', reviewSchema)