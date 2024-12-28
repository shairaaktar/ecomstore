// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import {useSelector} from 'react-redux'
// import {
//     Chart as ChartJS,
//     Title,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     BarElement,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import DatePicker from 'react-datepicker';

// // Register Chart.js components
// ChartJS.register(
//     Title,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     BarElement
// );

// const EveryDaySales=()=>{

//     const [orders, setOrders] = useState([]);
//     const[selectedDate,setSelectedDate]=useState(new Date());
//     const [totalSale, setTotalSale] = useState(0);
//     const [loading, setLoading] = useState(true);

//     const user = useSelector((state) => state.userState); // Assumes userState contains token info
//     const { token,email } = user;

//     useEffect(() => {
//         fetchOrdersForToday();
//     }, [token,email,selectedDate]);

//     const fetchOrdersForToday = async () => {

//         try {

//             const date = selectedDate.toISOString().slice(0, 10); // Format to YYYY-MM-DD
//             console.log("Formatted Date for API:", date);
//             setLoading(true);
//             const response = await axios.post(`http://localhost:8001/api/daily-sales?date=${date}`, 
//                 {email},{
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     authtoken: token,
//                 },
//             });

//             const { orders: fetchedOrders, totalSale: fetchedTotalSale } = response.data;
//             setOrders(fetchedOrders);
//             setTotalSale(fetchedTotalSale);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching today's orders:", error);
//             setLoading(false);
//         }
//     };

//     const chartData = {
//         labels: orders?[orders.date].map((order) =>
//             order.createdAt
//                 ? new Date(order.createdAt).toLocaleTimeString("en-US", {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                   })
//                 : "Unknown"
//         ),
//         datasets: [
//             {
//                 label: "Order Value ($)",
//                 data: orders.map((order) => order.chargeTotal),
//                 backgroundColor: "rgba(75,192,192,0.4)",
//                 borderColor: "rgba(75,192,192,1)",
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-xl font-sm mb-4">Sales for the Day</h1>
//             <DatePicker
//             selected={selectedDate}
//             onChange={(date)=>{
//                 console.log("Selected Date:", date);
//                     setSelectedDate(new Date(date));
//             }}
//             dateFormat="yyyy-MM-dd"
//             className='border text-sm p-2 rounded'
//             />

//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <>
//                     <div className="mb-4">
//                         <h2 className="text-sm font-semibold">
//                             Total Sales: ${totalSale.toFixed(2)}
//                         </h2>
//                         <p className='text-sm '>Total Orders: {orders.length}</p>
//                     </div>

//                     {orders.length > 0 && (
//                         <Bar
//                             data={chartData}
//                             options={{
//                                 responsive: true,
//                                 plugins: {
//                                     legend: {
//                                         position: "top",
//                                     },
//                                     title: {
//                                         display: true,
//                                         text: "Sales Breakdown",
//                                     },
//                                 },
//                             }}
//                         />
//                     )}

//                     <div className="mt-4">
//                         <h3 className="text-sm font-semibold mb-2">Order Details:</h3>
//                         <ul className="list-disc pl-5">
//                             {orders.map((order, index) => (
//                                 <li key={order._id} className="mb-2">
//                                     <p>
//                                         <strong>Order #{index + 1}</strong>
//                                     </p>
//                                     <p>Time: {new Date(order.createdAt).toLocaleString()}</p>
//                                     <p>Value: ${order.chargeTotal.toFixed(2)}</p>
//                                     <p>Products:</p>
//                                     <ul className="list-circle pl-4">
//                                         {order.products.map((product) => (
//                                             <li key={product._id}>
//                                                 {product.product.name} - ${product.product.price.toFixed(2)}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </>
//             )}
//         </div>
//     );

// }

// export default EveryDaySales

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
} from 'chart.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BASE_URL from "../config";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);

const EveryDaySales = () => {
    const [dailyData, setDailyData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const user = useSelector((state) => state.userState);
    const { email, token } = user;

    useEffect(() => {
        console.log("Triggered useEffect with selectedDate:", selectedDate);
        if (selectedDate) {
            fetchDailyData();
        }
    }, [selectedDate, token, email]);

    const fetchDailyData = async () => {
        try {
            const date = selectedDate.toISOString().slice(0, 10); // Format to YYYY-MM-DD
            console.log("Formatted Date for API:", date);

            const response = await axios.post(
                `${BASE_URL}/api/daily-sales?date=${date}`,
                { email, token },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('API Response:', response.data);
            setDailyData(response.data);
        } catch (error) {
            console.error('Error fetching daily sales:', error);
            setDailyData(null);
        }
    };

    const chartData = {
        labels: dailyData ? [dailyData.date] : [],
        datasets: [
            {
                label: 'Total Sales',
                data: dailyData ? [dailyData.totalSales] : [],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h1>Sales for the Selected Day</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    console.log("Selected Date:", date);
                    setSelectedDate(new Date(date));
                }}
                dateFormat="yyyy-MM-dd"
                className="border text-sm p-2 rounded"
            />
            {dailyData ? (
                <Line data={chartData} options={{ responsive: true }} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default EveryDaySales;
