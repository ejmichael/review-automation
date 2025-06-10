import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://review-automation-backend.onrender.com"; // Replace with actual backend domain

  const initiateSubscription = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${domain}/api/payfast/subscribe`, {
        email: 'ethanj.michael03@gmail.com',
        name: 'Ethan',
      });

      if (res.data.redirectUrl) {
        window.location.href = res.data.redirectUrl;
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
