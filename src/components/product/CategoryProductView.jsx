// CategoryProductView.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getProductsByCategory } from '../../hooks/useProducts';
import { useNavigate,Link } from 'react-router-dom';
import { API_URL } from '../../api';

// Custom hook to get product limit based on screen size
const useProductLimit = () => {
  const [limit, setLimit] = useState(window.innerWidth < 768 ? 6 : 8);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth < 768 ? 6 : 8);
    };

    handleResize(); // set on initial render
    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return limit;
};

export default function CategoryProductView() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const limit = useProductLimit();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: products } = useQuery({
    queryKey: ['products', activeCategory, limit],
    queryFn: () => getProductsByCategory(activeCategory, limit),
    enabled: !!activeCategory,
  });
  console.log(products);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setShowProducts(true);
  };

  const handleViewMore = () => {
    navigate(`/category/${activeCategory}`);
  };

  const handleViewLess = () => {
    setActiveCategory(null);
    setShowProducts(false);
  };

  return (
    <div className="p-4">
      {!showProducts ? (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 lg:mt-15 lg:gap-10 mx-5 sm:mx-10 lg:mx-38 transition-all duration-500">
          {categories?.data.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="relative overflow-hidden  group cursor-pointer"
            >
              <img
                src={`${API_URL}${cat.image}`}
                alt={cat.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 z-0" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-opacity-50 flex items-end text-center justify-center">
                  <h2 className="text-xs md:text-xl lg:text-2xl font-semibold text-white tracking-wide mb-4 z-10">
                    {cat.name}
                  </h2>
                </div>


            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 mt-4">
            {products?.data.map((prod) => (
              <div key={prod.id} className="text-center group">
                <Link to={`/productDetail/${prod.slug}`}>
                <img
                  src={`${API_URL}${prod.image}`}
                  alt={prod.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 font-medium text-sm sm:text-base text-left text-[#183028]">{prod.name}</p>
                <p className="text-sm text-left text-[#183028]">₹ {prod.price}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 font-tenor text-[#183028]">
            <button onClick={handleViewLess} className="underline text-xl font-tenor hover:text-blue-800">
              View Less
            </button>
            <button onClick={handleViewMore} className="underline text-xl hover:text-blue-800">
              View More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
