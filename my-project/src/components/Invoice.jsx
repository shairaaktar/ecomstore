// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { formattedPrice } from "../utils";

// const Invoice = () => {
//   const { orderId } = useParams();
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrderDetails();
//   }, [orderId]);

//   const fetchOrderDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8001/api/orders/${orderId}`);
//       setOrderDetails(response.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch order details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!orderDetails) {
//     return <p>No order details found.</p>;
//   }

//   const calculateSubtotal = () => {
//     return orderDetails.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
//   };

//   return (
//     <div className="p-8">
//       {/* Invoice Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold">Invoice</h1>
//         <p className="text-lg">Order Number: {orderDetails.orderNumber}</p>
//         <p className="text-sm">Order Date: {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
//       </div>

//       <hr/>

//       {/* Customer and Delivery Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-96 mb-8 mt-4">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Customer Details</h3>
//           <p><strong>Name:</strong> {orderDetails.name}</p>
//           <p><strong>Phone:</strong> {orderDetails.number}</p>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-2">Delivery Address</h3>
//           <p>{orderDetails.address}</p>
//         </div>
//       </div>
//       <hr/>

//       {/* Product List Table */}
//       <div className="mb-8 mt-4">
//         <h3 className="text-xl font-semibold mb-4">Products</h3>
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left py-2 px-4">Image</th>
//               <th className="text-left py-2 px-4">Title</th>
//               <th className="text-left py-2 px-4">Price</th>
//               <th className="text-left py-2 px-4">Quantity</th>
//               <th className="text-left py-2 px-4">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderDetails.cartItems.map((item) => {
//               const { image, title, price, amount, _id } = item;
//               return (
//                 <tr key={_id} className="border-b">
//                   <td className="py-2 px-4">
//                     <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
//                   </td>
//                   <td className="py-2 px-4">{title}</td>
//                   <td className="py-2 px-4">{formattedPrice(price)}</td>
//                   <td className="py-2 px-4">{amount}</td>
//                   <td className="py-2 px-4">{formattedPrice(price * amount)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Order Summary */}
//       <div className="flex justify-between items-center border-t pt-4">
//         <div>
//           <h3 className="font-semibold">Subtotal:</h3>
//           <p>{formattedPrice(calculateSubtotal())}</p>
//         </div>
//         <div>
//           <h3 className="font-semibold">Charge Total:</h3>
//           <p>{formattedPrice(orderDetails.chargeTotal)}</p>
//         </div>
//         <div>
//           <h3 className="font-semibold">Order Total:</h3>
//           <p>{formattedPrice(orderDetails.orderTotal)}</p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center mt-8">
//         <p className="text-sm">Thank you for your purchase!</p>
//       </div>
//     </div>
//   );
// };

// export default Invoice;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formattedPrice } from "../utils";
import BASE_URL from "../config";

const Invoice = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/orders/${orderId}`);
      setOrderDetails(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch order details.");
    } finally {
      setLoading(false);
    }
  };

  const calculateSubtotal = () => {
    return orderDetails.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
  };

  const handlePrint = () => {
    window.print();
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

  return (
    <div className="p-8" id="invoice">
      {/* Invoice Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Invoice</h1>
        <p className="text-lg">Order Number: {orderDetails.orderNumber}</p>
        <p className="text-sm">Order Date: {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
      </div>

      <hr />

      {/* Customer and Delivery Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Details</h3>
          <p><strong>Name:</strong> {orderDetails.name}</p>
          <p><strong>Phone:</strong> {orderDetails.number}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Delivery Address</h3>
          <p>{orderDetails.address}</p>
        </div>
      </div>
      <hr />

      {/* Product List Table */}
      <div className="mb-8 mt-4">
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4">Image</th>
              <th className="text-left py-2 px-4">Title</th>
              <th className="text-left py-2 px-4">Price</th>
              <th className="text-left py-2 px-4">Quantity</th>
              <th className="text-left py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.cartItems.map((item) => {
              const { image, title, price, amount, _id } = item;
              return (
                <tr key={_id} className="border-b">
                  <td className="py-2 px-4">
                    <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
                  </td>
                  <td className="py-2 px-4">{title}</td>
                  <td className="py-2 px-4">{formattedPrice(price)}</td>
                  <td className="py-2 px-4">{amount}</td>
                  <td className="py-2 px-4">{formattedPrice(price * amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Order Summary */}
      <div className="flex justify-between items-center border-t pt-4">
        <div>
          <h3 className="font-semibold">Subtotal:</h3>
          <p>{formattedPrice(calculateSubtotal())}</p>
        </div>
        <div>
          <h3 className="font-semibold">Charge Total:</h3>
          <p>{formattedPrice(orderDetails.chargeTotal)}</p>
        </div>
        <div>
          <h3 className="font-semibold">Order Total:</h3>
          <p>{formattedPrice(orderDetails.orderTotal)}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-sm">Thank you for your purchase!</p>
      </div>

      {/* Print Button */}
      <div className="text-center mt-8">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Print Invoice
        </button>
      </div>

      <style>
        {`
          @media print {
         header, nav,footer{
          display:none !important
          }
            body {
            // font-size: 12pt
            //   font-family: Arial, sans-serif;
            //   margin: 0;
            //   padding: 20px;
             font-size: 12pt;
               margin: 0;
               padding: 0;

            }
               .print-container {
    max-width: 100%;
    padding: 0;
  }

            #invoice {
              width: 100%;
              max-width: 800px;
              margin: 0 auto;
            }
            /* Hide unnecessary elements when printing */
            button {
              display: none;
            }
            hr {
              display: none;
            }
            .text-center {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Invoice;
