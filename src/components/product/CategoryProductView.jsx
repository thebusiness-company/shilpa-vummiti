// CategoryProductView.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getProductsByCategory } from '../../hooks/useProducts';
import { useNavigate,Link } from 'react-router-dom';
import { API_URL } from '../../api';
import CategoryGridSkeleton from '../ui/CategoryGridSkeleton';


export default function CategoryProductView() {
  const navigate = useNavigate();
  
  const { data: categories,
    isLoading,
   } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  if (isLoading) {
    return <CategoryGridSkeleton />;
  }

  return (
    <div className="relative mb-6 lg:mb-10 mt-2">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 lg:mt-15 lg:mb-10 lg:gap-10 transition-all duration-500 w-full max-w-[90%] mx-auto">
        {categories?.data.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="relative overflow-hidden aspect-[3/4] group cursor-pointer"
          >
            <img
              src={`${API_URL}${cat.image}`}
              alt={`${cat.name} collection`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-opacity-50 flex items-end text-center justify-center">
              <h2 className="custom-text-shadow text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-tenor text-white tracking-wide mb-4 md:mb-10 xl:mb-12 2xl:mb-16 z-10">
                {cat.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
