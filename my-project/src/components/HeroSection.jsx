// import React from 'react';
// import img7 from '../images/img7.jpg'
// import img8 from '../images/img8.jpg';
// import img9 from '../images/img9.jpg';
// import img10 from '../images/img10.jpg';
// import img11 from '../images/img11.jpg';
// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <div className="container mx-auto ">
       

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         

//           {/* Small Image 1 */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-1">
//             <div
//               className="relative h-48 w-full sm:h-64 lg:h-80 bg-cover bg-center"
//               style={{ backgroundImage: `url(${img11})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div>
//           </div>

//            {/* Large Image 1 */}
//            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//             <div
//               className="relative w-full h-100 sm:h-80 lg:h-96 bg-cover bg-center"
//               style={{ backgroundImage: `url(${img7})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div>
//           </div>

//           {/* Small Image 2 */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-1">
//             <div
//               className="relative w-full h-48 sm:h-64 lg:h-80 bg-cover bg-center"
//               style={{ backgroundImage: `url(${img9})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div>
//           </div>

//           {/* Small Image 3 */}
//           {/* <div className="col-span-1 sm:col-span-1 lg:col-span-1">
//             <div
//               className="relative h-48 sm:h-64 lg:h-80 bg-cover bg-center"
//               style={{ backgroundImage: `url(${img10})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div>
//           </div> */}

//           {/* Large Image 2 */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//             {/* <div
//               className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center"
//               style={{ backgroundImage: `url(${img7})` }} // Reusing img7 as an example
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default HeroSection;

// import React from 'react';
// import inspo1 from '../images/inspo1.jpg'
//  import inspo2 from '../images/inspo2.jpg';
//  import inspo3 from '../images/inspo3.jpg';
//  import inspo4 from '../images/inspo4.jpg';
//  import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
//  import { Link } from 'react-router-dom';
//  import {motion} from 'framer-motion'

// const HeroSection=()=>{
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 },
//   };



//   return(
//     <div 
//     className='w-500 lg:w-[1213px] lg:h-[500px] flex  '
//     >
      
//        <div className="w-1/2 h-full  bg-[#6C2E2F] text-white flex items-center justify-center relative">
       

        
        
//         <img src={inspo3} alt="Inspiration 3" className="w-full h-full object-cover" />
//         <div className="absolute bottom-8 left-8">
//           <div >
//           <motion.p 
         
//           className="max-w-2xl text-2xl  font-bold tracking-tight sm:text-5xl md:text-3xl lg:text-6xl"
           
//             initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 1.5, ease: 'easeOut' }}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           >
//           Explore the latest trends with a collection that fits every style.
//           </motion.p>
//           </div>
          
//           <button className="bg-[#171D29]  text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-80 hover:text-gray transition mt-6">
//            <Link to={`/products`}> Explore</Link>
//             <ArrowForwardOutlinedIcon />
//           </button>
//         </div>
      
       
//       </div>

//       {/* bg-[#222514]" */}

// <div className="w-1/2 h-full flex">
//         {/* Left Half of the Left Section */}
//         <div className="flex-1 flex flex-col " >
//           {/* Top Part of Left Top */}
//           <div className="h-1/2 w-full relative ">
//           <motion.div
//           className="flex-1 h-1/2 lg:h-full relative sm:h-[30vh]"

// initial="hidden"
// whileInView="visible"
// viewport={{ once: false, amount: 0.5 }}
// transition={{ duration: 1 }}
// variants={imageVariants}

//           >

//           <img src={inspo1} alt="Inspiration 1" className="w-full h-full object-cover" />
//           </motion.div>
         
           
          
//           </div>

//           {/* Bottom Part of Left Top */}
//           <div className="h-1/2 ">
//           <motion.div
//           className="flex-1 h-1/2 lg:h-full sm:h-[29.5vh]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 1 }}
//           variants={imageVariants}
//         >
//           <img src={inspo2} alt="Inspiration 2" className="w-full h-full object-cover" />
//           </motion.div>
//           </div>
//         </div>
         
//         {/* bg-[#6C2E2F] */}

//         {/* Right Half of the Left Section */}
//         <div className="flex-1  ">
//         <motion.div
//            className="flex-1 h-1/2 lg:h-full sm:h-[59vh] "
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 1 }}
//           variants={imageVariants}
//         >
//         <img src={inspo4} alt="Inspiration 4" className="w-full h-full object-cover " />
//         </motion.div>
//         </div>
//       </div>

//     </div>
//   )

// }

// export default HeroSection




import React from 'react';
import inspo1 from '../images/inspo1.jpg'
 import inspo2 from '../images/inspo2.jpg';
 import inspo3 from '../images/inspo3.jpg';
 import inspo4 from '../images/inspo4.jpg';
 import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
 import { Link } from 'react-router-dom';
 import {motion} from 'framer-motion'

const HeroSection=()=>{
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };



  return(
    <div 
    // className='w-500 lg:w-[1213px] lg:h-[500px] flex  '
    // className="w-full max-w-[1213px] mx-auto h-[400px]  sm:h-[450px] md:h-[500px]  flex flex-col lg:flex-row"
    className='w-[300px] h-[300px] 
     
      sm:w-[500px] sm:h-[400px] 
      md:w-[800px] md:h-[450px] 
      lg:w-[1213px] lg:h-[500px] 
      
      mx-auto flex  lg:flex-row'
    >

    
      
       <div
        // className="w-1/2 h-full  bg-[#6C2E2F] text-white flex items-center justify-center relative"

        // className="w-full  lg:w-1/2 h-full   relative bg-[#6C2E2F]"
        className="
        w-1/2 h-full 
        lg:w-1/2 
        relative bg-[#6C2E2F]
      "
        >
       

        
        
        <img src={inspo3} alt="Inspiration 3" className="w-full h-full object-cover" />

        <div 
        // className="absolute bottom-8 left-8"
        // className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 p-2"
        className="
        absolute 
        bottom-2 left-2 p-2
        sm:bottom-4 sm:left-4 sm:p-3
        md:bottom-6 md:left-6 md:p-3
        lg:bottom-8 lg:left-8 lg:p-4
      "
        >
          {/* <div > */}
          <motion.p 
         
          // className="max-w-2xl text-2xl  font-bold tracking-tight sm:text-5xl md:text-3xl lg:text-6xl"

            // className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-xl"
            className="
              text-white font-bold tracking-tight
              text-xl max-w-[200px]
              sm:text-xl sm:max-w-[300px]
              md:text-3xl md:max-w-[400px]
              lg:text-5xl lg:max-w-[500px]
              xl:text-6xl xl:max-w-[600px]
            "
            initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          >
          Explore the latest trends with a collection that fits every style.
          </motion.p>
          {/* </div> */}
          
          <button 
          // className="bg-[#171D29]  text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-80 hover:text-gray transition mt-6"
          // className="mt-4 sm:mt-6 bg-[#171D29] text-white px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-80 transition"
          className="
            mt-2 bg-[#171D29] text-white rounded-full shadow-lg 
            hover:opacity-80 transition
            px-3 py-1
            sm:mt-3 sm:px-4 sm:py-1.5
            md:mt-4 md:px-5 md:py-2
            lg:mt-6 lg:px-6 lg:py-2
          "
          >
           <Link to={`/products`}> Explore</Link>
            <ArrowForwardOutlinedIcon />
          </button>
        </div>
      
       
      </div>

      {/* bg-[#222514]" */}

<div
//  className="w-1/2 h-full flex"
// className="w-full lg:w-1/2 h-full flex"
// className="
       
//         w-full h-full 
        
//         lg:w-1/2 
//         flex
//       "
className="
        
       flex
        w-1/2 lg:w-1/2 
        h-full 
      "
 >
        {/* Left Half of the Left Section */}
        <div 
        // className="flex-1 flex flex-col "
        className="flex-1 flex flex-col"
         >
          {/* Top Part of Left Top */}
          {/* <div className="h-1/2 w-full relative "> */}
          <motion.div
          // className="flex-1 h-1/2 lg:h-full relative sm:h-[30vh]"
           className="h-1/2 relative"

initial="hidden"
whileInView="visible"
viewport={{ once: false, amount: 0.5 }}
transition={{ duration: 1 }}
variants={imageVariants}

          >

          <img src={inspo1} alt="Inspiration 1" className="w-full h-full object-cover" />
          </motion.div>
         
           
          
          {/* </div> */}

          {/* Bottom Part of Left Top */}
          {/* <div className="h-1/2 "> */}
          <motion.div
          // className="flex-1 h-1/2 lg:h-full sm:h-[29.5vh]"
           className="h-1/2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={imageVariants}
        >
          <img src={inspo2} alt="Inspiration 2" className="w-full h-full object-cover" />
          </motion.div>
          {/* </div> */}
        </div>
         
        {/* bg-[#6C2E2F] */}

        {/* Right Half of the Left Section */}
        <div className="flex-1  ">
        <motion.div
          //  className="flex-1 h-1/2 lg:h-full sm:h-[59vh] "
              className="h-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={imageVariants}
        >
        <img src={inspo4} alt="Inspiration 4" className="w-full h-full object-cover " />
        </motion.div>
        </div>
      </div>

    </div>
  )

}

export default HeroSection
