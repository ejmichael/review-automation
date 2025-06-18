const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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
        profilePicture,
        password
     } = req.body;

     console.log("Data received:", req.body);
     
    
    const businessExists = await BusinessInfo.findOne({googlePlaceId});

    if(businessExists) {
        return res.status(400).json({message: "Business already registered."})
    }

    // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPW = await bcrypt.hash(password, salt)

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
            isPaid: false,
            password: hashedPW
        });

        if(business) {
            console.log("Business Created");
            
            return res.status(201).json({
                message:"Business Created", 
                business: {
                _id: business.id,
                firstName: business.firstName,
                emailAddress: business.emailAddress,
                token: generateToken(business._id)  
            }})
        }   
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }

    
}

const loginBusiness = async (req, res) => {
    const {emailAddress, password} = req.body;

    console.log(emailAddress, password); 
    
    try {
        const businessExists = await BusinessInfo.findOne({emailAddress});

        if(!businessExists){
            res.status(400).json({ message: "Business account not found"})
            return
        }

        const isMatch = await bcrypt.compare(password, businessExists.password);
        
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        if(businessExists && isMatch){
        res.status(201).json({
            message: 'Login Successful',
            business: {
                _id: businessExists.id,
                firstName: businessExists.firstName,
                emailAddress: businessExists.emailAddress,
                token: generateToken(businessExists._id)  
            }})}

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error during login"})
        
    }

}

const getBusinessInfo = async (req, res) => {
    //const {email, password} = req.body;
    const {businessID} = req.params;
    try {
        const business = await BusinessInfo.findById(businessID).populate('reviews').exec();

        if(!business) {
            res.status(400).json({message: "Business not registered."})
        }
        res.status(200).json(business);
      } catch (error) {
        res.status(500).json({ message: error.message });
      } 

}

//generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}

module.exports = {
    createBusiness, 
    getBusinessInfo,
    loginBusiness
}