import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  // Domain based on the environment
  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://review-automation-backend.onrender.com"; // Replace with actual backend domain

  // Subscription details in state
  const [subscriptionDetails, setSubscriptionDetails] = useState({
    amount: '100.00',  // Example amount for subscription
    itemName: 'Google Review Automation',  // Item or service name
    returnUrl: 'https://www.bloodsugartracker.co.za/success', // URL for successful payment
    cancelUrl: 'https://www.bloodsugartracker.co.za/cancel',  // URL for cancelled payment
    notifyUrl: 'https://www.bloodsugartracker.co.za/notify',  // IPN handler URL
  });

  // Function to initiate the subscription
  const initiateSubscription = async () => {
    setLoading(true);
    try {
      // Sending subscription details to backend to generate the PayFast URL
      const res = await axios.post(`${domain}/api/payfast/subscribe`, {
        email: 'ethanj.michael03@gmail.com',  // Add dynamic email or user info
        name: 'Ethan',  // Add dynamic name or user info
        ...subscriptionDetails,  // Spread subscription details to pass them to the backend
      });

      if (res.data.redirectUrl) {
        window.location.href = res.data.redirectUrl;  // Redirect to PayFast payment page
      } else {
        alert("Could not start subscription. Please try again.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      alert("An error occurred while starting the subscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={initiateSubscription}
      disabled={loading}
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
    >
      {loading ? "Processing..." : "Subscribe Now"}
    </button>
  );
};

export default Payment;
