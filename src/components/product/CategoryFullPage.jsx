import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../../hooks/useProducts';
import { API_URL } from '../../api';
import Loader from '../ui/Loader';
import { useEffect, useState } from 'react';
import {
  getWishlist,
  deleteWishlistItem,
  addToWishlist,
} from "../../hooks/wishlistApi";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

export default function CategoryFullPage() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState([]);

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['all-products', id],
    queryFn: () => getProductsByCategory(id),
    enabled: !!id,
  });
  console.log(products);
  const categoryName = products?.data?.[0]?.category_name || "Category";

    useEffect(() => {
      const fetchWishlist = async () => {
        try {
          const data = await getWishlist();
          setWishlist(data);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      };
      fetchWishlist();
    }, []);
  

  if (isLoading) return <Loader/>;
  if (isError) return <Loader text="Failed to Load Products"/>;
  
      const handleWishlistToggle = async (product) => {
        const iswishlisted = wishlist.some(
          (item) => item.product?.id === product.id
        );

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
    <div className="p-4 max-w-8xl mx-auto">
    <h2 className="text-2xl lg:ml-25 my-3 lg:my-6 mb-4 text-start font-tenor text-[#183028]">{categoryName}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10 lg:mx-25 transition-all duration-500">
      {products?.data.map((prod) => (
        <div key={prod.id} className="text-center group relative">
          <Link to={`/productDetail/${prod.slug}`}>
            <img
              src={`${API_URL}${prod.image}`}
              alt={prod.name}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 font-medium text-sm sm:text-base text-[#183028] font-tenor">{prod.name}</p>
            <p className="text-sm text-[#183028] font-tenor">₹ {prod.price}</p>
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
  </div>
);
}
