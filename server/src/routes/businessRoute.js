const express = require('express');
const {createBusiness, getBusinessInfo} = require('../controllers/businessController')

const router = express.Router();

router.post('/', createBusiness);
router.get('/', getBusinessInfo);

module.exports = router;