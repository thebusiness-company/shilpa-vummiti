// src/api/wishlistApi.js
import API from "../api";

export const getWishlist = async () => {
  const response = await API.get("/wishlist/");
  return response.data;
};

export const deleteWishlistItem = async (productId) => {
  const response = await API.delete("wishlist/", {
    data: { product_id: productId },
  });
  return response.data;
};

export const addToWishlist = async (productId) => {
  const response = await API.post("wishlist/", { product_id: productId });
  return response.data;
};


export const addToCart = async ({ productId, cartCode }) => {
    const response = await API.post("cart-items/", {
      product_id: productId,
      cart_code: cartCode,
    });
    return response.data;
  };