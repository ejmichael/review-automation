import React from 'react';
import Navbar from '../../components/landingComps/navbar/Navbar';

const PaymentSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-16 mt-[70px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Subscription Success 🎉
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hooray! Your subscription has been processed successfully.
          </p>

          <div className="mt-10 bg-indigo-50 p-6 rounded-xl shadow-sm text-left">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              What happens next?
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                One of our team members will reach out to you within the next
                24–48 hours.
              </li>
              <li>
                We’ll collect the necessary materials from you (such as your
                logo, business details, and any preferences).
              </li>
              <li>
                Your review card will be designed and set up for your business.
              </li>
              <li>
                You’ll receive instructions on how to share and start collecting
                customer reviews right away.
              </li>
            </ul>
          </div>

          <p className="mt-10 text-gray-600">
            If you have any urgent questions, feel free to{" "}
            <a
              href="mailto:ethan@easy-outreach.com"
              className="text-indigo-600 font-medium underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
