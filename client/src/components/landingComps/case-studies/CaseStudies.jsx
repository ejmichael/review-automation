import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const testimonials = [
    {
      name: "Simone",
      role: "Restaurant Owner",
      quote:
        "Our Google reviews doubled in just one month! The automated campaigns brought back old customers effortlessly.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Liam",
      role: "Salon Manager",
      quote:
        "Lead generation and SMS campaigns have helped us fill slow days. This system pays for itself!",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Michael",
      role: "Cafe Owner",
      quote:
        "Easy to set up and track. The flyers and review forms look professional and drive real results.",
      avatar: "https://i.pravatar.cc/100?img=18",
    },
    {
      name: "Tammy",
      role: "Gym Owner",
      quote:
        "The SMS reminders brought members back after months away. Our retention rate has never been higher.",
      avatar: "https://i.pravatar.cc/100?img=24",
    },
    {
      name: "Ayesha",
      role: "Boutique Owner",
      quote:
        "The combination of reviews + email marketing has grown our monthly revenue by 30%.",
      avatar: "https://i.pravatar.cc/100?img=31",
    },
  ];

  return (
    <div className="w-full bg-slate-100 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real businesses. Real growth. Real results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />

            {/* Quote */}
            <p className="italic text-gray-700 mb-4">"{t.quote}"</p>

            {/* Stars */}
            <div className="flex justify-center mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-sm mx-0.5"
                  />
                ))}
            </div>

            {/* Name & Role */}
            <p className="font-semibold text-gray-800">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
      <div className="my-4 py-2">
                <Link to="/contact">
                  <p className="my-4">Find out how we can help your business</p>
                  <button className="mb-4 md:py-3 md:px-6 py-2 px-3 w-[50%] border border-indigo-800 bg-indigo-600 rounded-3xl text-white hover:text-blue-800 hover:bg-white transition">
                    Contact us
                  </button>
                </Link>
                {/* <p className="text-xs">Offer expires November 30, 2025 — secure your spot now.</p> */}
              </div>
    </div>
  );
};

export default CaseStudies;
