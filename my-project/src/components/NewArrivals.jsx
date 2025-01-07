// import React, { useEffect, useState } from 'react'
// import { Link,useParams } from 'react-router-dom';
// import Pagination from './Pagination';
// import SectionTitle from './SectionTitle';
// import { formatPrice } from '../utils';
// import { getProductsCount,getProducts,getGridProducts } from '../functions/products';
// import PaginationContainer from './PaginationContainer';
// import LoadingCard from './LoadingCard';
// import {useSpring,useSprings,animated, config} from '@react-spring/web' 
// import axios from 'axios';
// import { useDispatch,useSelector } from 'react-redux';
// const PRODUCT_PER_PAGE=10;


// const NewArrivals=()=>{
//     const {id}=useParams();
//     const [products,setProducts]=useState([]);
//     const [product,setProduct]=useState(null);
//     const [loading, setLoading] = useState(false);
//     const [amount,setAmount]=useState(1)

//     const [productsCount, setProductsCount] = useState(0);
//     const [page, setPage] = useState(1);
//     const [hasMore,setHasMore]=useState(true);

//     const [tooltip,setTooltip]=useState('click to add')


//     const cart=useSelector((state)=>state.cartState);

//     const dispatch=useDispatch()


//     useEffect(()=>{
//      loadAllProducts()

//     },[page])

//     // useEffect(() => {
//     //     getProductsCount().then((res) => setProductsCount(res.data));
//     // }, []);

//     useEffect(() => {
//         fetchProductsCount();
//     }, []);

//     // const loadAllProducts = () => {
//     //     setLoading(true);
//     //     // sort, order, limit
//     //     getProducts("createdAt", "desc", page).then((res) => {
//     //         setProducts(res.data);
//     //         setLoading(false);
//     //     });
//     // };

//     const loadAllProducts = () => {
//         const sort = "createdAt"; // Example sort criteria
//         const order = "desc"; // Example order
//         //  const page = 1; // Example page number
    
//         setLoading(true);
    
//         getProducts(sort, order, page).then((res) => {

//             console.log('res',res)
//             // setProducts(res.data.products);
//             setProducts(prevProducts => [...prevProducts, ...res.data.products]);
        
//             setLoading(false);
//         }).catch((error) => {
//             console.error("Error loading products:", error);
//             setLoading(false);
//         });
//     };

//     const fetchProductsCount = () => {
//         getProductsCount().then((res) => {
//             console.log('API RESPONSE',res);
//             setProductsCount(res.total);
//             console.log('Products Count', res.total);

//         }).catch((error) => {
//             console.error("Error fetching products count:", error);
//         });
//     };

    

//     // useEffect(()=>{

//     //     const fetchProduct=async()=>{
//     //         try{
//     //             const response=await axios.get(`http://localhost:8001/api/products/${id}`);
//     //             setProduct(response.data);
//     //             console.log('response data--->',response.data);

//     //         }catch(error){

//     //         }
//     //     };
//     //     fetchProduct();
//     // },[id])

//     const handleLoadMore=()=>{
//         setPage(prevPage=>prevPage+1);
//     }

//     const springs=useSprings(
//         products.length,
//         products.map((product,index)=>({
//             from:{opacity:0,transform:'translateY(20px)'},
//             to:{opacity:1,transform:'translateY(0px)'},
//             delay:index*100,
//             // reset:true,
//             // onRest:()=>{
//             //     if(index===products.length-1){
//             //         loadAllProducts()
//             //     }
//             // }

//             config:{tension:200,friction:20}
//         }))
//     );


//     const handleAddToCart=({})=>{
//         let cart=[]

//         if(typeof window !='undefined'){
//             if(localStorage.getItem('cart')){
//                 cart=JSON.parse(localStorage.getItem('cart'))
//             }

//             cart.push({
//                 ...product,
//                 count:1,

//             })
//             let unique=_.uniqWith(cart,_.isEqual)

//             localStorage.setItem('cart',JSON.stringify(unique));

//             setTooltip('Added');

//             dispatch({
//                 type: "ADD_TO_CART",
//                 payload: unique,
//             })
//             //show cart item in side drawer
//             dispatch({
//                 type: "SET_VISIBLE",
//                 payload: true,
//             })


//         }
//     }

//     return(
// //         <>
// //           <div className="pt-24">
// //           <SectionTitle text='New Arrivals'/>
// //           <div className='bg-white'>
// //           <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"'>

// //                 {loading ? (
// //                     <LoadingCard count={3} />
// //                 ) : (
// //                     // <div className="row">

                        
// //                     //     {products.map((product) => (
// //                     //         // <div key={product._id} className="col-md-4">
// //                     //         //     <ProductCard product={product} />
// //                     //         // </div>

// //                     //     ))}
// //                     // </div>

// //                     // <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
// //                     <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8'>
// //             {springs.map((styles,index)=>{
// //                 const product=products[index];
// //                 const {title,price,images,_id,quantity}=product
// //                 const image=images[0]?.url;
// //                 console.log('title,price,images,_id',title,price,images,_id)
// //                 const dollarsAmount=formatPrice(price)
// //                 console.log(dollarsAmount)
                
// //             //     return (
// //             //         <animated.div key={_id} style={styles}>
                      
// //             //                 <Link
// //             //      key={_id} to={`/products/${_id}` }
// //             //     //  className='card
// //             //     // w-full shadow-xl hover:shadow-2xl transition duration-300'
// //             //     class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
// //             //     >
// //             //         <figure className='px-4 pt-4'>
// //             //             {/* <img src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover'/> */}
                        
// //             //             {image && (
// //             //   <img
// //             //     src={image}
// //             //     alt={title}
// //             //     // className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
// //             //     className='h-64 md:h-48 w-full object-cover'
// //             //   />
// //             // )}
// //             //         </figure>
// //             //         <div 
// //             //         // className='card-body items-center text-center'

// //             //         >

// //             //             <h2
// //             //             //  className='card-title capitalize tracking-wider'
// //             //              className="mt-4 text-sm text-gray-700"
// //             //              >
// //             //                 {title}

// //             //             </h2>
// //             //             <p
// //             //             //  className='text'
// //             //             className="mt-1 text-lg font-medium text-gray-900"
// //             //              >
// //             //                 {dollarsAmount}</p>
// //             //             {quantity===0 &&(
// //             //                 <div className='mt-4 flex justify-between'>
// //             //                      <span
// //             //                 //  className="text-red-500 font-bold"
// //             //                 class="text-sm font-medium text-gray-900"
// //             //                  >
// //             //                     Sold Out
// //             //                 </span>
// //             //                     </div>
                           
// //             //             )}
// //             //         </div>

// //             //     </Link>


// //             //         </animated.div>
               
// //             //    )
// //             })}
            

// //         </div>
        
        


// //                 )}

// //                 {/* {
// //                     hasMore &&(
// //                         <div className='flex justify-center mt-8'>
// //                             <button
// //                             onClick={handleLoadMore}
// //                             className='btn btn-primary'
// //                             disabled={loading}
// //                             >
// //                           {loading ? 'Loading...':'Load More'}
// //                             </button>

// //                         </div>
// //                     )

// //                 } */}

// // {products.length < productsCount && (
// //                     <div className="flex justify-center mt-8">
// //                         <button
// //                             className="btn btn-primary"
// //                             onClick={handleLoadMore}
// //                             disabled={loading}
// //                         >
// //                             {loading ? "Loading..." : "Load More"}
// //                         </button>
// //                     </div>
// //                 )}


// //             </div>
// //             {/* <PaginationContainer
// //                         current={page}
// //                         total={productsCount}
// //                         pageSize={PRODUCT_PER_PAGE}
// //                         onChange={(value) => setPage(value)}
// //              /> */}
             
// //              </div>
// //              </div>
             



// //         </>

// < div className='pt-24'>
// <SectionTitle text='New Arrivals'/>
// {loading ?(
//     <LoadingCard count={3}/>

// ):(
    
//         <div className=''>
//                           <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
//         <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
    
//                 {springs.map((styles,index)=>{
//                     const product=products[index];
//                                      const {title,price,images,_id,quantity}=product
//                                     const image=images[0]?.url;
//                                     console.log('title,price,images,_id',title,price,images,_id)
//                                     const dollarsAmount=formatPrice(price)
//                                 console.log(dollarsAmount)

//                     return(
//                         <animated.div key={_id} style={styles}>
                          
//             <div >
//                 <Link
//                  key={_id} to={`/products/${_id}`}
//                  className='group'
                 
//                 >
//                     <div className='relative  w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
//                         <div className='aspect-w-1 aspect-h-1'>
//                         {/* {image && (
//                             <img
//                             src={image}
//                             alt={title}
//                             className='h-full w-full object-cover object-center group-hover:opacity-75'
//                             />
//                         )} */}

// {image ? (
//                                                         <img
//                                                             src={image}
//                                                             alt={title}
//                                                             className="h-80 w-80 object-cover object-center group-hover:opacity-75"
//                                                         />
//                                                     ) : (
//                                                         <div className="h-full w-full flex items-center justify-center bg-gray-200">
//                                                             <span className="text-gray-500">No Image</span>
//                                                         </div>
//                                                     )}
//                                                        {/* {quantity === 0 && (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-black text-center py-2">
//                                                             Sold Out
//                                                         </div>
//                                                     )}  */}
//                                                       {/* {quantity === 0 ? (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             Sold Out
//                                                         </div>
//                                                     ) : (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             Add to Cart
//                                                         </div>
//                                                     )}  */}
//                                                      {/* {quantity === 0 ? (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             Sold Out
//                                                         </div>
//                                                     ) : (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             <span className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out">
//                                                                 Add to Cart
//                                                             </span>
//                                                         </div>
//                                                     )} */}
//                                                      {quantity === 0 ? (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             Sold Out
//                                                         </div>
//                                                     ) : (
//                                                         <div className="absolute bottom-0 left-0 right-0 bg-black  text-white text-center py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition duration-300 ease-in-out">
//                                                             Add to Cart
//                                                         </div>
//                                                     )}
//                                                     </div>

//                     </div>
//                     {/* <button className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                             Add to Cart
//                                                         </button> */}
//                     <h3 className='mt-4 text-sm text-gray-700'>{title}</h3>
//                     <p className='mt-1 text-lg font-medium text-gray-900'>{dollarsAmount}</p>
//                     {/* {quantity===0 &&(
//                              <div className='mt-4 flex justify-between'>
//                                   <span
//                                className="text-red-500 font-bold"
//                              class="text-sm font-medium text-gray-900"
//                               >
//                                  Sold Out
//                             </span>
//                                  </div>
                           
//                          )} */}
//                 </Link>



//                           </div>
//                         </animated.div>
//                     )

//                 })}


//                 </div>
//                 {products.length < productsCount && (
//                      <div className="flex justify-center mt-8">
//                          <button
//                              className="btn btn-primary"
//                              onClick={handleLoadMore}
//                              disabled={loading}
//                          >
//                              {loading ? "Loading..." : "Load More"}
//                          </button>
//                      </div>
//                  )}

// </div>

// </div>
                

           

       
   
// )}



// </div>

//     )



// }
// export default NewArrivals


// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import { getProducts, getProductsCount } from '../functions/products';
// import LoadingCard from './LoadingCard';
// import { useSprings, animated } from '@react-spring/web';
// import { formatPrice } from '../utils';

// const NewArrivals = () => {
//     const { id } = useParams();
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [productsCount, setProductsCount] = useState(0);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         loadAllProducts();
//     }, [page]);

//     useEffect(() => {
//         fetchProductsCount();
//     }, []);

//     const loadAllProducts = () => {
//         const sort = "createdAt"; // Example sort criteria
//         const order = "desc"; // Example order
//         setLoading(true);

//         getProducts(sort, order, page).then((res) => {
//             setProducts(prevProducts => [...prevProducts, ...res.data.products]);
//             setLoading(false);
//         }).catch((error) => {
//             console.error("Error loading products:", error);
//             setLoading(false);
//         });
//     };

//     const fetchProductsCount = () => {
//         getProductsCount().then((res) => {
//             setProductsCount(res.total);
//         }).catch((error) => {
//             console.error("Error fetching products count:", error);
//         });
//     };

//     const handleLoadMore = () => {
//         setPage(prevPage => prevPage + 1);
//     };

//     const springs = useSprings(
//         products.length,
//         products.map((product, index) => ({
//             from: { opacity: 0, transform: 'translateY(20px)' },
//             to: { opacity: 1, transform: 'translateY(0px)' },
//             delay: index * 100,
//             config: { tension: 200, friction: 20 }
//         }))
//     );

//     const addToCart = (product) => {
//         console.log(`Added ${product.title} to cart`);
//         // Your logic for adding to cart goes here
//     };

//     return (
//         <div className='pt-24'>
//             <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
//                 {loading ? (
//                     <LoadingCard count={3} />
//                 ) : (
//                     <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
//                         {springs.map((styles, index) => {
//                             const product = products[index];
//                             const { title, price, images, _id, quantity } = product;
//                             const image = images[0]?.url;
//                             const dollarsAmount = formatPrice(price);

//                             return (
//                                 <animated.div key={_id} style={styles}>
//                                     <div>
//                                         <Link key={_id} to={`/products/${_id}`} className='group'>
//                                             <div className='relative w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
//                                                 {image ? (
//                                                     <img
//                                                         src={image}
//                                                         alt={title}
//                                                         className='h-80 w-80 object-cover object-center group-hover:opacity-75'
//                                                     />
//                                                 ) : (
//                                                     <div className="h-full w-full flex items-center justify-center bg-gray-200">
//                                                         <span className="text-gray-500">No Image</span>
//                                                     </div>
//                                                 )}
//                                                 {quantity === 0 ? (
//                                                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                                                         Sold Out
//                                                     </div>
//                                                 ) : (
//                                                     <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
//                                                         Add to Cart
//                                                     </div>
//                                                 )}
//                                             </div>
//                                             <h3 className='mt-4 text-sm text-gray-700'>{title}</h3>
//                                             <p className='mt-1 text-lg font-medium text-gray-900'>{dollarsAmount}</p>
//                                         </Link>

//                                         {/* Buttons for Add to Cart and View Product */}
//                                         <div className="flex justify-between mt-4">
//                                             <button
//                                                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                                                 onClick={() => addToCart(product)}
//                                                 disabled={quantity === 0}
//                                             >
//                                                 Add to Cart
//                                             </button>
//                                             <Link
//                                                 to={`/products/${_id}`}
//                                                 className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
//                                             >
//                                                 View Product
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </animated.div>
//                             )
//                         })}
//                     </div>
//                 )}
                
//                 {products.length < productsCount && (
//                     <div className="flex justify-center mt-8">
//                         <button
//                             className="btn btn-primary"
//                             onClick={handleLoadMore}
//                             disabled={loading}
//                         >
//                             {loading ? "Loading..." : "Load More"}
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NewArrivals;

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getProducts, getProductsCount } from '../functions/products';
// import LoadingCard from './LoadingCard';
// import { useSprings, animated } from '@react-spring/web';
// import SectionTitle from './SectionTitle';
// import { formattedPrice } from '../utils';
// import { Tooltip } from 'antd';
// import { Products } from '../pages';
// import ReactStars from "react-rating-stars-component"
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import { ZoomIn } from '@mui/icons-material';
// import { selectClasses } from '@mui/material';
// import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../features/cart/cartSlice';
// import ProductQuickView from './ProductQuickView';
// import BASE_URL from '../config';



// const NewArrivals = () => {
//     const { id } = useParams();
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [productsCount, setProductsCount] = useState(0);
//     const [page, setPage] = useState(1);
//     const [tooltip, setTooltip] = useState('click to add');
//     const [showDiscount,setShowDiscount]=useState(false)
//     const [isModalOpen,setIsModalOpen]=useState(false)
//     const [selectedProduct,setSelectedProduct] =useState(null);
//     const [wishlist,setWishlist]=useState([])

//     const user=useSelector((state)=>state.userState);
//   const userId=user.id
//   const {email,token}=user

//   const dispatch=useDispatch();

//     useEffect(() => {
//         loadAllProducts();
//     }, [page]);

//     useEffect(() => {
//         fetchProductsCount();
//     }, []);

    
    
    
//     // useEffect(()=>{
//     //      fetchUserWishList()

//     //  },[userId,token,email])

//     const loadAllProducts = () => {
//         const sort = "createdAt"; // Example sort criteria
//         const order = "desc"; // Example order
//         setLoading(true);

//         getProducts(sort, order, page).then((res) => {
//             // setProducts(prevProducts => [...prevProducts, ...res.data.products]);

//             setProducts(prevProducts=>{
//                 const newProducts=res.data.products.filter(
//                     (newProduct)=>!prevProducts.some((prevProduct)=>prevProduct._id===newProduct._id)
//                 );
//                 return [...prevProducts,...newProducts];
//             })


                

            
                
    
              

//             console.log('response.data',res.data)

//             setLoading(false);
//         }).catch((error) => {
//             console.error("Error loading products:", error);
//             setLoading(false);
//         });
//     };

//     const fetchProductsCount = () => {
//         getProductsCount().then((res) => {
//             setProductsCount(res.total);
//         }).catch((error) => {
//             console.error("Error fetching products count:", error);
//         });
//     };

//     const handleLoadMore = () => {
//         setPage(prevPage => prevPage + 1);
//     };

//     const springs = useSprings(
//         products.length,
//         products.map((product, index) => ({
//             from: { opacity: 0, transform: 'translateY(20px)' },
//             to: { opacity: 1, transform: 'translateY(0px)' },
//             delay: index * 100,
//             config: { tension: 200, friction: 20 }
//         }))
//     );

//     const handleaddToCart = (product) => {
//         console.log('Added to cart')
//     };

//     console.log('Products',products)


   

//     const getDisplayedPrice = (product) => {
//         const currentDate = new Date();
//         const discountStartDate = product.discountStartDate ? new Date(product.discountStartDate) : null;
//         const discountEndDate = product.discountEndDate ? new Date(product.discountEndDate) : null;

//         // Check if the product is in the discount period
//         const isDiscountActive = discountStartDate && discountEndDate &&
//             currentDate >= discountStartDate && currentDate <= discountEndDate;

//         const displayedPrice = isDiscountActive && product.discountPrice
//             ? formattedPrice(product.discountPrice)
//             : formattedPrice(product.price);

//         const discountPercentage = isDiscountActive && product.discountPercentage
//             ? product.discountPercentage
//             : null;

//         return { displayedPrice, discountPercentage };
//     };

//     const ImageCarousel=({images})=>{
//         const [currentImageIndex,setCurrentImageIndex]=useState(0);
//         const [isHovered,setIsHovered]=useState(false);

//         useEffect(()=>{
//             let intervalId;

//             if(isHovered && images.length>1){
//                 intervalId=setInterval(()=>{
//                     setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length)

//                 },2000)
//             }else{
//                 setCurrentImageIndex(0)
//             }
//             return()=>clearInterval(intervalId);
//         },[isHovered,images.length]);

//         return(
//             <div 
//             // className='relative w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'
//             className="relative w-full h-80  "
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//             >
//                 {images.length>0 ?(
//                      <img
//                      src={images[currentImageIndex]?.url}
//                      alt={`Product Image ${currentImageIndex + 1}`}
//                     //  className="h-full w-full object-cover object-center group-hover:opacity-"
//                     className='absolute w-full h-80 object-cover  transition-opacity  duration-1000 ease-in-out  group-hover:opacity-80 group-hover:border border-grey'
//                  />

//                 ):(
//                     <div className="h-full w-full flex items-center justify-center bg-gray-200">
//                     <span className="text-gray-500">No Image</span>
//                 </div>
//                 )}
//             </div>
//         )
//     }

//    const handleModalToggle=()=>{
//     setIsModalOpen(!isModalOpen);
//    }
//    const handleQuickView=(product)=>{
//     setSelectedProduct(product)
//     setIsModalOpen(true)
//    }

//    const closeModal=()=>{
//     setIsModalOpen(false)
//     setSelectedProduct(null)
//    }

//    function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }

  






// //   },[userId,email,token])

// useEffect(() => {
   

//     const fetchUserWishList = async () => {
//         try {
//           const response = await axios.post(`${BASE_URL}/api/wishlist/${userId}`, { email }, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               authtoken: token,
//             },
//           });
      
//           console.log('Wishlist Response:', response.data);
      
//           const products = response.data?.wishlist?.products || [];
//           setWishlist(products.map(product => product._id)); // Store only product IDs for comparison
//         } catch (error) {
//           console.error('Error fetching wishlist:', error);
//         }
//       };
      

//     if (token && email) {
//         fetchUserWishList();
//       }
   
//   }, [userId, email, token]);

  

//   const handleAddToWishList= async(product)=>{

   
    
//     console.log('product',product)
//      const productId=product._id;
//      console.log('productId',productId)
    
//     try{

//         if(!wishlist.includes(productId)){
//         const response=await addToWishList(userId,productId);
//         console.log('response',response)

//         toast.success(response.data.message || 'Product added to wishlist!');
//         setWishlist([...wishlist,productId])
//         }else{
//             await axios.delete(
//                  `${BASE_URL}/api/${userId}/${productId}`,
//                  {
//                     data:{userId,productId},
//                     headers:{
//                         Authorization:`Bearer ${token}`,
//                         authtoken:token,
//                     }
//                  }
//             );

//             toast.success('Product removed from wishlist!');
//             setWishlist(wishlist.filter((id)=>id !==productId))


//         }

//     }catch(error){
//         // const errorMsg =
//         //     error.response?.data?.message || 'Failed to add product to wishlist';
//         // toast.error(errorMsg);

//         console.log('error',error)

//     }
// }

// const addToWishList=async(userId,productId)=>{

//     console.log('userId ,productId',userId,productId)
//     if (!token) {
//         throw new Error('User not authenticated!');
//     }
//     if (!email) {
//         throw new Error('User email is required!');
//     }

//     const WishProduct={
//         userId:userId,
//         productId:productId,
//     }

//     try {
//         const response = await axios.post(
//             `${BASE_URL}/api/wishlist`,
//             {
//                 email, 
//                WishProduct
//             },
//             {
//                 headers: {
//                     Authorization:token,
//                     authtoken: token,
//                 },
//             }
//         );
//         return response;
//     } catch (error) {
//         throw error; // Rethrow to handle in the calling function
//     }

// }




   

//     return (
//         <div className='pt-10'>
//             <h1 className='text-center'>
//             <SectionTitle text='New Arrivals'/>
//             </h1>
//             <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
//                 {loading ? (
//                     <LoadingCard count={3} />
//                 ) : (
//                     <div 
//                     // className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
//                     className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6"
//                     >
//                         {springs.map((styles, index) => {
//                             const product = products[index];
//                             const { title, price, images, _id, quantity,discountStartDate,discountEndDate,averageRating } = product;
                           
//                             const {displayedPrice,discountPercentage}=getDisplayedPrice(product)

//                             console.log('displayedPrice,discountPercentage',displayedPrice,discountPercentage)

//                             const image = images[0]?.url;
//                             // const dollarsAmount = formatPrice(price);
//                             const Price=formattedPrice(price)

                           
                           


//                             return (
//                                 <animated.div key={_id} style={styles}
//                                  className="w-full sm:w-56 md:w-64 lg:w-72"
                                
//                                 >
//                                     <div>
//                                         <>
//                                         <div 
//                                              className=' relative w-60 overflow-hidden bg-gray-200  xl:aspect-h-8 xl:aspect-w-7 group'
                                           
//                                             >
//                                         <Link key={_id} to={`/products/${_id}`} >
                                           
                                               

//                                                 <ImageCarousel images={images}/>

                                                

//                  {discountPercentage ? (
//                           <div
//                            className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded"
//                                     >
//                                   -{discountPercentage}%
//                            </div>
//                              ) : (
//                               quantity === 0 ? (
//                                         <div 

//                         className="absolute top-2 left-2   text-white text-sm font-bold px-2 py-1 rounded "
//                         style={{ backgroundColor: 'oklch(76.66% 0.135 135 / 1)' }}
                       
//                            >
//                                      Sold Out
//                                </div>
//                                    ) : null
//                                               )}

                                
// </Link>
                                
//                                     <div className=' absolute bottom-2 right-2 mb-2 flex items-center justify-center opacity-0 group-hover:opacity-85 transition-opacity duration-300'>
//                                         <div className='space-x-4 bg-gray-800 rounded'>
//                                             <ul>
                                             
//                                             <li>
//                                             <button
//                                              className=" text-white py-2 px-4 rounded hover:bg-gray-600" 
//                                              onClick={()=>handleAddToWishList(product)}
//                                              data-tooltip-id={`wishlist-tooltip-${_id}`}
//                                               >
//                                            {wishlist.includes(_id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
//                                             </button>
//                                             <Tooltip
//                                             id={`wishlist-tooltip-${_id}`}
//                                             place="top"
//                                             effect="solid"
//                                             content={wishlist.includes(_id) ? 'Added to Wishlist' : 'Add to Wishlist'}
//                                             />
//                                             </li>
//                                             <li>
//                                             <button className=" text-white py-2 px-4 rounded hover:bg-gray-600 hover:shadow-lg transition-all" onClick={()=>handleQuickView(product)} >
//                                                <ZoomIn/>
//                                             </button>
//                                             </li>
//                                             </ul>

//                                         </div>

//                                     </div>
                                    
                                 
                                    
 
//                                             </div>
//                                             <Link key={_id} to={`/products/${_id}`} className='group'>
                                            
//                                              <h3 className='mt-4 text-sm '>{title}</h3>
//                                              {averageRating >0 &&(
//                                                 <div>
//                                                     <ReactStars
//                                                     count={5}
//                                                     value={averageRating}
//                                                     edit={false}
//                                                     size={24}
//                                                     color2={'#ffd700'} 
//                                                     color1={'#e4e5e9'}

//                                                     />
//                                                 </div>
                                                
//                                              )}
                                            

// <p className="mt-0 text-xl">
//                {Price !==displayedPrice ?(
//                  <p><span className="line-through">{Price}</span>{displayedPrice} </p>

//                ):(<span>{Price}</span>)}
                  

//                 </p>


//                                         </Link>

                                       
                                       
//                                         </>
//                                     </div>
//                                 </animated.div>
//                             );
//                         })}

// {isModalOpen && selectedProduct &&(
//                                      <ProductQuickView isOpen={isModalOpen} classNames={classNames} product={selectedProduct} onClose={closeModal}/>
//                                    )
//                                    }
//                     </div>
//                 )}
                
//                 {products.length < productsCount && (
//                     <div className="flex justify-center mt-8">
//                         <button
//                             className="btn btn-primary"
//                             onClick={handleLoadMore}
//                             disabled={loading}
//                         >
//                             {loading ? "Loading..." : "Load More"}
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NewArrivals;


import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProducts, getProductsCount } from '../functions/products';
import LoadingCard from './LoadingCard';
import { useSprings, animated } from '@react-spring/web';
import SectionTitle from './SectionTitle';
import { formattedPrice } from '../utils';
import { Tooltip } from 'antd';
import { Products } from '../pages';
import ReactStars from "react-rating-stars-component"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { ZoomIn } from '@mui/icons-material';
import { selectClasses } from '@mui/material';
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import ProductQuickView from './ProductQuickView';
import BASE_URL from '../config';



const NewArrivals = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [tooltip, setTooltip] = useState('click to add');
    const [showDiscount,setShowDiscount]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [selectedProduct,setSelectedProduct] =useState(null);
    const [wishlist,setWishlist]=useState([])

    const user=useSelector((state)=>state.userState);
  const userId=user.id
  const {email,token}=user

  const dispatch=useDispatch();

    useEffect(() => {
        loadAllProducts();
    }, [page]);

    useEffect(() => {
        fetchProductsCount();
    }, []);

    
    
    
    // useEffect(()=>{
    //      fetchUserWishList()

    //  },[userId,token,email])

    const loadAllProducts = () => {
        const sort = "createdAt"; // Example sort criteria
        const order = "desc"; // Example order
        setLoading(true);

        getProducts(sort, order, page).then((res) => {
            // setProducts(prevProducts => [...prevProducts, ...res.data.products]);

            setProducts(prevProducts=>{
                const newProducts=res.data.products.filter(
                    (newProduct)=>!prevProducts.some((prevProduct)=>prevProduct._id===newProduct._id)
                );
                return [...prevProducts,...newProducts];
            })


                

            
                
    
              

            console.log('response.data',res.data)

            setLoading(false);
        }).catch((error) => {
            console.error("Error loading products:", error);
            setLoading(false);
        });
    };

    const fetchProductsCount = () => {
        getProductsCount().then((res) => {
            setProductsCount(res.total);
        }).catch((error) => {
            console.error("Error fetching products count:", error);
        });
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const springs = useSprings(
        products.length,
        products.map((product, index) => ({
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0px)' },
            delay: index * 100,
            config: { tension: 200, friction: 20 }
        }))
    );

    const handleaddToCart = (product) => {
        console.log('Added to cart')
    };

    console.log('Products',products)


   

    const getDisplayedPrice = (product) => {
        const currentDate = new Date();
        const discountStartDate = product.discountStartDate ? new Date(product.discountStartDate) : null;
        const discountEndDate = product.discountEndDate ? new Date(product.discountEndDate) : null;

        // Check if the product is in the discount period
        const isDiscountActive = discountStartDate && discountEndDate &&
            currentDate >= discountStartDate && currentDate <= discountEndDate;

        const displayedPrice = isDiscountActive && product.discountPrice
            ? formattedPrice(product.discountPrice)
            : formattedPrice(product.price);

        const discountPercentage = isDiscountActive && product.discountPercentage
            ? product.discountPercentage
            : null;

        return { displayedPrice, discountPercentage };
    };

    const ImageCarousel=({images})=>{
        const [currentImageIndex,setCurrentImageIndex]=useState(0);
        const [isHovered,setIsHovered]=useState(false);

        useEffect(()=>{
            let intervalId;

            if(isHovered && images.length>1){
                intervalId=setInterval(()=>{
                    setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length)

                },2000)
            }else{
                setCurrentImageIndex(0)
            }
            return()=>clearInterval(intervalId);
        },[isHovered,images.length]);

        return(
            <div 
            // className='relative w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'
            // className="relative w-full h-80  "
               className="relative w-full h-[200px] lg:h-[270px] aspect-square overflow-hidden bg-gray-200 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {images.length>0 ?(
                     <img
                     src={images[currentImageIndex]?.url}
                     alt={`Product Image ${currentImageIndex + 1}`}
                    //  className="h-full w-full object-cover object-center group-hover:opacity-"
                    // className='absolute w-full h-80 object-cover  transition-opacity  duration-1000 ease-in-out  group-hover:opacity-80 group-hover:border border-grey'
                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-80"
                 />

                ):(
                    <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">No Image</span>
                </div>
                )}
            </div>
        )
    }

   const handleModalToggle=()=>{
    setIsModalOpen(!isModalOpen);
   }
   const handleQuickView=(product)=>{
    setSelectedProduct(product)
    setIsModalOpen(true)
   }

   const closeModal=()=>{
    setIsModalOpen(false)
    setSelectedProduct(null)
   }

   function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  






//   },[userId,email,token])

useEffect(() => {
   

    const fetchUserWishList = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/api/wishlist/${userId}`, { email }, {
            headers: {
              Authorization: `Bearer ${token}`,
              authtoken: token,
            },
          });
      
          console.log('Wishlist Response:', response.data);
      
          const products = response.data?.wishlist?.products || [];
          setWishlist(products.map(product => product._id)); // Store only product IDs for comparison
        } catch (error) {
          console.error('Error fetching wishlist:', error);
        }
      };
      

    if (token && email) {
        fetchUserWishList();
      }
   
  }, [userId, email, token]);

  

  const handleAddToWishList= async(product)=>{

   
    
    console.log('product',product)
     const productId=product._id;
     console.log('productId',productId)
    
    try{

        if(!wishlist.includes(productId)){
        const response=await addToWishList(userId,productId);
        console.log('response',response)

        toast.success(response.data.message || 'Product added to wishlist!');
        setWishlist([...wishlist,productId])
        }else{
            await axios.delete(
                 `${BASE_URL}/api/${userId}/${productId}`,
                 {
                    data:{userId,productId},
                    headers:{
                        Authorization:`Bearer ${token}`,
                        authtoken:token,
                    }
                 }
            );

            toast.success('Product removed from wishlist!');
            setWishlist(wishlist.filter((id)=>id !==productId))


        }

    }catch(error){
        // const errorMsg =
        //     error.response?.data?.message || 'Failed to add product to wishlist';
        // toast.error(errorMsg);

        console.log('error',error)

    }
}

const addToWishList=async(userId,productId)=>{

    console.log('userId ,productId',userId,productId)
    if (!token) {
        throw new Error('User not authenticated!');
    }
    if (!email) {
        throw new Error('User email is required!');
    }

    const WishProduct={
        userId:userId,
        productId:productId,
    }

    try {
        const response = await axios.post(
            `${BASE_URL}/api/wishlist`,
            {
                email, 
               WishProduct
            },
            {
                headers: {
                    Authorization:token,
                    authtoken: token,
                },
            }
        );
        return response;
    } catch (error) {
        throw error; // Rethrow to handle in the calling function
    }

}




   

    return (
        <div 
        // className='pt-10'
        className="pt-0 sm:pt-8  lg:pt-10"
        >
            <h1 className='text-center'>
            <SectionTitle text='New Arrivals'/>
            </h1>
            <div 
            // className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'
            className="mx-auto max-w-[1199px]  px-4 py-8  sm:px-6 sm:py-12 lg:px-8"
            >
                {loading ? (
                    <LoadingCard count={3} />
                ) : (
                    <div 
                    // className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
                    //className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6"
                    className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8"
                    >
                        {springs.map((styles, index) => {
                            const product = products[index];
                            const { title, price, images, _id, quantity,discountStartDate,discountEndDate,averageRating } = product;
                           
                            const {displayedPrice,discountPercentage}=getDisplayedPrice(product)

                            console.log('displayedPrice,discountPercentage',displayedPrice,discountPercentage)

                            const image = images[0]?.url;
                            // const dollarsAmount = formatPrice(price);
                            const Price=formattedPrice(price)

                            console.log('displayedPrice,Price',displayedPrice,Price)



                           
                           


                            return (
                                <animated.div key={_id} style={styles}
                                 //className="w-full sm:w-56 md:w-64 lg:w-72"
                                 className="w-full h-full flex flex-col"
                                
                                >
                                    <div>
                                        <>
                                        <div 
                                            //  className=' relative w-60 overflow-hidden bg-gray-200  xl:aspect-h-8 xl:aspect-w-7 group'

                                           className="group relative  max-w-[160px] max-h[90px] lg:max-w-[250px] lg:max-h-[250px]"
                                            >
                                        <Link key={_id} to={`/products/${_id}`} >
                                           
                                               

                                                <ImageCarousel   images={images}/>

                                                

                 {discountPercentage ? (
                          <div
                        //    className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded"
                        // className="absolute top-2 left-2 bg-blue-500 text-white text-xs sm:text-sm font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
                         className="absolute top-2 left-2 bg-primary text-white text-xs sm:text-sm font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
                                     >
                                  -{discountPercentage}%
                           </div>
                             ) : (
                              quantity === 0 ? (
                                        <div 

                        // className="absolute top-2 left-2   text-white text-sm font-bold px-2 py-1 rounded "
                        className="absolute top-2 left-2 text-white text-xs sm:text-sm font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
                        style={{ backgroundColor: 'oklch(76.66% 0.135 135 / 1)' }}
                       
                           >
                                     Sold Out
                               </div>
                                   ) : null
                                              )}

                                
</Link>
                                
                                    <div 
                                    // className=' absolute bottom-2 right-2 mb-2 flex items-center justify-center opacity-0 group-hover:opacity-85 transition-opacity duration-300'>
                                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-85 transition-opacity duration-300"
                                    >
                                        <div 
                                        // className='space-x-4 bg-gray-800 rounded'
                                        className="space-x-2 bg-gray-800 rounded"
                                        >
                                            <ul>
                                             
                                            <li>
                                            <button
                                             className=" text-white py-1 px-2 lg:py-2 lg:px-4 rounded hover:bg-gray-600" 
                                             onClick={()=>handleAddToWishList(product)}
                                             data-tooltip-id={`wishlist-tooltip-${_id}`}
                                              >
                                           {wishlist.includes(_id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                                            </button>
                                            <Tooltip
                                            id={`wishlist-tooltip-${_id}`}
                                            place="top"
                                            effect="solid"
                                            content={wishlist.includes(_id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                                            />
                                            </li>
                                            <li>
                                            <button className=" text-white py-1 px-2 lg:py-2 lg:px-4 rounded hover:bg-gray-600 hover:shadow-lg transition-all" onClick={()=>handleQuickView(product)} >
                                               <ZoomIn/>
                                            </button>
                                            </li>
                                            </ul>

                                        </div>

                                    </div>
                                    
                                 
                                    
 
                                            </div>
                                            <Link key={_id} to={`/products/${_id}`}
                                            //  className='group'
                                            className="mt-2 sm:mt-3"
                                             >

                                                <div className="flex flex-col items-center justify-center mt-4" >
                                                    <div className='w-full'>
                                            
                                             <h3 
                                            //  className='mt-4 text-sm '
                                            // className="text-xs sm:text-sm line-clamp-2"
                                            className="text-md font-medium text-gray-900 text-center pt-2 overflow-hidden text-ellipsis whitespace-nowrap  "
                                             >{title}</h3>
                                             </div>
                                             {averageRating >0 &&(
                                                <div
                                                className="scale-75 sm:scale-90 origin-left"
                                                >
                                                    <ReactStars
                                                    count={5}
                                                    value={averageRating}
                                                    edit={false}
                                                    size={24}
                                                    color2={'#ffd700'} 
                                                    color1={'#e4e5e9'}

                                                    />
                                                </div>
                                                
                                             )}
                                            

<p
//  className="mt-0 text-xl"
// className="mt-1 text-sm sm:text-base lg:text-lg"
 className="text-lg font-semibold text-gray-600"
 >
               {Price !==displayedPrice ?(
                 <p  
                
                 ><span 
                //  className="line-through"
                className="line-through mr-2"
                 >{Price}</span>{displayedPrice} </p>

               ):(<span>{Price}</span>)}
                  

                </p>
                </div>


                                        </Link>

                                       
                                       
                                        </>
                                    </div>
                                </animated.div>
                            );
                        })}

{isModalOpen && selectedProduct &&(
                                     <ProductQuickView isOpen={isModalOpen} classNames={classNames} product={selectedProduct} onClose={closeModal}/>
                                   )
                                   }
                    </div>
                )}
                
                {products.length < productsCount && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="btn btn-primary"
                            onClick={handleLoadMore}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Load More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewArrivals;

