const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const BusinessInfo = require('../models/businessInfoModel')

const protect = asyncHandler(async( req, res, next ) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from headers
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await BusinessInfo.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not authorized")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("No token")
    }
})

module.exports = {protect}