// import React ,{useState,useEffect} from "react";
// import { getCategories } from "../functions/category";
// import axios from 'axios'
// import BASE_URL from '../config';
// import {Swiper,SwiperSlide} from 'swiper/react'
// import { Navigation, Pagination } from 'swiper';
// import 'swiper/css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';







// const FeaturedCategory=()=>{

//     const [categories,setCategories]=useState([]);
//     const [selectedCategory,setSelectedCategory]=useState(null);
//     const [products,setProducts]=useState([]);


//     useEffect(()=>{

//         getCategories()
//         .then(response=>{
//             console.log('responsse',response)
//                 setCategories(response);
//         })
//         .catch(error => {
//             console.error('Error fetching categories:', error);
           
//         });



//     },[]);


//     const fetchProducts=async(categoryId)=>{
//         try{

//             const {data}=await axios.get(`${BASE_URL}/api/products/${categoryId}`);
//             console.log('data',data)
//             setProducts(data);

//         }catch(error){
//              console.error('Error fetching products',error);
//         }
//     }

//     const handleCategoryClick=(category)=>{
//         setSelectedCategory(category);
//         fetchProducts(category._id);
//     }


    

//     return (
//         <div className="container mx-auto  mt-20">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md :grid-cols-4 lg:grid-cols-5 gap-2 place-items-center">
//                {categories.map((category)=>(
//                 <button
//                 key={category._id}
//                 onClick={() => handleCategoryClick(category)}
//                 className={`py-2 px-3 flex items-center justify-center  text-center rounded ${
//                     selectedCategory?._id === category._id
//                       ? ' text-black'
//                       : 'bg-white font-thin'
//                   }`}
                
//                 >
//                     {category.name}

//                 </button>
//                ))}
//             </div>

//             {selectedCategory &&(

//                 <Swiper
//                 modules={[Navigation, Pagination]}
//   navigation
//   pagination={{ clickable: true }}

//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                     640: { slidesPerView: 2 },
//                     768: { slidesPerView: 3 },
//                     1024: { slidesPerView: 4 },
//                 }}
//                 >

//                     {products.length >0 ? (
//                         products.map((product)=>(
//                             <SwiperSlide key={product._id}>
//                                 <div className="w-full  flex flex-col">
//                                     <img
//                                     src={product.images[0]?.url}
//                                     alt={product.name}
//                                     className="w-full  object-cover mb-2"
//                                     />
//                                     <h3 className="text-lg font-medium">{product.name}</h3>
//                                     <p className="text-sm text-gray-600">${product.price}</p>

//                                 </div>
                               
//                             </SwiperSlide>
//                         ))

//                     ):(
//                         <p className="text-gray-600 mt-4">No products available in this category.</p>
//                     )
//     }


//                 </Swiper>
//                 // <div className=" flex gap-4 mt-4 ">
//                 //     {products.length >0 ?(
//                 //          products.map((product)=>(
//                 //             <div key={product._id}
//                 //             className="min-w-[200px] border rounded-lg p-4 flex-shrink-0 lg:grid-cols-3"
//                 //              //className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8"
//                 //             >
//                 //                 <img
//                 //                 src={product.image}
//                 //                  className="w-full h-32 object-cover mb-2"
                                
//                 //                 />
//                 //                 <h3>{product.title}</h3>

//                 //             </div>
//                         //  ))
//             //         ):(
//             //             <p>No products available in this category</p>

//             //         )}

//             //         </div>
//              )}

//         </div>
//     )



// }


// export default FeaturedCategory

// import React, { useState, useEffect } from "react";
// import { getCategories } from "../functions/category";
// import axios from "axios";
// import BASE_URL from "../config";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const FeaturedCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);

//   // Fetch categories on component load
//   useEffect(() => {
//     getCategories()
//       .then((response) => {
//         setCategories(response);
//         if (response.length > 0) {
//           setSelectedCategory(response[0]);
//           fetchProducts(response[0]._id);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   // Fetch products for a selected category
//   const fetchProducts = async (categoryId) => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/api/products/${categoryId}`);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Handle category click and fetch respective products
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     fetchProducts(category._id);
//   };

//   return (
//     <div className="container mx-auto mt-20 ">
//       {/* Categories Grid */}
//       <div 
//       className=" flex flex-wrap    justify-center items-center gap-4 space-x-4 mb-20"
      
//       >
//         {categories.map((category) => (
//           <button
//             key={category._id}
//             onClick={() => handleCategoryClick(category)}
//             className={`py-2 px-4 text-center rounded-md transition-all ${
//               selectedCategory?._id === category._id
//                 ? " font-bold font-sans"
//                 : "bg-white font-sans italic text-gray-700 font-normal font-sans"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Product Carousel */}
//       {selectedCategory && (
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
           

//              640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {products.length > 0 ? (
//             products.map((product) => (
//               <SwiperSlide key={product._id}>
//                 <div className="hidden lg:w-full lg:flex flex-col items-center  h-[400px]">
//                   <img
//                     src={product.images[0]?.url}
//                     alt={product.name}
//                     className="w-full h-[320px]  object-cover mb-2 "
//                   />
//                   <h3 className="text-xs font-medium font-sans">{product.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2">${product.price}</p>
//                 </div>
//               </SwiperSlide>
//             ))
//           ) : (
//             <p className="text-gray-600 mt-4">No products available in this category.</p>
//           )}
//         </Swiper>
//       )}
//     </div>
//   );
// };

// export default FeaturedCategory;


// import React, { useState, useEffect } from "react";
// import { getCategories } from "../functions/category";
// import axios from "axios";
// import BASE_URL from "../config";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination,Autoplay} from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Link } from "react-router-dom";

// const FeaturedCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);

//   // Fetch categories and filter out empty ones
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getCategories();
//         const categoryList = [];
//         for (const category of response) {
//           const { data } = await axios.get(`${BASE_URL}/api/products/${category._id}`);
//           if (data.length > 0) {
//             categoryList.push({ ...category, products: data });
//           }
//         }
//         setCategories(categoryList);
//         if (categoryList.length > 0) {
//           setSelectedCategory(categoryList[0]);
//           setProducts(categoryList[0].products);
//         }
//       } catch (error) {
//         console.error("Error fetching categories or products:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Handle category click and set respective products
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setProducts(category.products);
//   };

//   return (
//     <div className="container mx-auto mt-20">
//       {/* Categories Grid */}
//       <div className="flex flex-wrap justify-center items-center gap-4 space-x-4 mb-20 hidden lg:flex">
//         {categories.map((category) => (
//           <button
//             key={category._id}
//             onClick={() => handleCategoryClick(category)}
//             className={`py-2 px-4 text-center rounded-md transition-all ${
//               selectedCategory?._id === category._id
//                 ? "font-bold font-sans"
//                 : "bg-white font-sans italic text-gray-700 font-normal"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Product Carousel */}
//       {selectedCategory && products.length > 0 && (
//         <Swiper
//           modules={[Navigation, Pagination,Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{delay:2000,disableOnInteraction:false}}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product._id}>
//                <Link to={`/products/${product._id}`}> 
//               <div className="hidden lg:w-full lg:flex flex-col items-center h-[400px]">

               
//                 <img
//                   src={product.images[0]?.url}
//                   alt={product.name}
//                   className="w-full h-[320px] object-cover mb-2"
//                 />

//                 {/* Hover Overlay */}

//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200" >
//                      Add to Cart
//                   </button>
//                   <button
//                   className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200"
//                   >
//                     View Details

//                   </button>
//                 </div>
//                 <h3 className="text-xs font-medium font-sans">{product.title}</h3>
//                 <p className="text-sm text-gray-600 mb-2">${product.price}</p>
               
//               </div>
//               </Link> 
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// };

// export default FeaturedCategory;


// import React, { useState, useEffect } from "react";
// import { getCategories } from "../functions/category";
// import axios from "axios";
// import BASE_URL from "../config";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Link } from "react-router-dom";
// import { ZoomIn } from '@mui/icons-material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ProductQuickView from "./ProductQuickView";

// const FeaturedCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [isModalOpen,setIsModalOpen]=useState(false)
//   const [selectedProduct,setSelectedProduct]=useState(null)



//   const handleQuickView=(product)=>{
//     setSelectedProduct(product)
//     setIsModalOpen(true)
//    }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getCategories();
//         const categoryList = [];
//         for (const category of response) {
//           const { data } = await axios.get(`${BASE_URL}/api/products/${category._id}`);
//           if (data.length > 0) {
//             categoryList.push({ ...category, products: data });
//           }
//         }
//         setCategories(categoryList);
//         if (categoryList.length > 0) {
//           setSelectedCategory(categoryList[0]);
//           setProducts(categoryList[0].products);
//         }
//       } catch (error) {
//         console.error("Error fetching categories or products:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setProducts(category.products);
//   };

//   return (
//     <div className="container mx-auto mt-20">
//       {/* Categories Grid */}
//       <div className="flex flex-wrap justify-center items-center gap-4 space-x-4 mb-20 hidden lg:flex">
//         {categories.map((category) => (
//           <button
//             key={category._id}
//             onClick={() => handleCategoryClick(category)}
//             className={`py-2 px-4 text-center rounded-md transition-all ${
//               selectedCategory?._id === category._id
//                 ? "font-bold font-sans"
//                 : "bg-white font-sans italic text-gray-700 font-normal"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Product Carousel */}
//       {selectedCategory && products.length > 0 && (
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {products.map((product) => (
//             <SwiperSlide key={product._id}>
//               <Link to={`/products/${product._id}`}>
//                 <div className="hidden lg:w-full lg:flex flex-col items-center h-[400px] group">
//                   {/* Product Image */}
                  
//                   <img
//                     src={product.images[0]?.url}
//                     alt={product.name}
//                     className="w-full h-[320px] object-cover mb-2"
//                   />
                  
                 

//                   {/* Hover Overlay */}
//                   <div className="absolute h-[320px] inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button 
//                     className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200"
//                     onClick={(event)=>{
//                       event.stopPropagation();
//                     }}
//                     >
//                      <FavoriteBorderIcon/>
//                     </button>
//                     <button className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200" 
//                     onClick={(product)=>
//                     {
//                       event.stopPropagation();
//                       handleQuickView()

//                     }
//                    }>
//                       <ZoomIn/>
//                     </button>
//                   </div>

//                   {/* Product Info */}
                 
//                   <h3 className="text-xs font-medium font-sans">{product.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2">${product.price}</p>
//                 </div>

                
//               </Link>
//             </SwiperSlide>
//           ))}
          
//         </Swiper>
//       )}
//       {isModalOpen && selectedProduct &&(
//                                      <ProductQuickView isOpen={isModalOpen} classNames={classNames} product={selectedProduct} onClose={closeModal}/>
//                                    )
//                                    }
      
//     </div>
//   );
// };

// export default FeaturedCategory;


import React, { useState, useEffect, useRef } from "react";
import { getCategories } from "../functions/category";
import axios from "axios";
import BASE_URL from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { ZoomIn } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductQuickView from "./ProductQuickView";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
  const swiperRef=useRef(null);



  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal=()=>{
    setIsModalOpen(false)
    setSelectedProduct(null)
   }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories();
        const categoryList = [];
        for (const category of response) {
          const { data } = await axios.get(
            `${BASE_URL}/api/products/${category._id}`
          );
          if (data.length > 0) {
            categoryList.push({ ...category, products: data });
          }
        }
        setCategories(categoryList);
        if (categoryList.length > 0) {
          setSelectedCategory(categoryList[0]);
          setProducts(categoryList[0].products);
        }
      } catch (error) {
        console.error("Error fetching categories or products:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setProducts(category.products);
  };

  const handleProductClick = (event, productId) => {
    if (!event.defaultPrevented) {
      navigate(`/products/${productId}`);
    }
  };

  const stopAutoplay=()=>swiperRef.current?.swiper?.autoplay?.stop();
  const startAutoplay=()=>swiperRef.current?.swiper?.autoplay?.start();



  return (
    <div className="container mx-auto mt-20">
      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center items-center gap-4 space-x-4 mb-20 hidden lg:flex">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 px-4 text-center rounded-md transition-all ${
              selectedCategory?._id === category._id
                ? "font-bold font-sans"
                : "bg-white font-sans italic text-gray-700 font-normal"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Carousel */}
      {selectedCategory && products.length > 0 && (
        <Swiper

        ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <div
                onClick={(e) => handleProductClick(e, product._id)}
                className="hidden lg:w-full lg:flex flex-col items-center h-[400px] group relative cursor-pointer"
              >
                {/* Product Image */}
                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="w-full h-[320px] object-cover mb-2"
                />

                {/* Hover Overlay */}
                <div className="absolute h-[320px] inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200"
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                    onClick={(event) => {
                      event.stopPropagation();
                      // Handle favorite logic if needed
                    }}
                  >
                    <FavoriteBorderIcon />
                  </button>
                  <button
                    className="bg-white text-black py-1 px-4 mx-2 rounded-md hover:bg-gray-200"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleQuickView(product);
                    }}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                  >
                    <ZoomIn />
                  </button>
                </div>

                {/* Product Info */}
                <h3 className="text-xs font-medium font-sans">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">${product.price}</p>
              </div>
            </SwiperSlide>
          ))}
          {isModalOpen && selectedProduct &&(
                                     <ProductQuickView isOpen={isModalOpen} classNames={classNames} product={selectedProduct} onClose={closeModal}/>
                                   )
                                   }
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedCategory;
