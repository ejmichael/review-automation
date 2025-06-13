import React from 'react';
import Comments from '../../../assets/comments-mock.PNG';
import Graph from '../../../assets/graph-mock.PNG';
import Contacts from '../../../assets/contacts-mock.PNG';
import Orders from '../../../assets/orders-mock.PNG';

const EssentialTools = () => {
  return (
    <div className='w-full bg-white md:py-4 lg:py-6 mb-10'>
      <div className='md:max-w-[90%] m-auto'>
        <div className='text-center m-10'>
          <p className='text-4xl font-bold mb-2'>Essential Tools to Automate & Scale Your Growth</p>
          <p>All-in-one review, lead generation, SMS, and email tools to grow your business faster</p>
        </div>

        <div className='grid lg:grid-cols-2 xs:grid-cols-1 lg:mx-10 mx-6 gap-6'>
          
          {/* Block 1: Lead Generation */}
          <div className='col-span-1 rounded-[35px] p-8 bg-indigo-100'>
            <div className='mb-3'>
              <p className="font-bold text-xl">Smart Lead Capture & Segmentation</p>
            </div>
            <div className='mb-5'>
              <p className='font-semibold'>
                Automatically capture leads from reviews and forms. Segment contacts based on behavior or source for hyper-targeted follow-ups and future campaigns.
              </p>
            </div>
            <div className='relative w-fit m-auto'>
              <img src={Graph} alt="Smart Lead Capture" className="block max-h-[250px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 2: SMS + Email Campaigns */}
          <div className='col-span-1 rounded-[35px] p-8 bg-indigo-100'>
            <div className='mb-3'>
              <p className="font-bold text-xl">Mass Messaging That Feels Personal</p>
            </div>
            <div className='mb-5'>
              <p className='font-semibold'>
                Launch SMS and email campaigns with personalized content at scale. Perfect for promotions, reminders, and driving reviews or repeat sales.
              </p>
            </div>
            <div className='relative w-fit m-auto'>
              <img src={Contacts} alt="Bulk Messaging Tool" className="block max-h-[250px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 3: Revenue Growth */}
          <div className='col-span-1 rounded-[35px] p-8 bg-indigo-100'>
            <div className='mb-3'>
              <p className="font-bold text-xl">Turn Messages Into Sales</p>
            </div>
            <div className='mb-5'>
              <p className='font-semibold'>
                Drive more revenue by sending the right offer at the right time. Our platform helps you nurture leads and convert them into paying customers automatically.
              </p>
            </div>
            <div className='relative w-fit m-auto'>
              <img src={Orders} alt="Revenue Growth Dashboard" className="block max-h-[250px] rounded-lg" />
            </div>
          </div>
          
          {/* Block 4: Brand Presence */}
          <div className='col-span-1 rounded-[35px] p-8 bg-indigo-100'>
            <div className='mb-3'>
              <p className="font-bold text-xl">Amplify Your Online Presence</p>
            </div>
            <div className='mb-5'>
              <p className='font-semibold'>
                Get more 5-star reviews and stay top of mind with consistent messaging. Build trust and visibility across Google, email, and SMS channels.
              </p>
            </div>
            <div className='relative w-fit m-auto'>
              <img src={Comments} alt="Boost Brand Awareness" className="block max-h-[250px] rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EssentialTools;
