// import { io } from "socket.io-client";
// import { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";

// const OrderStatus = () => {
//     const [orderStatus, setOrderStatus] = useState(null);
//     const [error, setError] = useState(null);
//     const orderId = "6714ea138ddeda82626cf31b";
//      const user=useSelector((state)=>state.userState);

//      console.log('user',user)
//      const {token}=user

//     useEffect(() => {
//         // Initialize Socket.IO client and pass the auth token
//         const socket = io('http://localhost:3000', {
//             auth: {
//                token:token // Retrieve token from local storage
//             }
//         },[token]);

//         // Listen for the orderStatusUpdated event
//         socket.on('orderStatusUpdated', ({ orderId: updatedOrderId, orderStatus }) => {
//             // Only update the status if it is for this user's order
//             if (updatedOrderId === orderId) {
//                 console.log(message);
//                 setOrderStatus(orderStatus); // Update the order status in your component
//             }
//         });

//         // Handle connection errors
//         socket.on('connect_error', (err) => {
//             setError("Socket connection error: " + err.message);
//         });

//         return () => {
//             socket.disconnect(); // Cleanup socket connection when component unmounts
//         };
//     }, [orderId]); // Ensure effect runs whenever the orderId changes

//     return (
//         <div>
//             <h2>Order Status</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {orderStatus ? (
//                 <p>Your order status is: {orderStatus}</p>
//             ) : (
//                 <p>Waiting for updates...</p>
//             )}
//         </div>
//     );
// };

// export default OrderStatus;


// import { io } from "socket.io-client";
// import { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";

// const OrderStatus = () => {
//     const [orderStatus, setOrderStatus] = useState(null);
//     const [error, setError] = useState(null);
//     const orderId = "6714ea138ddeda82626cf31b"; // Example orderId
//     const user = useSelector((state) => state.userState);

//     console.log('user', user);
//     const { token } = user; // Destructure token from userState

//     useEffect(() => {
//         if (!token) return; // Ensure token exists before attempting to connect

//         // Initialize Socket.IO client and pass the auth token
//         const socket = io('http://localhost:3000', {
//             auth: {
//                 token // Pass the user token
//             }
//         });

//         // Listen for the orderStatusUpdated event
//         socket.on('orderStatusUpdated', ({ orderId: updatedOrderId, orderStatus }) => {
//             // Only update the status if it is for this user's order
//             if (updatedOrderId === orderId) {
//                 console.log(orderStatus); // Log the updated order status
//                 setOrderStatus(orderStatus); // Update the order status in your component
//             }
//         });

//         // Handle connection errors
//         socket.on('connect_error', (err) => {
//             setError("Socket connection error: " + err.message);
//         });

//         return () => {
//             socket.disconnect(); // Cleanup socket connection when component unmounts
//         };
//     }, [orderId, token]); // Ensure effect runs whenever orderId or token changes

//     return (
//         <div>
//             <h2>Order Status</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {orderStatus ? (
//                 <p>Your order status is: {orderStatus}</p>
//             ) : (
//                 <p>Waiting for updates...</p>
//             )}
//         </div>
//     );
// };

// export default OrderStatus;

// import { io } from 'socket.io-client';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const OrderStatus = () => {
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [error, setError] = useState(null);
//   const orderId = '6714ea138ddeda82626cf31b'; // Get this dynamically if needed
//   const user = useSelector((state) => state.userState);
//   const { token, uid } = user; // Ensure uid is available in your Redux state

//   useEffect(() => {
//     const socket = io('http://localhost:3000', {
//       auth: { 
//         token:token
//      }, // Pass the token for authentication
//     });

//     // Listen for the order status update
//     socket.on('orderStatusUpdated', ({ orderId: updatedOrderId, orderStatus }) => {
//       if (updatedOrderId === orderId) {
//         setOrderStatus(orderStatus); // Update the status for this order
//       }
//     });

//     socket.on('connect_error', (err) => {
//       setError('Socket connection error: ' + err.message);
//     });

//     return () => {
//       socket.disconnect(); // Clean up socket connection
//     };
//   }, [orderId, token]);

//   return (
//     <div>
//       <h2>Order Status</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {orderStatus ? (
//         <p>Your order status is: {orderStatus}</p>
//       ) : (
//         <p>Waiting for updates...</p>
//       )}
//     </div>
//   );
// };

// export default OrderStatus;


import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import BASE_URL from '../config';

const socket = io('http://localhost:3000')

const OrderStatus = () => {
//   const [orderStatus, setOrderStatus] = useState(null);

const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const orderId = '6714f9598ddeda82626cf346'; // Get this dynamically if needed
  const user = useSelector((state) => state.userState);
  const { token, uid,email } = user; // Ensure uid and token are available

  useEffect(() => {
    const fetchOrders = async () => {
        axios.post(`${BASE_URL}/api/user/orders`,{email},{
            headers: {
                Authorization: `Bearer ${token}`,
                authtoken: token,
            }
        }).then((response)=>{
            setOrders(response.data)
            console.log(response)

        }).catch((error)=>{
            console.error('Error fetching orders',error);
        })
    };

    fetchOrders();

    // Listen for order status updates
    socket.on('orderStatusUpdated', (data) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order._id === data.orderId ? { ...order, orderStatus: data.orderStatus } : order
            )
        );
    });

    return () => {
        socket.off('orderStatusUpdated'); // Clean up the listener on component unmount
    };
}, [token]);

//   useEffect(() => {
//     // if (!token) {
//     //   setError('Authentication error: No token provided');
//     //   return;
//     // }

//     const socket = io('http://localhost:3000', {
//       auth: { 
//         token: token // Pass the token for authentication
//       },
//     });

//     console.log('socket',socket)

//     socket.on("connect", () => {
//         console.log("Connected successfully!");
//     });
    

//     socket.on('connect_error', (err) => {
//         setError('Socket connection error: ' + err.message);
//       });
  

//     // Listen for the order status update
//     socket.on('orderStatusUpdated', ({ orderId: updatedOrderId, orderStatus }) => {
//       if (updatedOrderId === orderId) {
//         setOrderStatus(orderStatus); // Update the status for this order
//       }
//     });

    
//     return () => {
//       socket.disconnect(); // Clean up socket connection
//     };
//   }, [orderId, token]);

// useEffect(() => {
//     // Check if the token is defined
//     console.log('Using token:', token); // Log the token
  
//     // if (!token) {
//     //   setError('Authentication error: No token provided');
//     //   return;
//     // }
  
//     const socket = io('http://localhost:3000', {
//       auth: { 
//         token: token // Pass the token for authentication
//       },
//     });
  
//     console.log('Socket initialized:', socket);
  
//     socket.on("connect", () => {
//       console.log("Connected successfully!");
//     });
    
//     socket.on('connect_error', (err) => {
//       console.error('Connection error:', err);// Log the error details
//       setError('Socket connection error: ' + err.message);
//     });
  
//     // socket.on('orderStatusUpdated', ({ orderId: updatedOrderId, orderStatus }) => {
//     //   console.log('Order status updated:', updatedOrderId, orderStatus); // Log updates
//     //   if (updatedOrderId === orderId) {
//     //     setOrderStatus(orderStatus); // Update the status for this order
//     //   }
//     // });

//     socket.on('orderStatusUpdated', (data) => {
//         const { orderId, orderStatus } = data;

        
    
//         // Handle the updated order status (e.g., update the UI)
//         console.log(`Order ID: ${orderId}, New Status: ${orderStatus}`);
//         // Update your state/UI accordingly
//     });
    
  
//     return () => {
//       socket.disconnect(); // Clean up socket connection
//     };
//   }, [orderId, token]);
  



//   return (
//     <div>
//       <h2>Order Status</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {orderStatus ? (
//         <p>Your order status is: {orderStatus}</p>
//       ) : (
//         <p>Waiting for updates...</p>
//       )}
//     </div>
//   );

return (
    <div>
        <h2>Your Orders</h2>
        {orders.length === 0 ? (
            <p>No orders found.</p>
        ) : (
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        Order ID: {order._id} - Status: {order.orderStatus}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
};

export default OrderStatus;
