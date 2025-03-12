const mongoose = require('mongoose')

const businessInfoSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  description: { type: String, required: true },
  buildingNumber: { type: String,},
  street: { type: String,  },
  city: { type: String, },
  country: { type: String, },
  phone: { type: String, required: true },
  emailAddress: { type: String, required: true },
  website: { type: String, required: true },
  instagram: { type: String,  },
  facebook: { type: String,  },
  googlePlaceId: { type: String, unique: true, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  profilePicture: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BusinessInfo', businessInfoSchema);
