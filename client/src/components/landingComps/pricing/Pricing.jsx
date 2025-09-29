import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "R399/mo",
      features: [
        "Automated Google Review Requests",
        "Custom Flyer Design",
        "Monthly Review Report and Analysis",
      ],
      highlight: false,
      slug: "basic"
    },
    {
      name: "Growth",
      price: "R1099/mo",
      features: [
        "Everything in Basic",
        "Lead Generation",
        "Segment & Target Leads",
        "Weekly SMS OR Email Ads",
        "Basic Analytics Insights",
      ],
      highlight: true,
      slug: "growth"
    },
    {
      name: "Comprehensive",
      price: "R1499/mo",
      features: [
        "Everything in Growth",
        "Weekly Email & SMS Ads",
        "Automated Marketing Workflows",
        "Full Analytics Dashboard",
      ],
      highlight: false,
      slug: "comprehensive"
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600">
          Select the package that helps your business grow faster.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div 
            key={idx}
            className={` relative p-8 rounded-2xl shadow-lg border transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center ${
              plan.highlight
                ? "bg-indigo-100 text-indigo-600 border-indigo-500 shadow-indigo-300"
                : "bg-white text-gray-800 border-gray-200"
            }`}
          >
            {/* Badge for highlight plan */}
            {plan.highlight && (
              <div className="absolute p-3 top-[-8px] right-[5px] bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-2 rounded-t-md shadow-md shadow-slate-600">
                Most Popular
              </div>
            )}

            {/* Plan Name & Price */}
            <p className="text-2xl font-semibold mb-2">{plan.name}</p>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            {/* Features */}
            <ul className="mb-6 space-y-3 text-sm md:text-base">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center justify-center gap-2">
                  <span className="text-lime-300">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to={`/plan/${plan.slug}`} className="w-full">
              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Start Today
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
