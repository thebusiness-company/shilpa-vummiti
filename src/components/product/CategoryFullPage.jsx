import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../../hooks/useProducts';
import { API_URL } from '../../api';
import Loader from '../ui/Loader';

export default function CategoryFullPage() {
  const { id } = useParams();

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['all-products', id],
    queryFn: () => getProductsByCategory(id),
    enabled: !!id,
  });
  console.log(products);
  const categoryName = products?.data?.[0]?.category_name || "Category";

  if (isLoading) return <Loader/>;
  if (isError) return <Loader text="Failed to Load Products"/>;

return (
    <div className="p-4 max-w-8xl mx-auto">
    <h2 className="text-2xl lg:ml-25 my-3 lg:my-6 mb-4 text-start">{categoryName}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10 lg:mx-25 transition-all duration-500">
      {products?.data.map((prod) => (
        <div key={prod.id} className="text-center group">
          <Link to={`/productDetail/${prod.slug}`}>
            <img
              src={`${API_URL}${prod.image}`}
              alt={prod.name}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">{prod.name}</p>
            <p className="text-sm text-gray-700">₹ {prod.price}</p>
          </Link>
        </div>
        
      ))}
    </div>
  </div>
);
}
