const Review = require('../models/reviewModel');

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReviewsByBusiness = async (req, res) => {
  try {
    const reviews = await Review.find({ businessID: req.params.businessID });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReview, getReviewsByBusiness };
