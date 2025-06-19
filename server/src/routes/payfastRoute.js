const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const axios = require('axios');
const querystring = require('querystring');
const { initiateSubscription, handleNotify } = require("../controllers/paymentController");

const payfastRouter = express.Router()


payfastRouter.post("/subscribe", initiateSubscription);
payfastRouter.post("/notify", handleNotify); // PayFast IPN handler

module.exports = payfastRouter;
