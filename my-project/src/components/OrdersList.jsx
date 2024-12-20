// import axios from "axios";
// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux";
// import day from "dayjs";
// import advancedFormat from 'dayjs/plugin/advancedFormat'
// import SectionTitle from "./SectionTitle";
// import PaginationContainer from "./PaginationContainer";
// import {io} from 'socket.io-client';
// import { OrderStatus } from "../pages";
// day.extend(advancedFormat);
// const ORDER_PER_PAGE=10

// const socket=io('http://localhost:3000')




// const OrdersList=()=>{
//     const [orders,setOrders]=useState([]);
//     const [ordersCount,setOrdersCount]=useState(0)
//     const [error,setError]=useState(null);
//     const user=useSelector((state)=>state.userState);
//     const [page,setPage]=useState(1);
//     const {token}=user
//     const {email}=user
//     console.log('token',token)

//     useEffect(()=>{
//         loadUserOrders();
//         fetchOrdersCount();
//     },[page,token,email]);


//     // useEffect(()=>{
       

//     //     axios.get('http://localhost:8001/api/user/orders',{
//     //         headers:{
//     //             Authorization: `Bearer ${token}`,
//     //             authtoken:token
//     //         }
//     //     }).then((response)=>{
//     //         setOrders(response.data);
//     //         console.log(response)
//     //     })
//     //     .catch((error)=>{
//     //         console.error('Error fetching orders',error);
//     //     })

//     // },[token]);

//     const loadUserOrders=()=>{
//         axios.post('http://localhost:8001/api/user/orders',{email,page,limit:ORDER_PER_PAGE},{
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 authtoken: token,
//             }
//         }).then((response)=>{
//             setOrders(response.data)
//             console.log('orders',response)

//         }).catch((error)=>{
//             console.error('Error fetching orders',error);
//         })


//         socket.on('orderStatusUpdated',(data)=>{
//             setOrders((prevOrders)=>
//                 prevOrders.map((order)=>
//                     order._id===data.orderId ?{...order,orderStatus:data.orderStatus} :order
//                 )
//             );
//         });

//         return()=>{
//             socket.off('orderStatusUpdated');

//         }
//     };

//     const fetchOrdersCount=()=>{
//         axios.get('http://localhost:8001/api/user/orders/count',{
//             headers:{
//                 Authorization:`Bearer ${token}`,
//                 authtoken:token,
                
//             }
//         }).then((response)=>{
//             setOrdersCount(response.data.totalOrders);
//             console.log('Orders Count--->',response.data.totalOrders);
//         }).catch((error)=>{
//             console.error('Error fetching oders count',error);
//         })

       
//     }

   

   


//     return (
//     <div className="mt-8">
//         <div className="mb-4 capitalize">
//             {orders.length <1 ?(
//                 <SectionTitle text='please make an order'/>
//             ):(<h1>
//                 total Orders : {ordersCount}
//             </h1>)}
//         </div>
       
//        <div className="overflow-x-auto">
//         <table className="table tabel-zebra">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>Products</th>
//                     <th>Cost</th>
//                     <th className="hidden sm:block">Date</th>
//                     <th>Order Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {orders.map((order)=>{
//                     // console.log(order);
//                     const id=order._id;
//                     // console.log('id',id)

//                     const {name,address,numItemsInCart,orderTotal,createdAt,orderStatus}=order
//                     const date=day(createdAt).format(`hh:mm a-MMM Do, YYYY`);
//                     return (
//                         <tr key={id}> 
//                         <td>{name}</td>
//                         <td>{address}</td>
//                         <td>{numItemsInCart}</td>
//                         <td>{orderTotal}</td>
//                         <td className="hidden sm:block">{date}</td>
//                         <td>{orderStatus}</td>


//                         </tr>
//                     )
//                 })}
//             </tbody>

//         </table>

//        </div>
//        <PaginationContainer
//        current={page}
//        total={ordersCount}
//        pageSize={ORDER_PER_PAGE}
//        onChange={(value)=>setPage(value)}
       
//        />
      



//     </div>
   
    
//     )
// }

// export default OrdersList

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import day from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";
// import SectionTitle from "./SectionTitle";
// import PaginationContainer from "./PaginationContainer";
// import {formattedPrice} from '../utils/index'
// import { io } from "socket.io-client";
// day.extend(advancedFormat);

// const ORDER_PER_PAGE = 10;
// const socket = io("http://localhost:3000");

// const OrdersList = () => {
//   const [orders, setOrders] = useState([]);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [error, setError] = useState(null);
//   const user = useSelector((state) => state.userState);
//   const [page, setPage] = useState(1);
//   const { token } = user;
//   const { email } = user;

//   useEffect(() => {
//     loadUserOrders();
//     fetchOrdersCount();
//   }, [page, token, email]);

//   const loadUserOrders = () => {
//     axios
//       .post(
//         "http://localhost:8001/api/user/orders",
//         { email, page, limit: ORDER_PER_PAGE },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             authtoken: token,
//           },
//         }
//       )
//       .then((response) => {
//         setOrders(response.data);
//         console.log('response',response)
//       })
//       .catch((error) => {
//         console.error("Error fetching orders", error);
//       });

//     socket.on("orderStatusUpdated", (data) => {
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === data.orderId
//             ? { ...order, orderStatus: data.orderStatus }
//             : order
//         )
//       );
//     });

//     return () => {
//       socket.off("orderStatusUpdated");
//     };
//   };

//   const fetchOrdersCount = () => {
//     axios
//       .get("http://localhost:8001/api/user/orders/count", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           authtoken: token,
//         },
//       })
//       .then((response) => {
//         setOrdersCount(response.data.totalOrders);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders count", error);
//       });
//   };

//   // Group orders by date
//   const groupOrdersByDate = (orders) => {
//     return orders.reduce((acc, order) => {
//       const dateKey = day(order.createdAt).format("MMM Do, YYYY");
//       if (!acc[dateKey]) acc[dateKey] = [];
//       acc[dateKey].push(order);
//       return acc;
//     }, {});
//   };

//   const groupedOrders = groupOrdersByDate(orders);

//   return (
//     <div className="mt-8">
//       <div className="mb-4 capitalize">
//         {orders.length < 1 ? (
//           <SectionTitle text="please make an order" />
         
//         ) : (
//           <h1>Total Orders: {ordersCount}</h1>
//         )}
//       </div>
//    <br/>
//    <hr/>

//       {Object.keys(groupedOrders).map((date) => (
//         <div key={date} className="mb-8">
//             <div
//              className="grid grid-cols-3  mb-4 mt-4   font-bold"
//              >
//                 <div>
//                     <h2>Date</h2>
//                     <p>{date}</p>
//                 </div>
//                 <div>
//                     <h1>Total amount</h1>
//                 </div>
//                 <div>
//                     Order Number
//                 </div>

//             </div>
//             <hr/>
         
//           <div className="overflow-x-auto">
//             <table className="table  w-full">
//               <thead>
//                 <tr>
//                   {/* <th>Name</th>
//                   <th>Address</th>
//                   <th>Products</th>
//                   <th>Cost</th>
//                   <th className="hidden sm:block">Time</th>
//                   <th>Order Status</th> */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {groupedOrders[date].map((order) => {
//                   const id = order._id;
//                   const {
//                     name,
//                     cartItems,
//                     address,
//                     numItemsInCart,
//                     orderTotal,
//                     createdAt,
//                     orderStatus,
//                   } = order;
//                   const time = day(createdAt).format("hh:mm a");
//                      console.log('cartItems',cartItems)
//                   return (
//                     <tr key={id}>
//                       {/* <td>{name}</td>
//                       <td>{address}</td>
//                       <td>{numItemsInCart}</td>
//                       <td>{orderTotal}</td> */}
                     
//                       <td>{
//                         cartItems.map((products)=>{
//                             const id=products._id
//                             const{
//                                 image,
//                                 title,price,amount
//                             }=products
//                             const Price=formattedPrice(price)
//                             console.log('title',title)
//                             return(
//                                 <tr key={id}>
//                                      <div 
//                        className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
//                       >
//                                    <td>
//                                     <img 
//                                     src={image}
//                                     alt={title}
                                    
//                      className="w-20 h-20 object-cover rounded-md"
//                                     />
//                                    </td>
//                                     <td className="mt-0">
//                                         {title}
//                                         <p>
//                                         <button>
//                                             view product
//                                         </button>
//                                         </p>
//                                         </td>
//                                         <td  className="font-medium sm:ml-auto">{Price} x {amount}</td>
//                                         </div>
//                                 </tr>
//                             )
//                         })
                       
//                         }</td>
                       
                      
//                       <td>{orderStatus}</td>
                     
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}

//       <PaginationContainer
//         current={page}
//         total={ordersCount}
//         pageSize={ORDER_PER_PAGE}
//         onChange={(value) => setPage(value)}
//       />
//     </div>
//   );
// };

// export default OrdersList;


import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import SectionTitle from "./SectionTitle";
import PaginationContainer from "./PaginationContainer";
import { formattedPrice } from "../utils/index";
import {Link} from 'react-router-dom'
import { io } from "socket.io-client";
day.extend(advancedFormat);

const ORDER_PER_PAGE = 10;
const socket = io("http://localhost:3000");

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [ordersCount, setOrdersCount] = useState(0);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.userState);
  const [page, setPage] = useState(1);
  const { token } = user;
  const { email } = user;

  useEffect(() => {
    loadUserOrders();
    fetchOrdersCount();
  }, [page, token, email]);

  const loadUserOrders = () => {
    axios
      .post(
        "http://localhost:8001/api/user/orders",
        { email, page, limit: ORDER_PER_PAGE },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            authtoken: token,
          },
        }
      )
      .then((response) => {
        setOrders(response.data);
        console.log('response',response.data)
      })
      .catch((error) => {
        console.error("Error fetching orders", error);
      });

    socket.on("orderStatusUpdated", (data) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === data.orderId
            ? { ...order, orderStatus: data.orderStatus }
            : order
        )
      );
    });

    return () => {
      socket.off("orderStatusUpdated");
    };
  };

  const fetchOrdersCount = () => {
    axios
      .get("http://localhost:8001/api/user/orders/count", {
        headers: {
          Authorization: `Bearer ${token}`,
          authtoken: token,
        },
      })
      .then((response) => {
        setOrdersCount(response.data.totalOrders);
      })
      .catch((error) => {
        console.error("Error fetching orders count", error);
      });
  };

  // Group orders by order ID
  const groupOrdersById = (orders) => {
    return orders.reduce((acc, order) => {
      const orderId = order.orderNumber;
      acc[orderId] = order;
      return acc;
    }, {});
  };

  const groupedOrders = groupOrdersById(orders);

  return (
    <div className="mt-2">
      <div className="mb-4 capitalize">
        {orders.length < 1 ? (
          <SectionTitle text="please make an order" />
        ) : (
          <h1>Total Orders: {ordersCount}</h1>
        )}
      </div>
      <br />
      

      {Object.keys(groupedOrders).map((orderId) => {
        const order = groupedOrders[orderId];
        const {
          name,
          cartItems,
          address,
          numItemsInCart,
          orderTotal,
          createdAt,
          orderStatus,
        } = order;
        const formattedDate = day(createdAt).format("MMM Do, YYYY");
        const time = day(createdAt).format("hh:mm a");

        return (
          <div key={orderId} className=" mb-8">
          

<div 
  className="flex justify-between items-center  mt-4 p-4      "
>
  {/* Left Side: Order Details */}
  <div className="grid grid-cols-3 mr-3 ">
    <div>
      <h2 className="font-semibold">Order Number</h2>
      <p
      className=" mr-3 font-semibold"
      >
        {orderId}
        </p>
    </div>
    <div>
      <h2>Date</h2>
      <p
       className=" mr-3"
      >{formattedDate}</p>
    </div>
   
  </div>

  {/* Right Side: Buttons */}
  <div className="flex gap-4">
    {/* <button className="px-4 py-2  bg-white rounded hover:underline">
      <Link to={`/orderDetails/${orderId}`}>
      View Order
      </Link>
    
    </button> */}

<div>
      <h2>Total Amount</h2>
      <p
       className=" mr-3"
      >{formattedPrice(orderTotal)}</p>
    </div>
    <button className="px-4 py-2   border border-gray-200 rounded hover:underline">
     <Link to={`/invoice/${orderId}`}>
     View Invoice
     </Link>
    </button>
  </div>
</div>

           
            
            <div className="ml-5 mr-5">
            <div className="overflow-x-auto">
              <table className="table w-full  mx-auto border border-gray">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product) => {
                    const { _id: productId, title, image, price, amount ,productID} =
                      product;
                      console.log('productID',productID)
                    return (
                      <tr key={productId}>
                        <div  
                        //  className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
                        >
                        <td>
                          <img
                            src={image}
                            alt={title}
                            className="w-40 h-40 object-cover rounded-md"
                          />
                         
                        </td>
                        <td >
                            <p
                            //  className="text-xl font-semibold"
                             >
                                {title}
                            </p>
                            <p >
                                <button 
                                // className="text-blue-500 text-sm hover:underline"
                                className="text-blue-500 hover:underline"

                                >
                                    <Link to={`/products/${productID}`}>
                                    view product
                                    </Link>
                                </button>
                            </p>

                        </td>
                        </div>
                        {/* <td >{amount}</td>
                        <td>{formattedPrice(price)}</td> */}
                        <td className="sm:flex-1">
                      
                                {amount}
                          
                        </td>
                        <td className="sm:flex-1">
                           
                           
                                {formattedPrice(price)}
                          
                           
                        </td>
                        <td>
                            <p className="text-sm font-normal">
                            {formattedPrice(price*amount)}
                            </p>

                        </td>
                        <td>
                           <p > {orderStatus}</p>
                        </td>
                       
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            
            </div>
            </div>
            {/* <div className="mt-4 ml-12">
              <h2>Order Status</h2>
              <p>{orderStatus}</p>
            </div> */}
            {/* <hr/> */}
          </div>
           
        );
      })}

      <PaginationContainer
        current={page}
        total={ordersCount}
        pageSize={ORDER_PER_PAGE}
        onChange={(value) => setPage(value)}
      />
    </div>
  );
};

export default OrdersList;
