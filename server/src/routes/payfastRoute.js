const express = require("express");
const router = express.Router();
const { initiateSubscription, handleSubscriptionNotify } = require("../controllers/payfastController");

const payfastRouter = express.Router()

payfastRouter.post("/subscribe", initiateSubscription);
payfastRouter.post("/notify", handleSubscriptionNotify); // PayFast IPN handler

module.exports = payfastRouter;
