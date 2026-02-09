const express = require('express')
const { startCheckout } = require("../controllers/checkoutController");

const checkoutRouter = express.Router()

checkoutRouter.post('/start', startCheckout)

module.exports = checkoutRouter