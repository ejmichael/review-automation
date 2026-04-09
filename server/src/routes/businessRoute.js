const express = require('express');
const {createBusiness, getBusinessInfo, loginBusiness, checkCustomerExists} = require('../controllers/businessController')

const businessRouter = express.Router();

businessRouter.post('/create', createBusiness);
businessRouter.post('/login', loginBusiness);
businessRouter.get('/get-business-info/:businessID', getBusinessInfo);
businessRouter.get('/validate-customer/:leadId', checkCustomerExists);

module.exports = businessRouter;