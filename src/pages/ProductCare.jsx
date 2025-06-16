import React from "react";
import careImage1 from "../assets/images/fabric1.png"; // rainbow fabric
import careImage2 from "../assets/images/fabric2.png"; // blue fabric
import heart from "../assets/images/heart1.svg"; // blue fabric

const ProductCare = () => {
  return (
    <section className="bg-white px-4 py-8 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
            <div className="bg-pink-100 py-3 px-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Product Care</h2>
            </div>
            <div className="flex justify-center mt-4">
              <img src={heart} alt="heart icon" className="w-10 h-10" />
            </div>

            {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
          How do I take care of my clothing pieces?
        </h3>

        {/* Introduction */}
        <p className="mb-6 text-sm md:text-base leading-relaxed">
          Shilpa Vummiti’s bespoke designs, known for their Indo-Western flair, vibrant colors, and premium fabrics like silk, georgette, chiffon,
          and sustainable materials, require careful maintenance to preserve their elegance and longevity. Follow these care tips to keep your garments
          looking pristine, honoring the brand’s commitment to quality craftsmanship and sustainable fashion.
        </p>

        {/* First Image */}
        <img
          src={careImage1}
          alt="Fabric Care"
          className="w-full h-auto mb-6"
        />

        {/* Tips */}
        <ol className="list-decimal list-inside space-y-4 text-sm lg:text-base md:text-base leading-relaxed">
          <li>
            <strong>Read Care Labels First</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Always check the care label on your Shilpa Vummiti garment for specific instructions.</li>
              <li>Bespoke pieces may use delicate or blended fabrics like pure silk or organic cotton.</li>
              <li>The brand’s “no shortcuts” approach ensures high-quality materials, so following label guidance preserves their integrity.</li>
            </ul>
          </li>
          <li>
            <strong>Dry Clean for Delicate Fabrics</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>For silk, art silk, georgette, and chiffon garments (e.g., cocktail dresses, gowns, or drape dresses), opt for professional dry cleaning.</li>
              <li>Choose an eco-friendly dry cleaner to align with the brand’s sustainable ethos.</li>
            </ul>
          </li>
          <li>
            <strong>Hand Wash Sustainable Fabrics</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>For organic cotton or other sustainable fabrics, hand wash in cold water with a mild, eco-friendly detergent.</li>
              <li>Gently agitate, avoid wringing, and rinse thoroughly.</li>
            </ul>
          </li>
          <li>
            <strong>Avoid Machine Washing for Bespoke Designs</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Machine washing can stress delicate fabrics or tailored fits, especially structured pieces like three-piece ensembles.</li>
              <li>Stick to hand washing or dry cleaning to preserve craftsmanship and silhouette.</li>
            </ul>
          </li>
          <li>
            <strong>Dry Naturally, Away from Direct Sunlight</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Air dry garments flat or on padded hangers to retain shape, especially for flowy skirts, crop tops, or ponchos.</li>
              <li>Keep away from direct sunlight to avoid fading of vibrant colors.</li>
            </ul>
          </li>
          <li>
            <strong>Iron with Care</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Use low heat or steam iron for silks, georgettes, and chiffons. Place a cotton cloth between fabric and iron.</li>
              <li>For organic cotton, iron on medium heat while slightly damp.</li>
            </ul>
          </li>
          <li>
            <strong>Store Properly to Maintain Exclusivity</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Use breathable cotton garment bags. Avoid plastic bags which can trap humidity and damage fabric.</li>
              <li>Use cedar blocks or sachets for natural protection.</li>
            </ul>
          </li>
          <li>
            <strong>Handle Stains Promptly</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Blot stains immediately with a clean damp cloth. Avoid rubbing or using harsh detergents.</li>
              <li>Consult a professional cleaner familiar with delicate/sustainable fabrics.</li>
            </ul>
          </li>
          <li>
            <strong>Minimize Washing for Sustainability</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>Wear garments only when necessary. Spot clean where possible.</li>
              <li>Air out garments to refresh them without washing.</li>
            </ul>
          </li>
          <li>
            <strong>Repair, Don’t Discard</strong>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              <li>If a garment requires repair, consult a skilled tailor to restore it.</li>
              <li>This supports sustainable fashion by extending a garment’s life.</li>
            </ul>
          </li>
        </ol>

        {/* Final Image */}
        <img
          src={careImage2}
          alt="Fabric Texture"
          className="w-lg h-auto lg:ml-80 mt-10"
        />
        {/* Why These Tips Matter Section */}
        <div className="mt-6">
          <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">Why These Tips Matter:</h4>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-base leading-relaxed space-y-2">
            <li>
              <strong>Preserve Quality:</strong> Shilpa Vummiti’s designs, from floral-printed co-ord sets to silk gowns, are crafted with precision,
              and proper care ensures they remain stunning for years, reflecting the brand’s “no shortcuts” commitment.
            </li>
            <li>
              <strong>Support Sustainability:</strong> Using eco-friendly cleaning methods and minimizing washing aligns with the brand’s use of
              sustainable fabrics, reducing environmental impact.
            </li>
            <li>
              <strong>Enhance Longevity:</strong> Careful storage and handling maintain the exclusivity of limited-edition pieces, ensuring your
              investment in bespoke fashion lasts.
            </li>
            <li>
              <strong>Customer Appeal:</strong> Clear care instructions build trust, showing your brand’s dedication to authenticity and customer
              satisfaction, which can drive sales (as per your fair pricing goal).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductCare;
