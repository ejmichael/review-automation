const express = require('express')
const ContactForm = require('../models/contactFormSchema')
const nodemailer = require("nodemailer");

const submitContactForm = async (req, res) => {
    try {
        const {name, emailAddress, message} = req.body;
        console.log({name, emailAddress, message});
        
        const newContact = new ContactForm({ name, emailAddress, message })
        await newContact.save();

        //send email
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // where to receive alerts
            subject: `📩 New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${emailAddress}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success:true, message: "Message sent successfully"})
        
    } catch (error) {
        console.error("Error submitting form");
        res.status(500).json({ success: false, message: "Something went wrong"})
    }

}

module.exports = {submitContactForm}