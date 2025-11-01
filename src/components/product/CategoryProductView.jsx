// CategoryProductView.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getProductsByCategory } from '../../hooks/useProducts';
import { useNavigate,Link } from 'react-router-dom';
import { API_URL } from '../../api';
import {
  getWishlist,
  deleteWishlistItem,
  addToWishlist,
} from "../../hooks/wishlistApi";
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';

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
  const [wishlist, setWishlist] = useState([]);

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

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();
        setWishlist(data);
        
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    if (activeCategory) {
      fetchWishlist();
    }
  }, [activeCategory]);

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

  const handleWishlistToggle = async (product) => {
    const iswishlisted = wishlist.some((item) => item.product?.id === product.id);

    if (iswishlisted) {
      await deleteWishlistItem(product.id);
      const updatedAfterRemoval = await getWishlist();
      setWishlist(updatedAfterRemoval);
      toast.success("Removed from wishlist!");
    } else {
      await addToWishlist(product.id);
      const updatedAfterAddition = await getWishlist(); 
      setWishlist(updatedAfterAddition);
      toast.success("Added to wishlist!");
    }  
  };

  return (
    <div className="p-4 mb-2">
      {!showProducts ? (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 lg:mt-15 lg:mb-10 lg:gap-10 transition-all duration-500 w-full max-w-[90%] mx-auto">
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
                <h2 className="custom-text-shadow text-xs md:text-xl lg:text-2xl font-tenor text-white tracking-wide mb-4 z-10">
                  {cat.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 mt-4 w-full max-w-[90%] mx-auto">
            {products?.data.map((prod) => (
              <div key={prod.id} className="text-center group relative">
                <Link to={`/productDetail/${prod.slug}`}>
                  <img
                    src={`${API_URL}${prod.image}`}
                    alt={prod.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 font-medium text-sm sm:text-base text-left text-[#183028] font-tenor lg:font-medium">
                    {prod.name}
                  </p>
                  <p className="text-sm text-left text-[#183028] font-tenor">
                    ₹ {prod.price}
                  </p>
                </Link>
                {/* wishlist button */}
                <button
                  onClick={() => handleWishlistToggle(prod)}
                  className="absolute top-2 right-2 z-10"
                >
                  {wishlist.some((item) => item.product?.id === prod.id) ? (
                    <Heart className="w-5 h-5 fill-[#DB2961] stroke-[#DB2961] z-10" />
                  ) : (
                    <Heart className="w-5 h-5 stroke-black z-10" />
                  )}
                </button>
              </div>
            ))}
          </div>
            {/* mobile view less and more buttons */}
          <div className="flex justify-between mt-6 font-palanquin text-[#183028] lg:hidden">
            <button
              onClick={handleViewLess}
              className="underline text-xl"
            >
              View Less
            </button>
            <button
              onClick={handleViewMore}
              className="underline text-xl"
            >
              View More
            </button>
          </div>
          {/* desktop view less and more buttons */}
          <div className="hidden lg:flex flex-row gap-4 mt-6 font-palanquin text-[#183028] w-full max-w-[90%] mx-auto">
            <div className="flex-1 flex justify-center">
              <button
                onClick={handleViewMore}
                className="underline text-xl hover:text-blue-800 transition-all duration-300 ease-in-out hover:scale-105"
              >
                View More
              </button>
            </div>
            <button
              onClick={handleViewLess}
              className="underline text-xl hover:text-blue-800 transition-all duration-300 ease-in-out hover:scale-105"
            >
              View Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
