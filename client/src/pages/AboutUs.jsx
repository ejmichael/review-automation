import React from "react";
import { FaBullseye, FaHandshake, FaUsers, FaRocket } from "react-icons/fa";
import Navbar from "../components/landingComps/navbar/Navbar";

const AboutUs = () => {
  const values = [
    {
      title: "Our Mission",
      description:
        "We help small and medium-sized businesses grow online by turning happy customers into 5-star reviews, driving repeat visits, and attracting new leads with smart marketing.",
      icon: <FaBullseye className="text-indigo-600 text-3xl" />,
    },
    {
      title: "What We Do",
      description:
        "From review automation to SMS & email campaigns, we give your business the tools to build trust, generate leads, and boost revenue - all in one platform.",
      icon: <FaRocket className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Why Choose Us",
      description:
        "We make automation simple, affordable, and effective. Our done-for-you setup ensures you see results quickly - without needing a tech team or big budgets.",
      icon: <FaHandshake className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Who We Serve",
      description:
        "We work with restaurants, salons, clinics, fitness studios, and other local businesses that want to build trust, grow visibility, and keep customers coming back.",
      icon: <FaUsers className="text-indigo-600 text-3xl" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50 py-12 px-6 my-[65px]">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About <span className="text-indigo-600">Easy</span> Reviews</h1>
          <p className="text-lg text-gray-600">
            Your partner in automating reviews, marketing, and lead generation - so
            you can focus on running your business.
          </p>
        </div>

        {/* Values / About Blocks */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start space-y-4 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow With Us?</h2>
          <p className="text-gray-600 mb-6">
            Let’s help you turn happy customers into growth.
          </p>
          <a href="/contact-us">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
