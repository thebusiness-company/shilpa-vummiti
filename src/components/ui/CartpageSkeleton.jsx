import React from 'react';

const CartpageSkeleton = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto my-6">
      <div className="mt-10 pb-8 flex justify-center lg:justify-start border-b">
        <div className="h-6 bg-gray-200 w-[30%] lg:w-[20%] rounded-md" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="lg:col-span-2 space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-center items-center gap-4 border-b pb-6 w-full animate-pulse"
            >
              {/* Product Image  */}
              <div className="w-48 h-60 md:w-52 md:h-72 lg:w-28 lg:h-36 bg-gray-300" />

              {/* Product Details  */}
              <div className="flex-1 w-32 space-y-6">
                <div className="h-6 bg-gray-200 w-full lg:w-[80%] mx-auto lg:mx-0 rounded-md" />
                <div className="h-4 bg-gray-200 w-[70%] lg:w-[50%] mx-auto lg:mx-0 rounded-md" />
              </div>

              {/* Price  */}
              <div className="flex gap-4 mt-4">
                <div className="h-8 w-24 bg-gray-200 rounded-md" />
              </div>
              {/* remove buttons  */}
              <div className="space-y-3 w-full lg:hidden">
                <div className="h-4 bg-gray-200 w-3/4 md:w-[50%] rounded-md mx-auto lg:mx-0" />
              </div>
            </div>
          ))}
        </div>
        {/* Order Summary Skeleton  */}
        <div className="bg-gray-100 p-6 rounded-lg h-fit animate-pulse space-y-5">
          {/* Title */}
          <div className="h-5 bg-gray-300 w-1/2 rounded" />

          {/* Summary rows */}
          <div className="space-y-6">
            <div className="h-4 bg-gray-300 w-full rounded" />
            <div className="h-4 bg-gray-300 w-full rounded" />
            <div className="h-4 bg-gray-300 w-full rounded" />
            <div className="h-6 bg-gray-300 w-full rounded" />
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-300 my-4" />

          {/* Total */}
          <div className="h-5 bg-gray-300 w-2/3 rounded" />

          {/* Checkout Button */}
          <div className="h-10 bg-gray-300 w-full rounded mt-6" />

          <div className="space-y-2">
            <div className="h-4 bg-gray-300 w-2/3 rounded" />
            <div className="h-4 bg-gray-300 w-1/3 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartpageSkeleton;
