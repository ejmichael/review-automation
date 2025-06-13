import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4'

const Pricing = () => {

  ReactGA.send({
    hitType: "pageview",
    page: "/pricing",
    title: `Pricing`,
  });

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-900">Pricing Plans</h2>
        <p className="mt-4 text-gray-600">Choose a plan that suits your business needs.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        
        {/* Basic Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-indigo-50 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter Plan</h3>
          <p className="text-gray-600 mb-6">Perfect for small businesses getting started with SMS and email marketing.</p>
          <div className="text-4xl font-bold text-gray-900 mb-4">R 2300<span className="text-lg font-normal">/month</span></div>
          <ul className="text-left text-gray-700 mb-6 space-y-4">
            <li>Free setup</li>
            <li>Up to 1,000 SMS OR emails per month</li>
            <li>Basic campaign setup and scheduling</li>
            <li>Standard templates</li>
            <li>Email support</li>
          </ul>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Link to='/contact-us'>Get Started</Link>
          </button>
        </div>
        
        {/* Pro Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Growth Plan <span className='text-indigo-400 text-sm '>(Most popular)</span></h3>
          <p className="text-gray-600 mb-6">Ideal for growing businesses looking to expand their reach.</p>
          <div className="text-4xl font-bold text-gray-900 mb-4">R 3000<span className="text-lg font-normal">/month</span></div>
          <ul className="text-left text-gray-700 mb-6 space-y-4">
            <li>Free setup</li>
            <li>Google Review automation</li>
            <li>Up to 3,000 SMS and emails per month</li>
            <li>Advanced campaign setup and scheduling</li>
            <li>Customizable templates</li>
            <li>Priority email support</li>
            <li>Advanced performance reports</li>
          </ul>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Link to='/contact-us'>Get Started</Link>
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-indigo-50 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Plan</h3>
          <p className="text-gray-600 mb-6">Comprehensive solution for large businesses with extensive marketing needs.</p>
          <div className="text-4xl font-bold text-gray-900 mb-4">R 4990<span className="text-lg font-normal">/month</span></div>
          <ul className="text-left text-gray-700 mb-6 space-y-4">
            <li>Free setup</li>
            <li>Google Review automation</li>
            <li>Up to 10,000 SMS and emails per month</li>
            <li>Comprehensive campaign management</li>
            <li>Fully customizable templates</li>
            <li>Dedicated account manager</li>
            <li>24/7 phone support</li>
            <li>Premium performance reports and analytics</li>
          </ul>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Link to='/contact-us'>Get Started</Link>
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default Pricing;
