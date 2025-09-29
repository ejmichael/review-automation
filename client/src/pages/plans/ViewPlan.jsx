import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/landingComps/navbar/Navbar";

const ViewPlan = () => {
  const { planSlug } = useParams();

  // Plans data (kept local to this component)
  const plans = [
    {
      name: "Basic",
      slug: "basic",
      price: "R399/mo",
      description:
        "Perfect for small businesses just starting with Google reviews. Get your brand seen, trusted, and chosen.",
      features: [
        "Automated Google Review Requests",
        "Custom Flyer Design",
        "Monthly Review Report and Analysis",
      ],
      extras: [
        "Email support",
        "Simple onboarding setup",
        "Cancel anytime, no hidden fees",
      ],
    },
    {
      name: "Growth",
      slug: "growth",
      price: "R1099/mo",
      description:
        "Ideal for businesses looking to grow reviews and generate leads with targeted campaigns.",
      features: [
        "Everything in Basic",
        "Lead Generation Tools",
        "Segment & Target Leads",
        "Weekly SMS OR Email Ads",
        "Basic Analytics Insights",
      ],
      extras: [
        "Priority support",
        "Custom branding on review requests",
        "Lead tracking dashboard",
      ],
    },
    {
      name: "Comprehensive",
      slug: "comprehensive",
      price: "R1499/mo",
      description:
        "Full package for businesses that want automation, marketing, and customer retention in one place.",
      features: [
        "Everything in Growth",
        "Weekly Email & SMS Campaigns",
        "Automated Marketing Workflows",
        "Full Analytics Dashboard",
      ],
      extras: [
        "Dedicated account manager",
        "Advanced reporting tools",
        "Premium support (phone + email)",
      ],
    },
  ];

  // Find the plan by slug
  const selectedPlan = plans.find((plan) => plan.slug === planSlug);

  if (!selectedPlan) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Plan not found</h2>
        <p className="text-gray-600 mt-2">
          Please go back and choose a valid plan.
        </p>
        <Link
          to="/plans"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Back to Plans
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50 py-16 px-6 mt-[70px]">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
          {/* Plan Header */}
          <div className="border-b pb-6 mb-8 text-center">
            <h1 className="text-4xl font-bold text-indigo-600 mb-3">
              {selectedPlan.name} Plan
            </h1>
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              {selectedPlan.price}
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedPlan.description}
            </p>
          </div>

          {/* Features & Extras in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                What’s Included
              </h2>
              <ul className="space-y-3">
                {selectedPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 text-lg">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Extra Benefits
              </h2>
              <ul className="space-y-3">
                {selectedPlan.extras.map((extra, idx) => (
                  <li key={idx} className="flex items-center align-center  text-gray-700">
                    <span className="text-indigo-500  text-lg mr-2">★</span>
                    <span>{extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to={`/checkout/${selectedPlan.slug}`}>
              <button className="px-10 py-4 text-lg bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
                Get Started with {selectedPlan.name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPlan;
