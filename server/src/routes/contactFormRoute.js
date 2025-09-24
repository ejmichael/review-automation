const express = require('express')
const {submitContactForm} = require('../controllers/contactFormController') 
const contactFormRouter = express.Router();

contactFormRouter.post("/contact", submitContactForm);

module.exports = contactFormRouter;
