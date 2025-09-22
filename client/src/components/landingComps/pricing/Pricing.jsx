import React from 'react';

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
    },
    {
      name: "Growth",
      price: "R799/mo",
      features: [
        "Everything in Basic",
        "Lead Generation",
        "Segment & Target Leads",
        "Dashboard Insights",
      ],
      highlight: true,
    },
    {
      name: "Comprehensive",
      price: "R1499/mo",
      features: [
        "Everything in Growth",
        "Email & SMS Campaigns",
        "Automated Marketing Workflows",
        "Full Analytics Dashboard",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-lg text-gray-600">
          Select the package that helps your business grow faster.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div key={idx} className={`p-8 rounded-2xl shadow-xl flex flex-col items-center text-center ${
            plan.highlight ? "bg-indigo-600 text-white scale-105" : "bg-white text-gray-800"
          }`}>
            <p className="text-xl font-semibold mb-2">{plan.name}</p>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center justify-center gap-2">✅ {feature}</li>
              ))}
            </ul>
            <button className={`px-6 py-3 rounded-full font-semibold ${
              plan.highlight
                ? "bg-white text-indigo-600 hover:bg-gray-100"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}>
              Start Today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
