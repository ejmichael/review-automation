import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';


const PaymentSuccess = () => {
      const { user } = useAuthContext()
  return (
    <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl font-bold text-gray-900">Subscription Success</h2>
          <p className="mt-4 text-gray-600">Hooray! Your subscription has been processed successfully.</p>
        </div>

      <Link to={`/dashboard/${user.business._id}`}>
        <button className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Go to dashboard </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
