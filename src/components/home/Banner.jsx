import React from "react";
import bannerImage from "../../assets/images/banner.png";

const FashionBanner = ({ scrollToCategory }) => {
  return (
    <div className="relative w-full h-[185px] sm:h-[300px] md:h-[500px] lg:h-screen max-w-[393px] sm:max-w-full mx-auto">
      <img
        src={bannerImage}
        alt="Fashion Banner"
        className="w-full h-full object-cover object-left"
      />

      <div className="absolute inset-0 flex items-center justify-end px-3 sm:px-6 md:px-10">
        <div className="text-white text-center max-w-[180px] sm:max-w-xs md:max-w-sm lg:mr-20">
          <div className="p-1 sm:p-3 md:p-4">
            <button
              onClick={scrollToCategory}
              className="inline-block text-teal-300 text-xs sm:text-sm md:text-base border border-teal-300 hover:text-black hover:bg-teal-300 hover:scale-105 transition-all duration-300 px-6"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
