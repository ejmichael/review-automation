import React from 'react';
import HeroImg from '../../../assets/hero-option.jpg';
import HeroImg2 from '../../../assets/home-image.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-50 w-full md:min-h-[87vh] flex flex-col-reverse md:flex-row items-center mt-[75px] pb-[50px]">

      {/* Right Text Section (on desktop) */}
      <div className="flex flex-col justify-center md:w-1/2 w-full px-6 lg:px-16 md:py-12 py-4 lg:py-0 space-y-6">
        <div>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center md:text-left md:text-center">
            Automate <span className="text-indigo-600">5-star reviews.</span>
            <br />
            Grow <span className="text-indigo-600">on Google.</span>
            <br />
            Get <span className="text-indigo-600">more customers.</span>
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Turn your happy customers into 5-star Google reviews.
            <br />
            Get new customers and get old ones coming back.
          </p>
        </div>

        <div>
          <Link to="/how-does-review-automation-work">
            <button className="mb-4 py-3 px-6 border border-indigo-800 bg-indigo-600 rounded-3xl text-white hover:text-blue-800 hover:bg-white transition">
              See How It Works
            </button>
          </Link>
          {/* <p className="text-xs">Offer expires November 30, 2025 — secure your spot now.</p> */}
        </div>
      </div>

      {/* Left Image Section (on mobile appears first) */}
      <div className="md:w-1/2 w-full flex justify-center items-center relative h-[400px] md:h-full px-6 lg:px-0 md:mb-8 mb-4 md:mb-0">
        {/* Bubble Background */}
        <div className="absolute w-[90%] md:h-[90%] h-[70%] bg-gradient-to-tr from-indigo-200 to-blue-300 rounded-[50%] blur-3xl opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Full Image */}
        <img
          src={HeroImg}
          alt="Happy Customer"
          className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl"
        />
      </div>

    </div>
  );
};

export default Hero;
