import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../api";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import Loader from "../ui/Loader";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await API.get(`order/${orderId}/`);
        setOrder(response.data);
      } catch {
        setError("Failed to fetch order details.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrderDetails();
  }, [orderId]);
console.log(order,"llllllllll")
  if (loading) return <Loader />;
  if (error) return <Loader text={error}/>;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <motion.div
        className="max-w-xl w-full bg-gray-50 p-8 rounded-lg shadow-md text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircleIcon className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Thank you for your purchase!</h2>
        <p className="text-gray-600 mb-6">
        Order confirmed! ☺️ Check email for order details and tracking info
        </p>

        {/* <div className="text-left text-sm bg-white p-4 rounded-md border mb-6">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <p><span className="font-medium">Name:</span> {order?.address?.orderedname}</p>
          <p><span className="font-medium">Email:</span> {order?.address?.email}</p>
          <p><span className="font-medium">Phone:</span> {order?.address?.phone}</p>
          <p><span className="font-medium">Address:</span> {order?.address?.address_line1} ,{order?.address?.address_line2}</p>
          <p><span className="font-medium">Total Paid:</span> ₹ {order?.total_amount }</p>
        </div> */}

        <Link to="/" className="inline-block px-6 py-2 bg-[black] text-white rounded hover:bg-[white] hover:text-black transition">
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
