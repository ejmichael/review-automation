const Review = require('../models/reviewModel');
const BusinessInfo = require('../models/businessInfoModel')

const createReview = async (req, res) => {
  try {
    const {businessID} = req.params;
    const {reviewData} = req.body;

    const businessExists = await BusinessInfo.findById(businessID)
    
    const reviewedByUser = await Review.findOne({
      $or: [
        { phone},
        { email }
      ]
    });

    if(!businessExists) {
      res.status(400).json({ message: "Business not found!" });
      return
    }

    if(reviewedByUser) {
      res.status(400).json({ message: "You have already submitted a review!" });
      return
    }
   
    
    const review = await Review.create(reviewData);
    
    businessExists.reviews.push(review._id);
    await businessExists.save();

    console.log(reviewData);
    
    res.status(201).json({message:"Review added successfully", review});
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
