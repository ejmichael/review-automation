const express = require('express');
const { createReview, getReviewsByBusiness } = require('../controllers/reviewController');
const router = express.Router();

router.post('/', createReview);
router.get('/:businessID', getReviewsByBusiness);

module.exports = router;