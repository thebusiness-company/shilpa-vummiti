import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="w-full bg-white py-5 md:py-16 lg:max-w-[90%] lg:mx-auto animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-32 2xl:gap-40 overflow-x-hidden">
        {/* LEFT — Image Skeleton */}
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-[80%] md:mx-auto">
            <div className="w-full aspect-[393/480] md:max-h-[80vh] bg-gray-200" />
          </div>
        </div>

        {/* RIGHT — Details Skeleton */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 max-w-[90%] md:max-w-full mx-auto lg:mx-0 lg:mt-8 space-y-6">
          {/* Mobile thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-20 bg-gray-200 shrink-0"
              />
            ))}
          </div>

          {/* Title + Wishlist */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-5 w-48 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            <div className="h-6 w-6 bg-gray-200 rounded-lg mt-1" />
          </div>

          {/* Product Code  */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-40 bg-gray-200 rounded" />
          </div>

          {/* Desktop thumbnails */}
          <div className="hidden lg:flex gap-2 justify-between">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-24 h-32 bg-gray-200 rounded-sm" />
            ))}
          </div>

          {/* Size select */}
          <div className="h-11 w-full bg-gray-200 rounded" />

          {/* Short description (desktop only fake text) */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-[90%] bg-gray-200 rounded" />
          </div>

          {/* Accordions placeholders (collapsed) */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
          </div>

          {/* Add to Bag */}
          <div className="mt-8 flex justify-center">
            <div className="h-12 w-48 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;
