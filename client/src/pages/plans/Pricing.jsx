import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from '../../components/landingComps/navbar/Navbar';

const Pricing = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/pricing",
    title: "Pricing",
  });

  return (
    <div>
      <Navbar/>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl font-bold text-gray-900">Pricing Plans</h2>
          <p className="mt-4 text-gray-600">Choose a plan that suits your business needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">

          {/* Starter Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-indigo-50 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter Plan</h3>
            <p className="text-gray-600 mb-6">Perfect for small businesses starting with SMS and email marketing.</p>
            <div className="text-4xl font-bold text-gray-900 mb-4">R 2300<span className="text-lg font-normal">/month</span></div>
            <ul className="text-left text-gray-700 mb-6 space-y-3">
              <li>✅ Free setup</li>
              <li>✅ Up to 1,000 SMS OR emails</li>
              <li>✅ Basic campaign setup</li>
              <li>✅ Standard templates</li>
              <li>❌ Google review automation</li>
              <li>❌ Advanced reports</li>
            </ul>
            <Link to='/contact-us'>
              <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Get Started</button>
            </Link>
          </div>

          {/* Growth Plan (Highlighted) */}
          <div className="border-4 border-indigo-600 rounded-lg p-6 bg-white shadow-2xl scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex justify-center gap-2 items-center">
              Growth Plan <span className="text-white bg-indigo-600 text-sm px-2 py-1 rounded">Best Value</span>
            </h3>
            <p className="text-gray-700 mb-6">Designed for growing businesses ready to scale.</p>
            <div className="text-4xl font-bold text-indigo-700 mb-4">R 3000<span className="text-lg font-normal">/month</span></div>
            <ul className="text-left text-gray-800 mb-6 space-y-3">
              <li>✅ Free setup</li>
              <li>✅ Google review automation</li>
              <li>✅ Up to 3,000 SMS & emails</li>
              <li>✅ Advanced campaign setup</li>
              <li>✅ Customizable templates</li>
              <li>✅ Priority email support</li>
              <li>✅ Advanced reports</li>
            </ul>
            <Link to='/register?plan=growth'>
              <button className="w-full py-2 px-4 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800">
                Get Started
              </button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-indigo-50 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-6">All-inclusive solution for larger operations and full automation.</p>
            <div className="text-4xl font-bold text-gray-900 mb-4">R 4990<span className="text-lg font-normal">/month</span></div>
            <ul className="text-left text-gray-700 mb-6 space-y-3">
              <li>✅ Everything in Growth Plan</li>
              <li>✅ Up to 10,000 SMS & emails</li>
              <li>✅ Full campaign management</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ 24/7 phone support</li>
              <li>✅ Premium reports & analytics</li>
            </ul>
            <Link to='/contact-us'>
              <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Contact Sales</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Pricing;
