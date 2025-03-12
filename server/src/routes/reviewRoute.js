const express = require('express');
const { createReview, getReviewsByBusiness } = require('../controllers/reviewController');
const reviewRouter = express.Router();

reviewRouter.post('/create/:businessID', createReview);
reviewRouter.get('/:businessID', getReviewsByBusiness);

module.exports = reviewRouter;