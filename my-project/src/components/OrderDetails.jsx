// import React ,{useEffect,useState} from "react"
// import {useParams} from 'react-router-dom'
// import axios from "axios"
// import { formattedPrice } from "../utils";


// const OrderDetails=()=>{
//     const {orderId}=useParams();
//     console.log('orderId',orderId)
//     const [orderDetails,setOrderDetails]=useState(null);
//     const [loading,setLoading]=useState(true)
//     const [error,setError]=useState(null)

//     useEffect(()=>{
//         fetchOrderDetails()

//     },[orderId]);


//     const fetchOrderDetails=async()=>{
//         try{

//             const response=await axios.get(`http://localhost:8001/api/orders/${orderId}`);
//             setOrderDetails(response.data)
//             console.log('response.data',response)


//         }catch(err){
//             setError(err.response?.data?.message || "Failed to fetch order details.");
 
//         }finally{
//             setLoading(false);
//         }
//     }


//     return(
//        <div>
//         {orderDetails ?(
            
//             <>
//             <div 
//              className="flex justify-between items-center mb-4 mt-4 p-4  rounded-md shadow"
//             >
//                 <div
//                 className="grid grid-cols-3 mr-3 text-black"
//                 >
//                     <h2 className="font-bold"
//                     >OrderNumber{orderDetails.orderNumber}</h2>
//                 </div>
//                 <div
//                 className="flex gap-4"
                
//                 >
//                     Order placed {orderDetails.createdAt}
//                     </div>


//             </div>
//             <div>
//             <div
//             className="card card-side bg-base-100 shadow-xl pt-4 pb-4"
//             >
//                {orderDetails.cartItems.map((item)=>{
//                 const {image,title,_id}=item
//                 console.log('image',image)

//                 return(
//                     <tr key={_id}>
//                     <td>
//                         <figure>
//                             <img
//                              src={image}
//                              alt={title}
//                              className="w-40 h-40 object-cover rounded-md"
//                             />
//                         </figure>
                       
//                     </td>
//                     </tr>
//                 )
//                })}

//              {orderDetails.cartItems.map((item)=>{
//                 const {title,price,_id}=item
//                 return(
//                    <tr key={_id}>
//                      <div>
//                     <h2 className='font-semibold'>
//                         {title}
                       
//                     </h2>
//                     <h2>
//                     <p className="mt-2">
//                             {formattedPrice(price)}
//                             </p>
//                     </h2>

//                 </div>
//                    </tr>
//                 )
//              })}
//              </div>
//              <div className="ml-14">
//                 <h2 className="font-semibold">
//                     Delivery Address
//                 </h2>
//                 <p className="mt-2"
//                 >{orderDetails.address}</p>

//              </div>
//              <div className="ml-14 ">
//                 <h2 className="font-semibold">
//                     Customer Details
//                 </h2>
//                 <p
//                 className="mt-2"
//                 >{orderDetails.name}</p>
//                 <p className="mt-2">{orderDetails.number}</p>
                
//              </div>


//             </div>
//             </>

//         ):(
//             <p>No order details found</p>

//         )}
//        </div>
//     )

// }

// export default OrderDetails

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formattedPrice } from "../utils";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/api/orders/${orderId}`);
      setOrderDetails(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch order details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!orderDetails) {
    return <p>No order details found.</p>;
  }

  const calculateSubtotal = () => {
    return orderDetails.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
  };

  return (
    <div className="p-4">
      {/* Order Details Card */}
      <div className="card bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="font-bold text-xl mb-4">Order Details</h2>
        
        {/* Order Number and Date */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Order Number: {orderDetails.orderNumber}</h3>
          <p>Order Placed: {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="space-y-4">
          {orderDetails.cartItems.map((item) => {
            const { image, title, price, amount, _id } = item;
            return (
              <div
                key={_id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-100 rounded-md shadow"
              >
                {/* Product Image */}
               

                {/* Product Details (Title, Price, Quantity, Total) */}
                <div className="col-span-4 grid grid-cols-1 gap-2">
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p>Price: {formattedPrice(price)}</p>
                  <p>Quantity: {amount}</p>
                  <p className="font-bold">Total: {formattedPrice(price * amount)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customer and Delivery Details */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <h3 className="font-medium">Customer Details</h3>
            <p>Name: {orderDetails.name}</p>
            <p>Phone: {orderDetails.number}</p>
          </div>

          <div>
            <h3 className="font-medium">Delivery Address</h3>
            <p>{orderDetails.address}</p>
          </div>

          <div>
            <h3 className="font-medium">Order Summary</h3>
            <p>Subtotal: {formattedPrice(calculateSubtotal())}</p>
            <p>Charge Total: {formattedPrice(orderDetails.chargeTotal)}</p>
            <p className="font-bold">Order Total: {formattedPrice(orderDetails.orderTotal)}</p>
          </div>
        </div>

       
        
      </div>
    </div>
  );
};

export default OrderDetails;
