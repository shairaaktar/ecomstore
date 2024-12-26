// import React,{useEffect,useState} from "react";
// import { Pie } from "react-chartjs-2";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


// ChartJS.register(ArcElement, Tooltip, Legend);


// const SalesByPie=()=>{

//     const [salesData,setSalesData]=useState([])

//     const [selectedMonth,setSelectedMonth]=useState(new Date())
//     const user=useSelector((state)=>state.userState)
//     const {token,email}=user;

//     console.log('user',token)

//     useEffect(()=>{
//         fetchSalesData();

//     },[selectedMonth,token])


//     const fetchSalesData=async()=>{
//         try{

//             const month=selectedMonth.toISOString().slice(0,7);
//             const response = await axios.post(
//                 `http://localhost:8001/api/sales-by-category?month=${month}`,
//                 {email,token},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         authtoken:token,
//                     },
//                 }
//             );
//             setSalesData(response.data);
//             console.log('response',response)



//         }catch(error){
//             console.error("Error fetching sales data:", error);
//         }
//     }

//     const chartData={
//         lables:salesData.map((item)=>item.category ||"unknown"),
//         datasets:[
//             {
//                 data: salesData.map((item) => item.totalSales),
//                 backgroundColor: [
//                     "rgba(75, 192, 192, 0.6)",
//                     "rgba(255, 99, 132, 0.6)",
//                     "rgba(54, 162, 235, 0.6)",
//                     "rgba(255, 206, 86, 0.6)",
//                     "rgba(153, 102, 255, 0.6)",
//                 ],
//                 borderColor: [
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(153, 102, 255, 1)",
//                 ],
//                 borderWidth: 1,

//             }
//         ]
//     };

//     const chartOptions={
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "bottom",
//             },
//             tooltip: {
//                 callbacks: {
//                     label: function (tooltipItem) {
//                         const value = tooltipItem.raw;
//                         return `$${value.toFixed(2)} in Sales`;
//                     },
//                 },
//             },
//         },
//     }

//     return(

//         <div className="p-4 max-w-sm mx-auto">
//             <h2 className="text-center text-xl font-semibold mb-4">Sales by Category (Monthly)</h2>
//             <div className="mb-4 flex justify-center">
//                 <DatePicker
//                     selected={selectedMonth}
//                     onChange={(date) => setSelectedMonth(date)}
//                     dateFormat="MMMM yyyy"
//                     showMonthYearPicker
//                     className="border p-2 rounded"
//                 />
//             </div>
//             {salesData.length > 0 ? (
//                 <Pie data={chartData} options={chartOptions} width={300} height={300} />
//             ) : (
//                 <p>Loading chart...</p>
//             )}
//         </div>

//     )

// }

// export default SalesByPie

// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
// import ChartDataLabels from "chartjs-plugin-datalabels";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register necessary chart.js elements
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const SalesByPie = () => {
//   const [salesData, setSalesData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(new Date());
//   const user = useSelector((state) => state.userState);
//   const { token, email } = user;

//   useEffect(() => {
//     fetchSalesData();
//   }, [selectedMonth, token]);

//   const fetchSalesData = async () => {
//     try {
//       const month = selectedMonth.toISOString().slice(0, 7);
//       const response = await axios.post(
//         `http://localhost:8001/api/sales-by-category?month=${month}`,
//         { email, token },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             authtoken: token,
//           },
//         }
//       );
//       setSalesData(response.data);
//     } catch (error) {
//       console.error("Error fetching sales data:", error);
//     }
//   };

//   const chartData = {
//     labels: salesData.map((item) => item.category || "unknown"),
//     datasets: [
//       {
//         data: salesData.map((item) => item.totalSales),
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.6)",
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//           "rgba(255, 206, 86, 0.6)",
//           "rgba(153, 102, 255, 0.6)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(153, 102, 255, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             const value = tooltipItem.raw;
//             return `${tooltipItem.label}: $${value.toFixed(2)} in Sales`;
//           },
//         },
//       },
//       datalabels: {
//         formatter: (value, ctx) => {
//           let percentage = (value / ctx.dataset._meta[Object.keys(ctx.dataset._meta)[0]].total) * 100;
//           return `${ctx.chart.data.labels[ctx.dataIndex]}: ${percentage.toFixed(2)}%`;
//         },
//         color: '#fff',
//       },
//     },
//   };

//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       <h2 className="text-center text-lg font-semibold mb-4">Sales by Category (Monthly)</h2>
//       <div className="mb-4 flex justify-center">
//         <DatePicker
//           selected={selectedMonth}
//           onChange={(date) => setSelectedMonth(date)}
//           dateFormat="MMMM yyyy"
//           showMonthYearPicker
//           className="border p-2 rounded"
//         />
//       </div>

//       {/* Pie Chart */}
//       {salesData.length > 0 ? (
//         <Pie data={chartData} options={chartOptions} width={300} height={300} />
//       ) : (
//         <p>Loading chart...</p>
//       )}

//       {/* Category List */}
//       <div className="mt-4">
//         <h3 className="text-center text-md font-semibold mb-2">Categories:</h3>
//         <ul className="list-disc pl-5">
//           {salesData.map((item) => (
//             <li key={item.category}>
//               {item.category} - ${item.totalSales.toFixed(2)} in sales
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SalesByPie;


import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { formattedPrice } from "../../utils";
import BASE_URL from "../../config";

// Register chart.js elements and plugin
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SalesByPie = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const user = useSelector((state) => state.userState);
  const { token, email } = user;

  useEffect(() => {
    fetchSalesData();
  }, [selectedMonth, token]);

  const fetchSalesData = async () => {
    try {
      const month = selectedMonth.toISOString().slice(0, 7);
      const response = await axios.post(
        `${BASE_URL}/api/sales-by-category?month=${month}`,
        { email, token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            authtoken: token,
          },
        }
      );
      setSalesData(response.data);
      console.log('response',response)
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  const chartData = {
    labels: salesData.map((item) => item.category || "unknown"),
    datasets: [
      {
        data: salesData.map((item) => item.totalSales),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             const value = tooltipItem.raw;
//             return `${tooltipItem.label}: $${value.toFixed(2)} in Sales`;
//           },
//         },
//       },
//       datalabels: {
//         formatter: (value, ctx) => {
//           let percentage = (value / ctx.dataset._meta[Object.keys(ctx.dataset._meta)[0]].total) * 100;
//           return `${ctx.chart.data.labels[ctx.dataIndex]}: ${percentage.toFixed(2)}%`;
//         },
//         color: "#fff",
//         font: {
//           weight: "bold",
//         },
//       },
//     },
//   };

const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: $${value.toFixed(2)} in Sales`;
          },
        },
      },
      datalabels: {
        
      },
    },
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-center text-sm font-semibold mb-4">Sales by Category (Monthly)</h2>
      <div className="mb-4 flex justify-center">
        <DatePicker
          selected={selectedMonth}
          onChange={(date) => setSelectedMonth(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          className="border text-sm p-2 rounded"
        />
      </div>

      {/* Pie Chart */}
      {salesData.length > 0 ? (
        <Pie data={chartData} options={chartOptions} width={300} height={300} />
      ) : (
        <p>No data found</p>
      )}

      {/* Category List */}
      <div className="mt-4">
        <h3 className="text-center text-sm font-normal mb-2">Categories:</h3>
        <ul className="list-disc pl-5 text-sm">
          {salesData.map((item) => (
            <li key={item.category}>
              {item.category} - {formattedPrice (item.totalSales.toFixed(2))} in sales
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesByPie;
