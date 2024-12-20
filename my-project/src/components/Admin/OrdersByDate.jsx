// import React, { useState,useEffect } from 'react';

// import { toast } from 'react-toastify';
// import axios from 'axios';

// const OrdersByDate = () => {
//   const [date, setDate] = useState('');
//   const [orders, setOrders] = useState([]);

  

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

// //   const handleFetchOrders = async () => {
// //     try {
// //       const data = await fetchOrdersByDate(date);
// //       setOrders(data.orders);
// //       toast.success(`Fetched ${data.totalOrders} orders.`);
// //     } catch (error) {
// //       toast.error("Failed to fetch orders.");
// //     }
// //   };
// // useEffect(()=>{


// // },[])
// const fetchedOrdersByDate=async(date)=>{
//     try{

//         const response = await axios.get(`http://localhost:8001/api/todays-orders?date=${date}`);

//           setOrders(response)
//           console.log(response)


//     }catch(error){
//         console.error("Error fetching orders by date:", error);
//     throw error;
//     }
// }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Fetch Orders by Date</h2>
//       <input
//         type="date"
//         value={date}
//         onChange={handleDateChange}
//         className="border p-2 rounded-md"
//       />
//       <button
//         onClick={fetchedOrdersByDate}
//         className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-md"
//       >
//         Fetch Orders
//       </button>

//       {orders.length > 0 && (
//         <div className="mt-4">
//           <h3 className="text-xl font-bold">Orders:</h3>
//           <ul className="list-disc pl-5">
//             {orders.map((order) => (
//               <li key={order._id}>
//                 Order #{order.orderNumber} - Total: ${order.orderTotal}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrdersByDate;


import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const OrdersByDate = () => {
  const [date, setDate] = useState('');
  const [orders, setOrders] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const fetchOrdersByDate = async () => {
    if (!date) {
      toast.error("Please select a date!");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8001/api/todays-orders`, {
        params: { date },
      });

      setOrders(response.data.orders);
      toast.success(`Fetched ${response.data.totalOrders} orders.`);
    } catch (error) {
      console.error("Error fetching orders by date:", error);
      toast.error("Failed to fetch orders.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Fetch Orders by Date</h2>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="border p-2 rounded-md"
      />
      <button
        onClick={fetchOrdersByDate}
        className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-md"
      >
        Fetch Orders
      </button>

      {orders.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Orders:</h3>
          <ul className="list-disc pl-5">
            {orders.map((order) => (
              <li key={order._id}>
                Order #{order.orderNumber} - Total: ${order.orderTotal}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersByDate;
