import React from 'react';
import Navbar from '../../components/landingComps/navbar/Navbar';

const PaymentCancelled = () => {
  return (
    <>
    <Navbar/>
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold text-red-600">Payment Cancelled</h1>
      <p className="mt-4 text-gray-600">It seems you canceled the payment. Please try again if you'd like to complete your purchase.</p>
      <a href="/" className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded">
        Go Back to Home
      </a>
    </div>
    </>
  );
};

export default PaymentCancelled;
