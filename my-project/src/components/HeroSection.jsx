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
    className='w-500 lg:w-[1213px] lg:h-[500px] flex  '
    >
      
       <div className="w-1/2 h-full  bg-[#6C2E2F] text-white flex items-center justify-center relative">
       

        
        
        <img src={inspo3} alt="Inspiration 3" className="w-full h-full object-cover" />
        <div className="absolute bottom-8 left-8">
          <div >
          <motion.p 
         
          className="max-w-2xl text-2xl  font-bold tracking-tight sm:text-5xl md:text-3xl lg:text-6xl"
           
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
          </div>
          
          <button className="bg-[#171D29]  text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-80 hover:text-gray transition mt-6">
           <Link to={`/products`}> Explore</Link>
            <ArrowForwardOutlinedIcon />
          </button>
        </div>
      
       
      </div>

      {/* bg-[#222514]" */}

<div className="w-1/2 h-full flex">
        {/* Left Half of the Left Section */}
        <div className="flex-1 flex flex-col " >
          {/* Top Part of Left Top */}
          <div className="h-1/2 w-full relative ">
          <motion.div
          className="flex-1 h-1/2 lg:h-full relative sm:h-[30vh]"

initial="hidden"
whileInView="visible"
viewport={{ once: false, amount: 0.5 }}
transition={{ duration: 1 }}
variants={imageVariants}

          >

          <img src={inspo1} alt="Inspiration 1" className="w-full h-full object-cover" />
          </motion.div>
         
           
          
          </div>

          {/* Bottom Part of Left Top */}
          <div className="h-1/2 ">
          <motion.div
          className="flex-1 h-1/2 lg:h-full sm:h-[29.5vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={imageVariants}
        >
          <img src={inspo2} alt="Inspiration 2" className="w-full h-full object-cover" />
          </motion.div>
          </div>
        </div>
         
        {/* bg-[#6C2E2F] */}

        {/* Right Half of the Left Section */}
        <div className="flex-1  ">
        <motion.div
           className="flex-1 h-1/2 lg:h-full sm:h-[59vh] "
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
