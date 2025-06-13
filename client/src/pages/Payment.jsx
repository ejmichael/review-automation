import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Payment = () => {
  const [searchParams] = useSearchParams();

  // Extract URL query params
  const emailFromUrl = searchParams.get("email") || "";
  const nameFromUrl = searchParams.get("name") || "";
  const googlePlaceIdFromUrl = searchParams.get("googlePlaceId") || "";

  // Backend domain config
  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://review-automation-backend.onrender.com";

  // Subscription details state (editable if needed)
  const [subscriptionDetails, setSubscriptionDetails] = useState({
    amount: "100.00",
    itemName: "Google Review Automation",
    returnUrl: "https://review-automation.onrender.com/success",
    cancelUrl: "https://review-automation.onrender.com/success",
    notifyUrl: "https://www.bloodsugartracker.co.za/notify",
  });

  // User info state (pre-filled from URL)
  const [userInfo, setUserInfo] = useState({
    email: emailFromUrl,
    name: nameFromUrl,
    googlePlaceId: googlePlaceIdFromUrl,
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes if you want user to be able to update email or name here
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Main function to initiate payment subscription
  const initiateSubscription = async () => {
    if (!userInfo.email || !userInfo.name) {
      alert("Please provide your name and email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${domain}/api/payfast/subscribe`, {
        ...subscriptionDetails,
        email: userInfo.email,
        name: userInfo.name,
        // Pass googlePlaceId in some metadata field for tracking in backend
        googlePlaceId: userInfo.googlePlaceId,
      });

      if (res.data.redirectUrl) {
        window.location.href = res.data.redirectUrl;
      } else {
        alert("Could not start subscription. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("An error occurred while starting the subscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] py-12 bg-gradient-to-tl from-blue-200 via-indigo-100 to-white">
  <div className="max-w-md mx-auto mt-16 p-6 border rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Confirm Your Subscription
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            placeholder="Your Full Name"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="itemName">
            Subscription Plan
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={subscriptionDetails.itemName}
            readOnly
            className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1" htmlFor="amount">
            Amount (ZAR)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={subscriptionDetails.amount}
            readOnly
            className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          onClick={initiateSubscription}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {loading ? "Processing Payment..." : "Complete Registration & Pay"}
        </button>
      </div>
    </div>
    
  );
};

export default Payment;
