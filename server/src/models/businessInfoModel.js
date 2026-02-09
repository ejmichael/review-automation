const mongoose = require('mongoose')

const businessInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    googlePlaceId: { type: String, index: true, default: null },

    contact: {
      email: { type: String, trim: true, lowercase: true },
      phone: { type: String, trim: true },
    },

    onboardingCompleted: { type: Boolean, default: false },

    profilePicture: { type: String, default: "" },

    socials: {
      website: String,
      instagram: String,
      facebook: String,
    },

    address: {
      buildingNumber: String,
      street: String,
      city: String,
      country: String,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('BusinessInfo', businessInfoSchema);
