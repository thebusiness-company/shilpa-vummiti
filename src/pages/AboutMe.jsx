import React from 'react';
import shilpa from '../assets/images/shilpa.png';
const AboutMe = () => {
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
          <h2 className="text-3xl font-medium my-4">About me</h2>
          <p className="text-gray-700 leading-relaxed">
            As a fashion designer specializing in women's wear, creating vibrant and versatile pieces that celebrate individuality and style. My collections focus on tops, customized dresses, Indian and fusion wear, co-ords, and bottoms, blending traditional craftsmanship with contemporary flair.
          </p>
        </div>
      </div>

      {/* Description Below */}
      <div className="mt-8 px-4 lg:px-0 text-gray-700 space-y-2 text-base leading-relaxed">
        <p>
          Inspired by [insert influence, e.g., Indian textiles, modern silhouettes, or cultural motifs], I design for the modern woman who values uniqueness and confidence.
        </p>
        <p>
          Each piece is crafted with precision, offering personalized designs that fuse elegance with comfort. From intricately detailed Indian wear to chic fusion co-ords, my work empowers women to express their story through fashion. My mission is to create sustainable, statement-making clothing that resonates with bold, dynamic women everywhere.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
