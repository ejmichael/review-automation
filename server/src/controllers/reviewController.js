const Review = require('../models/reviewModel');
const BusinessInfo = require('../models/businessInfoModel')

const createReview = async (req, res) => {
  try {
    const { businessID } = req.params;
    const { reviewData } = req.body;

    console.log("Received data:", req.body);

    if (!reviewData) {
      return res.status(400).json({ message: "Review data is missing!" });
    }

    const { phone, email } = reviewData; // Extract phone and email safely

    const businessExists = await BusinessInfo.findById(businessID);

    if (!businessExists) {
      return res.status(400).json({ message: "Business not found!" });
    }

    const reviewedByUser = await Review.findOne({
      $or: [{ phone }, { email }],
    });

    if (reviewedByUser) {
      return res.status(400).json({ message: "You have already submitted a review!" });
    }

    const review = await Review.create(reviewData);

    businessExists.reviews.push(review._id);
    await businessExists.save();

    console.log("Review Created:", review);

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    console.error("Error creating review:", error);
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
