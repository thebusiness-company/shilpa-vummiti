import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { HiMiniPlus } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";
import API, { API_URL } from "../../api";
import { getProductBySlug } from "../../hooks/useProducts";
import { addToWishlist, deleteWishlistItem } from "../../hooks/wishlistApi";
import toast from "react-hot-toast";
import Loader from '../ui/Loader';

// Reusable Accordion
function Accordion({ title, expanded, onToggle, children }) {
  return (
    <div className="border-t py-3 cursor-pointer" onClick={onToggle}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        {expanded ? <FiMinus /> : <HiMiniPlus />}
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-600 mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetail({setNumCartItems}) {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [expanded, setExpanded] = useState({ care: false, size: false, gift: false });
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const cart_code = localStorage.getItem("cart_code");

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: getProductBySlug,
    enabled: !!slug,
  });

  useEffect(() => {
    if (product) {
      const imageList = product.images?.map((img) => img.images) || [];
      setSelectedImage(imageList[0] || product.image);
    }
  }, [product]);

  const toggle = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Add to Cart Mutation
  const mutation = useMutation({
    mutationFn: ({ cart_code, product_id }) => API.post("cart-items/", { cart_code, product_id,selectedSize }),
    onSuccess: () => {
      toast.success("Item added to cart!");
      setNumCartItems(curr=>curr+1)
    },
    onError: () => toast.error("Failed to add item to cart."),
  });

  const handleAddToBag = () => {
    if (!product || !selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    if (!cart_code) {
      toast.error("Cart session not found. Please refresh or try again.");
      return;
    }
    mutation.mutate({ cart_code, product_id: product.id });

  };

  // Wishlist Mutations
  const addWishlistMutation = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      setInWishlist(true);
      toast.success("Added to wishlist!");
    },
    onError: () => toast.error("Failed to add to wishlist."),
  });

  const removeWishlistMutation = useMutation({
    mutationFn: deleteWishlistItem,
    onSuccess: () => {
      setInWishlist(false);
      toast.success("Removed from wishlist.");
    },
    onError: () => toast.error("Failed to remove from wishlist."),
  });

  const handleWishlistToggle = () => {
    if (!product?.id) return;
    if (inWishlist) {
      removeWishlistMutation.mutate(product.id);
    } else {
      addWishlistMutation.mutate(product.id);
    }
  };

  // Check Cart + Wishlist Status
  useEffect(() => {
    if (product?.id && cart_code) {
      API.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}&product_size=${selectedSize}`)
        .then((res) => {
          setInCart(res.data.product_in_cart);
        })
        .catch((err) => console.error(err.message));
    }

    if (product?.id && cart_code) {
  API.get(`/wishlist/?cart_code=${cart_code}`)
    .then((res) => {
      const isInWishlist = res.data.some((item) => item.product.id === product.id);
      setInWishlist(isInWishlist);
    })
    .catch((err) => console.error(err.message));
}

  }, [product?.id, cart_code, selectedSize]);

  if (isLoading) return <Loader/>
  if (error) return <Loader text="Error Load To Products"/>

  const imageList = product.images?.map((img) => img.images) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-white lg:px-10 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 overflow-x-hidden">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2">
          <motion.img
            key={selectedImage}
            src={`${API_URL}${selectedImage}`}
            alt={product.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full object-cover"
          />
        </div>

        {/* Right - Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full lg:w-1/2 px-4 sm:px-6 max-w-md md:max-w-full mx-auto lg:mx-0 lg:mt-8 space-y-6"
        >
          {/* Mobile Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {[product.image, ...imageList].map((img, idx) => (
              <motion.img
                key={idx}
                src={`${API_URL}${img}`}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-20 border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                } cursor-pointer`}
                alt={`${product.name}-thumbnail-${idx}`}
              />
            ))}
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl lg:text-2xl font-semibold capitalize">
                {product.name}
              </h1>
              <p className="text-lg mt-1 font-tenor">₹ {product.price}</p>
            </div>
            <button onClick={handleWishlistToggle}>
              <Heart
                className={`w-6 h-6 mt-2 transition ${
                  inWishlist
                    ? "fill-[#DB2969] stroke-[#DB2969]"
                    : "stroke-black"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p className="text-xs">(MRP incl. of all taxes)</p>
            <p className="text-sm font-palanquin">
              Product Code: {product.product_code}
            </p>
          </div>

          {/* Desktop Thumbnails */}
          <div className="hidden lg:flex gap-2 justify-between overflow-x-auto pb-2">
            {[product.image, ...imageList].map((img, idx) => (
              <motion.img
                key={idx}
                src={`${API_URL}${img}`}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-24 h-32 border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                } cursor-pointer`}
                alt={`${product.name}-thumbnail-${idx}`}
              />
            ))}
          </div>

          {/* Size Selector */}
          <div>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border px-4 py-2 lg:my-3 w-full cursor-pointer text-base font-semibold lg:text-base text-black hover:bg-[#F2F0EF]"
            >
              <option value="">Select your size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </div>

          {/* Description */}
          <div className="text-sm leading-relaxed mt-2">
            <p>
              Our Digital Concierge is available for any questions about this
              product. Contact us.
            </p>
            <p className="mt-3">{product.description}</p>
          </div>

          {/* Accordions */}
          <Accordion
            title="Product care"
            expanded={expanded.care}
            onToggle={() => toggle("care")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion>
          <Accordion
            title="Size guide"
            expanded={expanded.size}
            onToggle={() => toggle("size")}
          >
            Size details and fitting suggestions.
          </Accordion>
          <Accordion
            title="Gifting"
            expanded={expanded.gift}
            onToggle={() => toggle("gift")}
          >
            Gift wrapping options available at checkout.
          </Accordion>

          {/* Add to Bag */}
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={handleAddToBag}
              disabled={inCart || mutation.isLoading}
              whileTap={{ scale: 0.95 }}
              className={`bg-[#DB2961]/20 hover:bg-[#183028]/40 text-[#DB2961] hover:text-white font-medium transition py-3 px-10 text-lg my-4 ${
                (inCart || mutation.isLoading) &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              {inCart
                ? "Added to bag"
                : mutation.isLoading
                ? "Adding..."
                : "Add to bag"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
