import React from 'react';
import Comments from '../../../assets/comments-mock.PNG';
import Graph from '../../../assets/graph-mock.PNG';
import Contacts from '../../../assets/contacts-mock.PNG';
import Orders from '../../../assets/orders-mock.PNG';

const EssentialTools = () => {
  return (
    <div className="w-full bg-white md:py-8 lg:py-12 mb-10">
      <div className="md:max-w-[90%] m-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-4xl font-bold mb-2">
            Tools That Turn Happy Customers Into Business Growth
          </p>
          <p className="text-lg text-gray-600">
            Automate reviews, connect with customers, and boost revenue - all from one simple platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:mx-10 mx-6 gap-8">
          
          {/* Block 1: Lead Generation */}
          <div className="col-span-1 rounded-[25px] p-8 bg-indigo-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="font-bold text-xl mb-3">Capture & Segment Every Lead</p>
              <p className="font-medium text-gray-700">
                Collect customer details automatically from reviews, forms, and campaigns. 
                Segment them into lists for smarter, more effective follow-ups.
              </p>
            </div>
            <div className="relative w-fit mt-6">
              <img src={Graph} alt="Lead Capture & Segmentation" className="block max-h-[200px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 2: SMS + Email Campaigns */}
          <div className="col-span-1 rounded-[25px] p-8 bg-indigo-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="font-bold text-xl mb-3">Personalized SMS & Email at Scale</p>
              <p className="font-medium text-gray-700">
                Send bulk messages that feel 1-to-1. Perfect for promotions, reminders, 
                and driving both reviews and repeat sales.
              </p>
            </div>
            <div className="relative w-fit mt-6">
              <img src={Contacts} alt="Messaging Tool" className="block max-h-[200px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 3: Revenue Growth */}
          <div className="col-span-1 rounded-[25px] p-8 bg-indigo-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="font-bold text-xl mb-3">Turn Conversations Into Sales</p>
              <p className="font-medium text-gray-700">
                Send the right offer at the right time. From flash promos to reactivation campaigns,
                our automation helps you win back customers and grow revenue hands-free.
              </p>
            </div>
            <div className="relative w-fit mt-6">
              <img src={Orders} alt="Revenue Growth Dashboard" className="block max-h-[200px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 4: Reputation & Visibility */}
          <div className="col-span-1 rounded-[25px] p-8 bg-indigo-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="font-bold text-xl mb-3">Build a 5-Star Reputation</p>
              <p className="font-medium text-gray-700">
                Automate review requests, get more 5-star ratings, and increase your visibility 
                on Google — while keeping your brand top of mind with customers.
              </p>
            </div>
            <div className="relative w-fit mt-6">
              <img src={Comments} alt="Reputation & Reviews" className="block max-h-[200px] rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EssentialTools;
