const mongoose = require('mongoose');

const customerInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, required: true
    },
    businessName: { type: String  },
    buildingNumber: { type: String,},
    street: { type: String,  },
    city: { type: String, },
    country: { type: String, },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    plan: {type: String},
    postalCode: {
        type: String,
    },
    isPaid: {
    type: Boolean,
    default: false
  },
}, {
    timestamps: true
})

module.exports = mongoose.model('CustomerInfo', customerInfoSchema)