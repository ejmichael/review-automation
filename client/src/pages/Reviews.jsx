import React from 'react';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div 
            key={review._id} 
            className="bg-white p-4 shadow-md rounded-md justify-between ">
            <div className="text-left mb-4 justify-between">
              <h3 className="text-lg font-semibold mb-3">{review.name} {review.surname}</h3>
              <span className="text-yellow-500 font-bold">{'⭐'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-700 mt-2 text-left min-h-[100px]">
              {review.feedback ? review.feedback : "No feedback provided"}
            </p>
            <div className="mt-4 text-left text-sm text-gray-500">
              <p>Phone: {review.phone}</p>
              <p>Email: {review.email}</p>
              <p>Reviewed on: {new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
