import React from 'react';
import shilpa from '../assets/images/shilpa.png';
const AboutMe = () => {
  return (
    <div className=" max-w-7xl py-5 mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-20">
        {/* Image */}
        <div className="w-full lg:w-2/3">
          <img
            src={shilpa} // Replace with actual image path
            alt="Fashion Designer"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* About Me Text */}
        <div className="w-full px-4 lg:px-0 lg:w-1/3">
          <h2 className="text-3xl lg:text-6xl font-medium my-4 lg:mb-10 font-tenor">
            About me
          </h2>
          {/* <p className=" leading-relaxed">
            As a fashion designer specializing in women's wear, creating vibrant and versatile pieces that celebrate individuality and style. My collections focus on tops, customized dresses, Indian and fusion wear, co-ords, and bottoms, blending traditional craftsmanship with contemporary flair.
          </p> */}
          <p>
            Shilpa Vummiti is a Chennai-based fashion designer known for her
            bespoke, statement-making pieces that blend Indo-western silhouettes
            with clean, contemporary charm. A graduate of Istituto Marangoni,
            she is the founder and creative force behind the label SHILPA
            Vummiti — a space where comfort meets couture.
          </p>
        </div>
      </div>

      {/* Description Below */}
      <div className="mt-8 px-4 lg:px-0 space-y-2 text-base leading-relaxed">
        {/* <p>
          Inspired by [insert influence, e.g., Indian textiles, modern silhouettes, or cultural motifs], I design for the modern woman who values uniqueness and confidence.
        </p> */}
        {/* <p>
          Each piece is crafted with precision, offering personalized designs that fuse elegance with comfort. From intricately detailed Indian wear to chic fusion co-ords, my work empowers women to express their story through fashion. My mission is to create sustainable, statement-making clothing that resonates with bold, dynamic women everywhere.
        </p> */}
        <p>
          From structured cocktail dresses to draped gowns and fluid three-piece
          sets, her collections reflect a strong sense of individuality,
          elegance, and artistic flair. Her design process is deeply personal —
          as seen in her “Splatter” collection, inspired by painting with her
          son during lockdown, where multi-hued speckles danced across
          lightweight georgettes and cottons.
        </p>
        <p className='mt-4'>
          Her work has been featured in leading publications such as Ritz
          Magazine, JFW, Galatta Magazine, Cultureama, and Indulge Express,
          which spotlighted her innovative “Splatter” collection. She has styled
          prominent fashion shows for Phoenix Marketcity, Chennai, and her
          styling portfolio includes some of the biggest names in the industry —
          from Suriya to Priya Anand, Amy Jackson, Gautham Karthik, and
          Atharvaa, among many others.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
