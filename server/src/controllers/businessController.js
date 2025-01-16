const express = require('express');
const BusinessInfo = require('../models/businessInfoModel')

const createBusiness = async(req, res) => {
    
    const businessExists = await BusinessInfo.find(req.body.businessId);

    if(businessExists) {
        res.status(400).json({message: "Business already exists."})
    }

    try {
        const business = await BusinessInfo.create(req.body);

        if(business) {
            res.status(201).json(business)
        }   
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }

    
}

const getBusinessInfo = async (req, res) => {
    try {
        const businesses = await Business.find();
        res.status(200).json(businesses);
      } catch (error) {
        res.status(500).json({ message: error.message });
      } 
}

module.exports = {
    createBusiness, 
    getBusinessInfo
}