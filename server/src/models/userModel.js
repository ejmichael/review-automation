const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
    index: true
  },

  firstName: String,
  lastName: String,

  email: {
    type: String,
    unique: true,
    required: true
  },

  passwordHash: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['owner', 'manager'],
    default: 'owner'
  }

}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)