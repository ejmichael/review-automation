import React from 'react';
import { FaStar, FaQrcode, FaEnvelopeOpenText } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ThreeBlocks = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Collect Reviews Effortlessly",
      description:
        "Customers scan your QR code or receive an automatic SMS/email after their visit. They leave a quick rating and feedback tailored to your business.",
      icon: <FaQrcode className="text-3xl text-indigo-600" />,
    },
    {
      step: "Step 2",
      title: "Build Trust & Visibility",
      description:
        "Every 5-star review boosts your Google ranking and reputation, helping your business stand out from competitors and attract new customers.",
      icon: <FaStar className="text-3xl text-indigo-600" />,
    },
    {
      step: "Step 3",
      title: "Bring Customers Back",
      description:
        "Send automated SMS & email campaigns to past customers with promotions, reminders, and offers — driving repeat visits and more revenue.",
      icon: <FaEnvelopeOpenText className="text-3xl text-indigo-600" />,
    },
  ];

  return (
<section className="relative w-full bg-gray-100 py-16 px-6">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">How Our System Works</h2>
    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
      From reviews to repeat sales - everything you need in one simple process.
    </p>
  </div>

  {/* Steps container */}
  <div className="relative max-w-6xl mx-auto">
    {/* Center vertical line relative to steps only */}
    <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-indigo-300 h-full -translate-x-1/2"></div>

    {steps.map((step, index) => (
      <div key={index} className="mb-12 md:mb-0 relative md:flex md:items-center">
        {/* Step block */}
        <motion.div
          className={`p-6 rounded-[25px] shadow-xl bg-white flex flex-col text-center md:w-5/12
            ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex justify-center items-center bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4">
            {step.icon}
          </div>
          <p className="text-sm font-bold text-indigo-600 uppercase mb-2">{step.step}</p>
          <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </motion.div>

        {/* Dot on the center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full top-1/2 -translate-y-1/2"></div>
      </div>
    ))}
  </div>
  <div>
            <Link to="/how-does-review-automation-work">
              <button className="mb-2 py-3 px-6 border border-indigo-800 bg-indigo-600 rounded-3xl text-white hover:text-blue-800 hover:bg-white transition">
                See How It Works
              </button>
            </Link>
            {/* <p className="text-xs">Offer expires November 30, 2025 — secure your spot now.</p> */}
          </div>
</section>


  );
};

export default ThreeBlocks;
