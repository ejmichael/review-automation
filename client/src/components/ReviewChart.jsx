import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ReviewChart = ({reviews}) => {
    console.log(reviews);

    const [data, setData] = useState([]);

  useEffect(() => {
    if (!reviews || reviews.length === 0) return;

    const reviewCounts = {};

    reviews.forEach((review) => {
      const date = new Date(review.createdAt).toISOString().split("T")[0]; // Extract date (YYYY-MM-DD)
      reviewCounts[date] = (reviewCounts[date] || 0) + 1;
    });

    const formattedData = Object.keys(reviewCounts).map((date) => ({
      date,
      count: reviewCounts[date],
    }));

    setData(formattedData);
  }, [reviews]);
    
  return (
    <div className="my-4 border shadow-md rounded-md p-4 bg-white w-full">
      <h2 className="text-lg font-medium mb-4">Reviews Per Day</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* <CartesianGrid  /> */}
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ReviewChart