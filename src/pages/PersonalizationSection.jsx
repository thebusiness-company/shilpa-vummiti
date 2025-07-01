import React from "react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";

const PersonalizationSection = () => {
  return (
    <section className="px-4 py-8 md:px-12 lg:px-24 bg-white text-center">
      <h2 className="text-2xl lg:text-3xl mb-10 font-tenor">Personalization</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <img src={p1} alt="Look 1" className="w-full h-auto" />
        <img src={p2} alt="Look 2" className="w-full h-auto" />
        <img src={p1} alt="Look 3" className="w-full h-auto" />
        <img src={p2} alt="Look 4" className="w-full h-auto" />
      </div>

      <p className="text-sm lg:text-xl font-medium mb-6">
        Looking For A One-Of-A-Kind Dress That Perfectly Fits Your Style And Body?
      </p>

      <p className="max-w-7xl mx-auto text-sm md:text-base lg:text-lg mb-6">
        Our customized dress stitching services are just what you need! Our skilled tailors work with you to design a dress
        that matches your vision, using a standard process and the latest techniques. From casual to formal, our customized
        dresses will make you stand out. Order online and get your dream dress custom-made for you!
      </p>

      <div className=" text-sm md:text-base lg:text-lg mb-4">
        <p><strong>Note:</strong></p>
        <ol className="list-decimal list-inside text-center max-w-7xl mx-auto mt-8 space-y-1">
          <li>If you are in Chennai, we offer free fabric pickup & delivery.</li>
          <li>If you are outside Chennai, you can send the fabric to us, and we will ship back the finished product via courier.</li>
          <li>
            The costs below are only for stitching (the customer must provide fabric). If you need additional customization,
            let us know.
          </li>
        </ol>
      </div>

      <a
        href="https://wa.me/919876543210" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-[#DB2961]/20 hover:bg-[#183028]/40 text-[#DB2961] hover:text-[white] cursor-pointer px-6 py-2 mt-4 shadow-sm text-sm">
          Click Here
        </button>
      </a>
    </section>
  );
};

export default PersonalizationSection;
