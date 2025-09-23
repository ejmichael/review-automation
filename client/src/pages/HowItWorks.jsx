import React from "react";
import { FaCheckCircle, FaQrcode, FaUserPlus, FaEnvelopeOpenText, FaChartLine } from "react-icons/fa";
import Navbar from "../components/landingComps/navbar/Navbar";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Choose Your Plan",
      description:
        "Select the package that fits your business — Basic (reviews + flyer), Growth (reviews + lead generation), or Comprehensive (reviews + lead gen + SMS & Email campaigns).",
      icon: <FaCheckCircle className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Step 2: Onboarding & Setup",
      description:
        "We’ll collect your business details, design your branded flyers & review forms, and connect your Google Business Profile. Setup is quick and hassle-free.",
      icon: <FaQrcode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Step 3: Automated Review Requests",
      description:
        "Customers scan your flyer’s QR code or get an SMS/email after their visit. Happy customers leave 5-star Google reviews — boosting your visibility and trust.",
      icon: <FaChartLine className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Step 4: Lead Generation (Growth & Comprehensive Plans)",
      description:
        "We create custom lead capture forms and landing pages for your business. Every lead that signs up goes directly into your dashboard for tracking & targeting.",
      icon: <FaUserPlus className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Step 5: SMS & Email Campaigns (Comprehensive Plan)",
      description:
        "We’ll segment your leads and past customers, then send automated SMS & email campaigns with promotions, reminders, and offers — bringing them back again & again.",
      icon: <FaEnvelopeOpenText className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Step 6: Track Results",
      description:
        "Log in to your dashboard anytime to see reviews, new leads, and campaign performance. We also send you a monthly report with clear insights.",
      icon: <FaChartLine className="text-indigo-600 text-3xl" />,
    },
  ];

  return (
<>
    <Navbar/>
    <div className="w-full bg-gray-50 py-12 px-6 mt-[65px]">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-600">
          From signup to success — here’s exactly how we help your business grow.
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex-col align-center flex items-start space-x-6 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition "
          >
            <div className="flex-shrink-0 mx-auto text-center mb-2">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
                  <Link to="/contact-us">
                    <button className="mb-2 py-3 px-6 border border-indigo-800 bg-indigo-600 rounded-3xl text-white hover:text-blue-800 hover:bg-white transition">
                      Start today
                    </button>
                  </Link>
                  {/* <p className="text-xs">Offer expires November 30, 2025 — secure your spot now.</p> */}
                </div>
    </div>
</>
  );
};

export default HowItWorks;
