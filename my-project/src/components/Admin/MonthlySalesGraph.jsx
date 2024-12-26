// import React ,{useEffect,useState} from 'react';
// import {Line} from "react-chartjs-2"
// import {Chart as ChartJS,Title,Tooltip,Legend,CategoryScale,LinearScale,BarElement} from "chart.js"
// import axios from 'axios'
// import { useSelector } from 'react-redux';



// ChartJS.register(Title,Tooltip,Legend,CategoryScale,LinearScale,BarElement);

// const MonthlySalesGraph=()=>{

//     const [monthlyData,setMonthlyData]=useState([])

//     const user=useSelector((state)=>state.userState);
//     const {email,token}=user

//     useEffect(()=>{
        

//         fetchMonthyData();

//     },[token,email])

//     const fetchMonthyData=async()=>{
//       await  axios.post(`http://localhost:8001/api/monthly-sales`,
//             {email},{
//                 headers:{
//                     Authorization:`Bearer ${token}`,
//                     authtoken:token,
//                 },
//             }
//         ).then((response)=>{
//             console.log("API Response:",response.data)
//         }).catch((error)=>{
//             console.error("Error fetching wishlist:", error)
//             setMonthlyData(response.data)
//         })
//     }

//     const chartData={
//         labels:monthlyData.map((item)=>item.date),
//         datasets:[
//             {
//                 label:"Total Sales",
//                 data:monthlyData.map((item)=>item.totalSales),
//                 borderColor:"rgba(75,192,192,1)",
//                 backgroundColor:"rgba(75,192,192,0.2)",
//                 tension:0.1,
//             }
//         ]
//     }

//     return(
//         <div>
//             <h2></h2>
//             {monthlyData.length>0 ?(
//                 <Line data={chartData} options={{responsive:true}}/>

//             ):(
//                 <div>Loading..</div>

//             )}
//         </div>
//     )

// }

// export default MonthlySalesGraph;


// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     Title,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,  
// } from 'chart.js';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement,PointElement,LineElement);

// const MonthlySalesGraph = () => {
//     const [monthlyData, setMonthlyData] = useState([]);

//     const user = useSelector((state) => state.userState);
//     const { email, token } = user;

//     useEffect(() => {
//         fetchMonthyData();
//     }, [token, email]);

//     const fetchMonthyData = async () => {
//         await axios
//             .post(
//                 `http://localhost:8001/api/monthly-sales`,
//                 { email },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         authtoken: token,
//                     },
//                 }
//             )
//             .then((response) => {
//                 console.log('API Response:', response.data);
//                 setMonthlyData(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching monthly sales:', error);
//                 setMonthlyData([]); // Reset to an empty array on error
//             });
//     };

//     const chartData = {
//         labels: monthlyData.map((item) => item.date),
//         datasets: [
//             {
//                 label: 'Total Sales',
//                 data: monthlyData.map((item) => item.totalSales),
//                 borderColor: 'rgba(75,192,192,1)',
//                 backgroundColor: 'rgba(75,192,192,0.2)',
//                 tension: 0.1,
//             },
//         ],
//     };

//     return (
//         <div>
//             <h2>Monthly Sales</h2>
//             {monthlyData.length > 0 ? (
//                 <Line data={chartData} options={{ responsive: true }} />
//             ) : (
//                 <div>Loading...</div>
//             )}
//         </div>
//     );
// };

// export default MonthlySalesGraph;


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
import BASE_URL from '../../config';


ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
);

const MonthlySalesGraph = () => {
    const [monthlyData, setMonthlyData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    
    const user = useSelector((state) => state.userState);
    const { email, token } = user;

    // useEffect(() => {
    //     fetchMonthlyData();
    // }, [selectedMonth,token, email]);

    useEffect(() => {
        console.log("Triggered useEffect with selectedMonth:", selectedMonth);
        if (selectedMonth) {
            fetchMonthlyData();
        }
    }, [selectedMonth, token, email]);


    const fetchMonthlyData = async () => {
        try {
            // const month = selectedMonth.toISOString().slice(0, 7);
            // console.log("Formatted Month for API:", month);

            const month = new Date(Date.UTC(
                selectedMonth.getFullYear(),
                selectedMonth.getMonth()
            )).toISOString().slice(0, 7);
    
            console.log("Formatted Month for API (UTC):", month);
            const response = await axios.post(
                `${BASE_URL}/api/monthly-sales?month=${month}`,
                { email,token },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        authtoken: token,
                    },
                }
            );
            console.log('API Response:', response.data);
            setMonthlyData(response.data);

        } catch (error) {
            console.error('Error fetching monthly sales:', error);
            setMonthlyData([]);
        }
    };

     const chartData = {
         labels: monthlyData.map((item) => ` ${item.date}`),
         datasets: [
             {
                 label: 'Total Sales',
                 data: monthlyData.map((item) => item.totalSales),
                 borderColor: 'rgba(75,192,192,1)',
                 backgroundColor: 'rgba(75,192,192,0.2)',
                 tension: 0.1,
             },
         ],
     };

     console.log('Chart Data:', chartData);

    return (
       
       
        <div>
 <div >
     <div>
    <h1>Sales this month</h1>
     </div>
    

 </div>

   <div>
    <DatePicker
    selected={selectedMonth}
    // onChange={(date)=>setSelectedMonth(date)}
    // onChange={(date) => {
    //     console.log("Selected Month:", date); // Verify the new date
    //     setSelectedMonth(date);
    // }}
    onChange={(date) => {
        console.log("Selected Month:", date); // Debug
        setSelectedMonth(new Date(date));
    }}
    dateFormat="MMMM yyyy"
    showMonthYearPicker
    className='border text-sm p-2 rounded'
    />

   </div>
             {monthlyData.length > 0 ? (
                 <Line data={chartData} options={{ responsive: true }} />
             ) : (
                <div>Loading...</div>
             )}         </div>
    );
};

export default MonthlySalesGraph;
