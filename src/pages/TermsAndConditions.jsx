import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-white">
      <div className="max-w-3xl w-full text-center">
        <strong>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">Terms & Conditions</h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl mb-6">Lorem ipsum dolor sit amet</h2>
        </strong>
        <ol className="list-decimal text-center space-y-3 px-4 sm:px-8 md:px-16 text-sm sm:text-base md:text-lg ">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod magna non arcu vestibulum.
          </li>
          <li>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </li>
          <li>
            Duis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor.
          </li>
          <li>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Excepteur sint occaecat cupidatat.
          </li>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsAndConditions;
