import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/landingComps/navbar/Navbar";
import axios from "axios";
import ReactGA from "react-ga4";

const Checkout = () => {
  const { planSlug } = useParams();

  // Plan data
  const plans = [
    { name: "Basic", slug: "basic", price: 399, description: "Perfect for small businesses just starting with Google reviews." },
    { name: "Growth", slug: "growth", price: 1099, description: "Ideal for businesses looking to grow reviews and generate leads." },
    { name: "Comprehensive", slug: "comprehensive", price: 1499, description: "Full package for businesses that want automation & customer retention." },
  ];

  const selectedPlan = plans.find((plan) => plan.slug === planSlug);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    businessName: "",
    street: "",
    buildingName: "",
    city: "",
    country: "South Africa",
    plan: planSlug,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

      const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";


  const handlePayment = async () => {
    ReactGA.event({
    category: "Checkout",
    action: "Click Pay Now",
    label: selectedPlan.name,
    value: parseInt(selectedPlan.price),
  });
    if (!selectedPlan) return;

    try {
      // 👇 Call backend API to save customer + get Payfast link
      const res = await axios.post(domain + "/customer/create", {
        ...formData,
        amount: selectedPlan.price, // pass plan amount
      });

      if (res.data.payfastUrl) {
        window.location.href = res.data.payfastUrl; // redirect to Payfast
      }
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!selectedPlan) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Plan not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50 py-16 px-2 mt-[70px]">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            Checkout – {selectedPlan.name} Plan
          </h1>

          {/* Plan Info */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold">{selectedPlan.name} Plan</p>
            <p className="text-xl font-bold text-indigo-600">R{selectedPlan.price}/mo</p>
            <p className="text-sm text-gray-600 mt-2">{selectedPlan.description}</p>
          </div>

          {/* User Form */}
          <form className="space-y-4">
            <div className="flex gap-2">
              <input type="text" name="firstName" placeholder="Your first name"
                value={formData.firstName} onChange={handleChange}
                className="w-full border p-3 rounded-lg" />
              <input type="text" name="lastName" placeholder="Your surname"
                value={formData.lastName} onChange={handleChange}
                className="w-full border p-3 rounded-lg" />
            </div>

            <input type="email" name="emailAddress" placeholder="Your email address"
              value={formData.emailAddress} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="phone" name="phoneNumber" placeholder="Your phone number"
              value={formData.phoneNumber} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="text" name="businessName" placeholder="Your business name"
              value={formData.businessName} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="text" name="street" placeholder="Street Address"
              value={formData.street} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="text" name="buildingName" placeholder="Apartment or building name (optional)"
              value={formData.buildingName} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="text" name="city" placeholder="City"
              value={formData.city} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />

            <input type="text" name="country" placeholder="Country"
              value={formData.country} onChange={handleChange}
              className="w-full border p-3 rounded-lg" />
          </form>

          {/* Payfast Button */}
          <button
            onClick={handlePayment}
            className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
