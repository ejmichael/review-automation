import React from 'react';
import HeroImg from '../../../assets/Email campaign-cuate.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="lg:min-h-[87vh] bg-gradient-to-tl from-blue-200 via-indigo-100 to-white grid grid-cols-2 p-3 items-center content-center">
      <div className="mx-auto gap-6 flex flex-col content-center justify-center p-2 lg:max-w-2xl md:col-span-1 col-span-2">
        <div className="mb-4 my-4 md:my-1">
          <p className="xl:text-6xl lg:text-4xl text-4xl font-bold mb-4">
<span className="text-indigo-600">Automate Reviews</span>, <span className="text-indigo-600">Capture Leads</span>, and <span className="text-indigo-600">Grow with SMS & Email</span> — all in one platform.          </p>
          <p>
            Turn your happy customers into 5-star reviews — without chasing or manual effort. 
            Our automation tool sends personalized SMS and email review requests on your behalf.
          </p>
        </div>
        <div>
          {/* <p className="mb-4 italic">Limited-time offer: lifetime access for a one-time payment.</p> */}
          <Link to="https://review-automation.onrender.com/register?plan=growth">
            <button className="mb-4 py-2 px-5 border border-indigo-800 bg-indigo-600 rounded-3xl text-white hover:text-blue-800 hover:bg-white transition">
              START TODAY - 75% OFF!
            </button>
          </Link>
          <p className="text-xs">Offer expires July 30, 2025 — secure your spot now.</p>
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <img
          src={HeroImg}
          alt="Automated Google Review Campaigns"
          className="lg:w-[80%] w-[90%] mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
