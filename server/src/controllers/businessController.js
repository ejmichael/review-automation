const express = require('express');
const BusinessInfo = require('../models/businessInfoModel')

const createBusiness = async(req, res) => {

    const { 
        firstName, 
        lastName, 
        businessName, 
        description, 
        buildingNumber,
        buildingName,
        street,
        city,
        country,
        phone,
        emailAddress,
        website,
        instagram,
        facebook,
        googlePlaceId,
        profilePicture
     } = req.body;

     console.log("Data received:", req.body);
     
    
    const businessExists = await BusinessInfo.findOne({googlePlaceId});

    if(businessExists) {
        return res.status(400).json({message: "Business already registered."})
    }

    try {
        const business = await BusinessInfo.create({
            firstName, 
            lastName, 
            businessName, 
            description,
            buildingName, 
            buildingNumber,
            street,
            city,
            country,
            phone,
            emailAddress,
            website,
            instagram,
            facebook,
            googlePlaceId,
            reviews: [],
            profilePicture,
            isPaid: false
        });

        if(business) {
            console.log("Business Created");
            
            return res.status(201).json({message:"Business Created", business})
        }   
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }

    
}

const getBusinessInfo = async (req, res) => {
    const {businessId} = req.params;
    try {
        const business = await BusinessInfo.findById(businessId).populate('reviews').exec();

        if(!business) {
            res.status(400).json({message: "Business not registered."})
        }
        res.status(200).json(business);
      } catch (error) {
        res.status(500).json({ message: error.message });
      } 
}

module.exports = {
    createBusiness, 
    getBusinessInfo
}