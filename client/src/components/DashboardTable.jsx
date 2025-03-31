import React from 'react'
import { CiCircleCheck, CiCircleRemove  } from "react-icons/ci";
import { IoStar, IoStarOutline } from "react-icons/io5";


const DashboardTable = ({reviews}) => {
    console.log(reviews);
    
  return (
    <div className='overflow-x-auto bg-white p-2 rounded-md shadow-md'>
        <h1 className='text-xl font-medium p-2'>Reviews</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg ">
            <thead >
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Surname</th>
                    <th className="py-3 px-6 text-left">Phone</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Rating</th>
                    <th className="py-3 px-6 text-left">SMS List</th>
                    <th className="py-3 px-6 text-left">Email List</th>
                    <th className="py-3 px-6 text-left">Review Date</th>
                </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
                {reviews.map((review) => (
                    <tr key={review._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6">{review.name}</td>
                        <td className="py-3 px-6">{review.surname}</td>
                        <td className="py-3 px-6">{review.phone}</td>
                        <td className="py-3 px-6">{review.email}</td>
                        <td className="py-3 px-6 ">{review.rating}</td>
                        <td className="py-3 px-6 text-center">
                            <div className="flex justify-center">
                                {review.optInSMS ? (
                                <CiCircleCheck className="w-5 h-5 text-green-500" />
                                ) : (
                                <CiCircleRemove className="w-5 h-5 text-red-500" />
                                )}
                            </div>
                            </td>

                            <td className="py-3 px-6 text-center">
                            <div className="flex justify-center">
                                {review.optInEmail ? (
                                <CiCircleCheck className="w-5 h-5 text-green-500" />
                                ) : (
                                <CiCircleRemove className="w-5 h-5 text-red-500" />
                                )}
                            </div>
                        </td>                        
                        <td className="py-3 px-6">{new Date(review.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DashboardTable