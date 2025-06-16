import React from "react";

const ShippingPolicySection = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16 lg:px-20">
      <div className=" mx-auto">
        <div className="bg-pink-100 py-4 ">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800">Shipping Policy</h2>
        </div>

        <div className="bg-white text-gray-700  p-6  text-sm md:text-base leading-relaxed space-y-4">
          <p>
            We generally ship the ordered products within 48 working hours and customized products will be directly reported to the customer the same shall be delivered to your doorsteps within 5-7 working days via courier from the shipping date. Delivery time can be extended depending upon your delivery location.
          </p>
          <p>
            We will always keep you informed with the status of your order. Once your order is shipped from our end, you shall receive an SMS and an Email with the shipping detail such as Courier Company, Docket No etc.
          </p>
          <p>
            In case of any issue with delivered products, customer has to report us within 48 hours from delivery time.
          </p>
          <p>
            If the customer is unavailable at the time of delivery of product, our courier partner will make two delivery attempts and if still not able to deliver the product, the order will be returned to us. Reach out to our customer care team to reschedule the delivery date and time as per your availability.
          </p>
          <div>
            <strong>Shipping Charges</strong>
            <p>There are no shipping charges applicable on any order value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicySection;
