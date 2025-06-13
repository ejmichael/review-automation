import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ThreeBlocks = () => {
  return (
    <div className='w-full bg-gray-100 p-6 lg:h-[480px]'>
      <div className='grid lg:grid-cols-3 gap-4 justify-center items-center content-center m-auto md:w-[65%] h-full'>

        {/* Block 1: Automate Review Requests */}
        <div className='p-5 col-span-1 rounded-[25px] bg-white shadow-xl w-full md:min-h-[300px] relative'>
          <div className='flex justify-center bg-slate-100 rounded-xl mb-3'>
            <GoArrowUpRight className='text-3xl m-2' />
          </div>
          <p className="my-4 font-semibold text-lg">Automated Review Requests</p>
          <p>
            Send review invitations automatically via SMS and email after each sale — no manual follow-ups, no missed opportunities.
          </p>
        </div>

        {/* Block 2: More 5-Star Ratings */}
        <div className='p-5 col-span-1 rounded-[25px] bg-slate-900 shadow-xl h-full w-full md:min-h-[350px] text-white'>
          <div className='flex justify-center bg-slate-100 rounded-xl mb-3 text-black'>
            <GoArrowUpRight className='text-3xl m-2' />
          </div>
          <p className="my-4 font-semibold text-lg">Drive More 5-Star Ratings</p>
          <p>
            Increase your Google visibility with consistent, authentic reviews — turning satisfied customers into powerful brand advocates.
          </p>
        </div>

        {/* Block 3: Set & Forget Simplicity */}
        <div className='p-5 col-span-1 rounded-[25px] bg-white shadow-xl w-full md:min-h-[300px]'>
          <div className='flex justify-center bg-slate-100 rounded-xl mb-3'>
            <GoArrowUpRight className='text-3xl m-2' />
          </div>
          <p className="my-4 font-semibold text-lg">Set It & Forget It</p>
          <p>
            Launch once and let the system work for you — completely hands-off, while staying in touch with every happy customer.
          </p>
        </div>

      </div>
    </div>
  )
}

export default ThreeBlocks;
