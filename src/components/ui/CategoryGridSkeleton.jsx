import React from 'react';

const CategoryGridSkeleton = ( {items = 6}) => {
  return (
    <div className="relative mb-6 lg:mb-10 mt-2">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 lg:mt-15 lg:mb-10 lg:gap-10 w-full max-w-[90%] mx-auto animate-pulse">
        {Array.from({ length: items }).map((_, index) => (
            <div key={index} className='relative overflow-hidden aspect-[3/4] bg-gray-300'/>
        ))}
      </div>
    </div>
  );
}

export default CategoryGridSkeleton;
