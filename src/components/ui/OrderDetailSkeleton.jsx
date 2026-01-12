import React from 'react';

const OrderDetailSkeleton = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 bg-white">
        {/* Mobile Header */}
        <div className="md:hidden ">
          <div className="flex flex-col mb-6">
            <div className="h-14 w-28 bg-gray-200 rounded mb-4 lg:mb-0 mt-2" />
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="h-6 w-48 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block lg:mt-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-8">
            <div className="h-14 w-40 bg-gray-200 rounded mb-4 lg:mb-0" />
            <div className="h-6 w-48 bg-gray-200 rounded self-center lg:self-auto" />
          </div>
        </div>

        {/* Repeat skeleton order blocks */}
        {[1, 2].map((_, idx) => (
          <div key={idx} className="mb-10">
            {/* Order Summary */}
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-8 bg-gray-100 rounded">
              <div className="h-12 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded hidden lg:block" />
            </div>

            {/* Mobile View Orderer Info */}
            <div className="lg:hidden grid grid-cols-1 mb-4 text-base py-4 space-y-4 justify-center items-start">
              <div className="h-3 w-[25%] md:w-[20%] bg-gray-200 rounded" />
              <div className="h-4 w-[35%] md:w-[30%] bg-gray-200 rounded" />
            </div>

            {/* Product Skeleton */}
            {[1, 2].map((_, pIdx) => (
              <div
                key={pIdx}
                className="flex flex-col gap-6 p-4 mb-6 border border-gray-200 rounded"
              >
                <div className="flex flex-row gap-10 justify-between">
                  {/* Image */}
                  <div className="w-28 h-36 bg-gray-200" />

                  <div className="hidden lg:flex flex-col w-1/2 md:w-sm mt-2 justify-center md:mt-4 space-y-3">
                    <div className="h-5 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col w-1/2 md:w-sm mt-2 md:mt-4 space-y-3">
                    <div className="h-5 w-3/4 md:w-[30%] bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 md:w-[20%] bg-gray-200 rounded" />
                    <div className="h-5 w-3/4 md:w-[30%] bg-gray-200 rounded mt-4" />
                    <div className="h-4 w-1/2 md:w-[20%] bg-gray-200 rounded" />
                  </div>
                </div>
                {/* Mobile view RazorPayLogo  */}
                <div className="lg:hidden space-y-3">
                  <div className="h-5 w-3/4 md:w-[30%] bg-gray-200 rounded" />
                  <div className="h-4 w-1/2 md:w-[20%] bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderDetailSkeleton;
