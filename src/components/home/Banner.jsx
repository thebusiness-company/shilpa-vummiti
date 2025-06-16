import React from "react";
import bannerImage from "../../assets/images/banner.png"; // Update with your image path

const FashionBanner = () => {
  return (
    <div className="relative w-full h-[185px] sm:h-[300px] md:h-[500px] lg:h-screen max-w-[393px] sm:max-w-full mx-auto">
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt="Fashion Banner"
        className="w-full h-full object-cover object-left"
      />

      {/* Right Text Content */}
      <div className="absolute inset-0 flex items-center justify-end px-3 sm:px-6 md:px-10">
        <div className="text-white text-center max-w-[180px] sm:max-w-xs md:max-w-sm lg:mr-20">
          <div className="p-1 sm:p-3 md:p-4">
            {/* <h2 className="text-xs sm:text-sm md:text-xl lg:text-6xl font-light tracking-wide mb-1 sm:mb-3">
              TAG LINE
            </h2>
            <p className="text-[10px] sm:text-xs md:text-base lg:text-2xl text-gray-100 leading-snug mb-4 lg:mb-10">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit,
            </p> */}
            <a
              href="#"
              className="inline-block text-teal-300 text-xs sm:text-sm md:text-base border-b border-transparent hover:border-teal-300 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
