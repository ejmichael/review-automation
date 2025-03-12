const express = require('express');
const {createBusiness, getBusinessInfo} = require('../controllers/businessController')

const businessRouter = express.Router();

businessRouter.post('/create', createBusiness);
businessRouter.get('/:businessId', getBusinessInfo);

module.exports = businessRouter;