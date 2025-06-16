import React from 'react';
import shilpa from '../assets/images/shilpa2.png';
const ChennaiFav = () => {
  return (
    <div className=" max-w-7xl py-5 mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-20">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={shilpa} // Replace with actual image path
            alt="Fashion Designer"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* About Me Text */}
        <div className="w-full px-4 lg:px-0 lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center mb-4">CHENNAI</h2>
        <p className="text-gray-700 lg:mb-6">
            <strong>CHENNAI:</strong> The demand for constant newness is reshaping the fashion
            industry, pushing brands to roll out fresh collections more frequently to keep up with
            changing tastes. To stay ahead of trends, designers are using social media, following
            global styles, and constantly reworking their ideas.
          </p>
        </div>
      </div>

      {/* Description Below */}
      <div className="mt-8 px-4 lg:px-0 text-gray-700 space-y-2 text-base leading-relaxed">
      <p className="text-gray-700 lg:mb-4">
            While this fast pace encourages creativity and innovation, it also raises concerns
            about sustainability, burnout, and the loss of timeless design. City-based designers
            talk to DT Next about whether this trend marks progress or signals a warning.
          </p>
          <p className="text-gray-700 italic border-l-4 border-gray-950 pl-4 ">
            “As a stylist, I’m seeing firsthand how the constant demand for newness is reshaping
            fashion in India. Collections are dropping faster, trends shift overnight, and younger
            consumers are setting the pace. Brands are scrambling to stay relevant, and creatives
            like us are constantly reinventing to keep up.”
          </p>
      </div>
    </div>
  );
};

export default ChennaiFav;
