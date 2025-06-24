import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import API, { API_URL } from "../../api";
import Logo from "../../assets/images/Logo.png";
import RazorPayLogo from "../../assets/images/RazorPayLogo.png";
import Loader from "../ui/Loader";

const OrderDetails = () => {
    
    const [order,setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        API.get(`my-orders/`)
        .then((res)=> {
            setOrder(res.data);
            setLoading(false);
            // console.log(`Order details:  `,res.data);  
        })
        .catch((error)=>{
            //  setError("Invalid User:" + error.message);
            console.error("Error fetching order details: ",error );
            if (error.response && error.response.status === 401) {
                 navigate("/login");
             }else{
                console.error("Error in Orderdetails: "+ error.message);  
            }
             setLoading(false);
            
        })
    },[navigate])

    if(loading) return (
        <Loader />
    );

    if (!order || order.length === 0)  return <p>No order found.</p>;
  
return (
<>
    <div className="max-w-6xl mx-auto px-4 py-6  bg-white">
        
        {/* header */}
        <div  className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        <img src={Logo} alt="Logo" className="h-10 sm:h-14 lg:h-20"/><br />
      <p className="text-xs sm:text-sm tracking-wider uppercase font-medium text-center sm:text-right lg:mt-14">MY ORDER DETAILS</p>
      </div>
      {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}


        {/* Looping through all orders & formatting ord.created_at into date */}
        {order.map((ord,idx)=>{
            const formattedDate = new Date(ord.created_at).toLocaleDateString("en-GB",{
            day: "2-digit",
            month: "long",
            year: "numeric",
            });
             const totalValue = parseFloat(ord.total_amount).toFixed(2);
             const orderId = ord.id || "N/A"; // Fallback to "N/A" if id is not available
            
             return (
            <div key={idx} className="mb-10 pb-6">
                     {/* Order Summary For Each order */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 text-sm mb-8 md:pl-16 lg:mb-10 bg-[#F2F0EF]">
                <div>
                <p>Order Placed</p>
                <p><strong>{formattedDate}</strong></p>
                </div>
                <div>
                <p>Total Value</p>
                <p><strong>₹ {totalValue}</strong></p>
                </div>
                <div>   
                <p>Shipped to </p>
                <p><strong>Mr. </strong></p>    
                 </div> 
                <div className="md:pl-24">
                <p>Order Id</p>
                <p><strong># {orderId}</strong></p>
                </div>
                </div>

                {/* Product Loop for this order */}
                {ord.cart?.items?.map((item,index)=>(
                <div className="flex flex-col md:flex-row gap-4 p-4 mb-8 lg:justify-center lg:items-center lg:pl-16 border-l border-r border-gray-700">
                {/* Product Image */}
                <img src={`${API_URL}${item.product.image}`} alt="Order Image" className="w-28 h-auto object-cover mx-auto md:mx-0 " />

                {/* Product Details */}
                <div className="flex-1 text-center md:text-left lg:gap-4 md:pl-16 md:items-center md:my-auto lg:pl-16">
                <h1><strong>{item.product.name}</strong></h1>
                <p className="text-sm mt-1">Size {item.product_size} | Qty purchased {item.quantity}</p>
                </div>
       
                <div className="text-sm text-center md:text-right lg:text-left space-y-1 lg:pr-16 lg:border-l border-gray-700 lg:pl-20">
                <p>Delivered 27 March 2025</p>
                <p>{ord.status}</p>
                
                <div className="flex justify-center md:justify-end items-center gap-3 space-y-1 lg:text-left mt-6 md:mt-12">
                <p>Payment Methods  </p>
                <img src={RazorPayLogo} alt="RazorPay" className="h-4 md:h-4 lg:h-6 mb-1 lg:mb-2" />
                </div>
                <div className=" justify-center md:justify-end items-center gap-2 space-y-1 lg:text-left">
                <p>Card ending with xxxx</p>
                </div>
                </div>
                </div>
                ))}
            </div>
             );
        })}     
    </div>
</>
  );
}

export default OrderDetails;