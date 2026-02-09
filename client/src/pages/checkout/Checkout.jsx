import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/landingComps/navbar/Navbar";
import axios from "axios";
import ReactGA from "react-ga4";

const Checkout = () => {
  const { planSlug } = useParams();

  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://review-automation-backend.onrender.com";

  // Keep plan display ONLY (pricing is decided server-side)
  const plans = useMemo(
    () => [
      { name: "Basic", slug: "basic", description: "Perfect for small businesses just starting with Google reviews." },
      { name: "Growth", slug: "growth", description: "Ideal for businesses looking to grow reviews and generate leads." },
      { name: "Comprehensive", slug: "comprehensive", description: "Full package for businesses that want automation & customer retention." },
    ],
    []
  );

  const selectedPlan = plans.find((p) => p.slug === planSlug) || plans[0];

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    businessName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.firstName.trim()) return "Please enter your first name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!formData.phone.trim()) return "Please enter your phone number.";
    if (!formData.businessName.trim()) return "Please enter your business name.";
    return null;
  };

  const handlePayment = async () => {
    const err = validate();
    if (err) return alert(err);

    setLoading(true);

    try {
      ReactGA.event({
        category: "Checkout",
        action: "Click Pay Now",
        label: selectedPlan.slug,
      });

      // 1) Create Lead
      const leadRes = await axios.post(`${domain}/api/checkout/start`, {
        firstName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        plan: selectedPlan.slug,
      });

      const leadId = leadRes.data.leadId;
      if (!leadId) throw new Error("Lead not created");

      // 2) Create subscription and get PayFast URL
      const subRes = await axios.post(`${domain}/api/payfast/subscribe`, {
        leadId,
        plan: selectedPlan.slug,
      });

      const redirectUrl = subRes.data.redirectUrl;
      if (!redirectUrl) throw new Error("No redirectUrl returned");

      // 3) Redirect to PayFast
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Checkout error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
      setLoading(false);
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
            <p className="text-sm text-gray-600 mt-2">{selectedPlan.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              Payment is processed securely via PayFast.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">What happens next?</h3>
            <p className="text-sm text-gray-700 mb-2">
              Once payment is complete, we’ll reach out within 24 hours to set everything up for you.
            </p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li>We’ll collect your business photos, branding and contact details</li>
              <li>We’ll create and customise your Google Review QR code</li>
              <li>We’ll prepare your printed review cards / signage</li>
              <li>We’ll coordinate delivery or installation (if applicable)</li>
              <li>You’ll receive setup updates and onboarding support</li>
            </ul>
          </div>

          {/* Short Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="businessName"
              placeholder="Your business name"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </form>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Redirecting to PayFast..." : "Pay Now"}
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            By paying, you agree to our terms and subscription billing.
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
