import React from 'react'

const CaseStudies = () => {

    const testimonials = [
    {
      name: "Sizwe, Restaurant Owner",
      quote: "Our Google reviews doubled in just one month! The automated campaigns brought back old customers effortlessly.",
    },
    {
      name: "Lerato, Salon Manager",
      quote: "Lead generation and SMS campaigns have helped us fill slow days. This system pays for itself!",
    },
    {
      name: "Michael, Cafe Owner",
      quote: "Easy to set up and track. The flyers and review forms look professional and drive real results.",
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Real businesses, real results.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 rounded-xl shadow-xl bg-gray-50">
            <p className="mb-4 italic">"{t.quote}"</p>
            <p className="font-semibold text-gray-800">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies