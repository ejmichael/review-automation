import React from 'react'
import DashboardTable from '../components/DashboardTable'
import ReviewChart from '../components/ReviewChart'

const Home = ({businessInfo}) => {

    console.log(businessInfo);
    
  return (
    <div className='w-full p-4'>
        <div className='w-full flex justify-between mb-4'>
            <div className='text-3xl font-medium'>
                Overview
            </div>
            <div>
                <button
                disabled 
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        
                    }}
                >
                    Send Review Request
                </button>
            </div>
        </div>
            <div className='w-full'>
                <div className='relative max-w-[200px] bg-white rounded-lg my-4'>
                    <select 
                        id="date-range" 
                        // value={selectedMetric} 
                        // onChange={handleMetricChange}
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    >
                        <option value="30days">30 days</option>
                        <option value="6months">6 months</option>
                        <option value="1Year">1 Year</option>
                        <option value="allTime">All time</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                </div>

                <div className='flex gap-4 '>
                    <div className='border shadow-md rounded-md p-4 bg-white w-full'>
                        <div className='text-left font-medium text-lg'>Reviews</div>
                        <div className='p-3 items-end my-2'>
                            <p className='text-5xl text-slate-800 mb-3' >{businessInfo?.reviews?.length}</p>
                            <p className='text-slate-600 italic'>reviews recieved</p>
                        </div>
                    </div>
                    <div className='border shadow-md rounded-md p-4 bg-white w-full'>
                        <div className='text-left font-medium text-lg'>5-star reviews</div>
                        <div className='p-3 items-end my-2'>
                            <p className='text-5xl text-slate-800 mb-3'>{businessInfo?.reviews.length}</p>
                            {/* <p className='text-slate-600 italic'>recieved</p> */}
                        </div>
                    </div>
                    <div className='border shadow-md rounded-md p-4 bg-white w-full'>
                        <div className='text-left font-medium text-lg'>Score</div>
                        <div className='p-3 items-end my-2'>
                            <p className='text-5xl text-slate-800 mb-3'>{businessInfo?.reviews.length > 0 ? (
                                ((businessInfo?.reviews.filter(review => review.rating === 5).length / businessInfo?.reviews.length) * 100).toFixed(1)
                            ) : (0)} %</p>
                            <p className='text-slate-600 italic'>of reviews were 5 star</p>
                        </div>
                    </div>
                </div>
                <div>
                    <ReviewChart reviews={businessInfo.reviews} />
                </div>
                <div>
                    <DashboardTable reviews={businessInfo.reviews} />
                </div>
            </div>
    </div>
  )
}

export default Home