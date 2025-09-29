import React from "react";
import { FaCheckCircle, FaQrcode, FaUserPlus, FaEnvelopeOpenText, FaChartLine } from "react-icons/fa";
import Navbar from "../components/landingComps/navbar/Navbar";
import { Link } from "react-router-dom";

const HowItWorks = () => {
const steps = [
  {
    title: "Choose Your Plan",
    description:
      "Pick the package that matches your goals. Whether you just need reviews, want reviews + new leads, or a complete growth system - we’ve got you covered.",
    icon: <FaCheckCircle className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Quick Onboarding",
    description:
      "Share your business details, logo, and Google profile. We’ll design your flyers, forms, and connect everything so you’re ready in just a few days.",
    icon: <FaQrcode className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Automated Review Requests",
    description:
      "Your customers get a simple text, email, or QR code link after their visit. Happy clients leave 5-star Google reviews - boosting your local visibility and trust.",
    icon: <FaChartLine className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Generate New Leads",
    description:
      "For Growth & Comprehensive plans, we create custom lead capture pages and forms. Every signup goes straight into your dashboard for follow-up and nurturing.",
    icon: <FaUserPlus className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Automated SMS & Email Campaigns",
    description:
      "With the Comprehensive plan, we segment your leads and past customers, then run SMS & email campaigns with promotions, reminders, and offers to drive repeat business.",
    icon: <FaEnvelopeOpenText className="text-indigo-600 text-3xl" />,
  },
  {
    title: "Track Results Anytime",
    description:
      "Log in to your dashboard to see reviews, new leads, and campaign performance. Plus, you’ll get a monthly report with clear, actionable insights.",
    icon: <FaChartLine className="text-indigo-600 text-3xl" />,
  },
];

  return (
<>
    <Navbar/>
    <div className="w-full bg-gray-50 py-12 px-6 mt-[65px]">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">How the System Works</h1>
        <p className="text-lg text-gray-600">
          From signup to success - here’s exactly how we help your business grow.
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex-col align-center flex items-start md:space-x-6 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition "
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
