const express = require('express')

const { createCustomer } = require('../controllers/customerController')

const customerRoute = express.Router()

customerRoute.post('/create', createCustomer)

module.exports = customerRoute