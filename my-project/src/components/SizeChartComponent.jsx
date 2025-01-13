// import React, {useState} from 'react';

// const SizeChartComponent=({sizeChart})=>{

//     const [showSizeChart,setShowSizeChart]=useState(false);

//     const toggleSizeChart=()=>{
//         setShowSizeChart(!showSizeChart);
//     };


//     return(
//         <div className='relative'>
//             <button 
//             onClick={toggleSizeChart}
//            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
//             >

//                 {showSizeChart ? 'Hide Size Chart' : "Show Size Chart"}

//                 </button>

//                 <div
//                 className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
//                     showSizeChart ? 'translate-x-0' : 'translate-x-full'
//                 }transition-transform duration-300 ease-in-out z-50 overflow-auto p-6`}
//                 >

//                     <h3 className='text-xl font-bold mb-4'>Size Chart</h3>
//                     <table className='table-auto w-full text-left border-collapse bg-gray-100 rounded-md shadow-lg'>
//                     <thead className='bg-gray-200'>
//                         <tr className='border-b border-gray-300'>
//                             {sizeChart.columns.map((col,index)=>(
//                                 <th key={index} className='px-4 py-3 text-gray-700 font-semibold'>
//                                     {col}
//                                 </th>
//                             ))}

//                         </tr>

//                     </thead>
//                     <tbody>
//                         {sizeChart.rows.map((row,rowIndex)=>(
//                             <tr key={rowIndex } className='hover:bg-gray-50 border-b border-gray-200'>
//                                 {sizeChart.columns.map((col,colIndex)=>(
//                                     <td key={colIndex } className='px-4 py-2 text-gray-600'
//                                     >
//                                         {row[col]}
//                                     </td>
//                                 ))}

//                             </tr>
//                         ))}
//                     </tbody>

//                     </table>

//                     <button
//                     onClick={toggleSizeChart}
//                     className='mt-4 bg-red-500 text-whote px-4 py-3 rounded-md hover:bg-red-600'
//                     >
//                         close
//                     </button>

//                 </div>

//         </div>
//     )

// }

// export default SizeChartComponent;


// import React, { useState } from 'react';

// const SizeChartComponent = ({ sizeChart }) => {
//   const [showSizeChart, setShowSizeChart] = useState(false);

//   const toggleSizeChart = () => {
//     setShowSizeChart(!showSizeChart);
//   };

//   //const hasSizeChart=sizeChart && sizeChart.columns?.length> 0 && sizeChart.rows?.length>0;

//   return (
//     <div className="relative">
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSizeChart}
//         className=" bg-white font-sans italic text-gray-700 font-normal pt-4 hover: transition"
//       >
//         {showSizeChart ? 'Hide Size Chart ' : 'Show Size Chart '}
//       </button>

//       {/* Size Chart Slide-Out */}
//       <div
//         className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
//           showSizeChart ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out z-50 overflow-auto p-6`}
//       >
//         <h3 className="text-xl font-bold mb-4">Size Chart</h3>
//         <table className="table-auto w-full text-left border-collapse bg-gray-100 rounded-md shadow-lg">
//           <thead className="bg-gray-200">
//             <tr className="border-b border-gray-300">
//               {sizeChart.columns.map((col, index) => (
//                 <th key={index} className="px-4 py-3 text-gray-700 font-semibold">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {sizeChart.rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50 border-b border-gray-200">
//                 {sizeChart.columns.map((col, colIndex) => (
//                   <td key={colIndex} className="px-4 py-2 text-gray-600">
//                     {row[col]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Close Button */}
//         <button
//           onClick={toggleSizeChart}
//           className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-red-600"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SizeChartComponent;


// import React, { useState } from 'react';

// const SizeChartComponent = ({ sizeChart }) => {
//   const [showSizeChart, setShowSizeChart] = useState(false);

//   const toggleSizeChart = () => {
//     setShowSizeChart(!showSizeChart);
//   };

//   // Check if sizeChart is valid and contains rows and columns
//   const hasSizeChart = sizeChart && sizeChart.columns?.length > 0 && sizeChart.rows?.length > 0;

//   return (
//     <div className="relative">
//       {/* Render button only if size chart is available */}
//       {hasSizeChart && (
//         <>
//           <button
//             onClick={toggleSizeChart}
//             // className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
//             className='bg-white font-sans italic text-gray-700 font-normal pt-4 hover: transition'
//           >
//             {showSizeChart ? 'Hide Size Chart' : 'Show Size Chart'}
//           </button>

//           {/* Size Chart Slide-Out */}
//           <div
//             className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
//               showSizeChart ? 'translate-x-0' : 'translate-x-full'
//             } transition-transform duration-300 ease-in-out z-50 overflow-auto p-6`}
//           >
//             <h3 className="text-xl font-bold mb-4">Size Chart</h3>
//             <table className="table-auto w-full text-left border-collapse bg-gray-100 rounded-md shadow-lg">
//               <thead className="bg-gray-200">
//                 <tr className="border-b border-gray-300">
//                   {sizeChart.columns.map((col, index) => (
//                     <th key={index} className="px-4 py-3 text-gray-700 font-semibold">
//                       {col}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {sizeChart.rows.map((row, rowIndex) => (
//                   <tr key={rowIndex} className="hover:bg-gray-50 border-b border-gray-200">
//                     {sizeChart.columns.map((col, colIndex) => (
//                       <td key={colIndex} className="px-4 py-2 text-gray-600">
//                         {row[col]}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Close Button */}
//             <button
//               onClick={toggleSizeChart}
//               className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-black-600"
//             >
//               Close
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SizeChartComponent;



import React, { useState } from 'react';

const SizeChartComponent = ({ sizeChart }) => {
  const [showSizeChart, setShowSizeChart] = useState(false);

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  // Check if sizeChart is valid and contains rows and columns
  const hasSizeChart = sizeChart && sizeChart.columns?.length > 0 && sizeChart.rows?.length > 0;

  return (
    <div className="relative">
      {/* Render button only if size chart is available */}
      {hasSizeChart && (
        <>
          <button
            onClick={toggleSizeChart}
            // className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
             className='bg-white font-sans italic text-gray-700 font-normal pt-4 hover: transition'
          >
            {showSizeChart ? 'Hide Size Chart' : 'Show Size Chart'}
          </button>

          {/* Collapsible Size Chart */}
          <div
            className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
              showSizeChart ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white shadow-lg rounded-md p-4">
              {/* <h3 className="text-xl font-bold mb-4">Size Chart</h3> */}
              <table className="table-auto w-full text-left border-collapse bg-gray-100 rounded-md shadow-lg">
                <thead className="bg-gray-200">
                  <tr className="border-b border-gray-300">
                    {sizeChart.columns.map((col, index) => (
                      <th key={index} className="px-4 py-3 text-gray-700 font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 border-b border-gray-200">
                      {sizeChart.columns.map((col, colIndex) => (
                        <td key={colIndex} className="px-4 py-2 text-gray-600">
                          {row[col]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SizeChartComponent;
