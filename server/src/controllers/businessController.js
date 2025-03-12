const express = require('express');
const BusinessInfo = require('../models/businessInfoModel')

const createBusiness = async(req, res) => {

    const { 
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
            profilePicture
        });

        if(business) {
            console.log("Created");
            
            return res.status(201).json({message:"created", business})
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