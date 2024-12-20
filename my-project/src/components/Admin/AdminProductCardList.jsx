// import { Link } from "react-router-dom";
// import { useEffect,useState } from "react";
// import axios from "axios";
// import { formatPrice } from "../../utils";
// import PaginationContainer from "../PaginationContainer";
// import LoadingCard from "../LoadingCard";
// import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
// import {BsFillGridFill, BsList} from 'react-icons/bs'
// const PRODUCT_PER_PAGE = 10;
// import { getProducts ,getGridProducts,getProductsByCount,getProductsCount} from "../../functions/products";




// const AdminProductCardList=()=>{
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [productsCount, setProductsCount] = useState(0);
//     const [page, setPage] = useState(1);
//     const [layout ,SetLayout]=useState('grid');

//     const setActiveStyles=(pattern)=>{
//         return `text-xl btn btn-circle btn-sm ${
//             pattern===layout
//             ? 
//             'btn-primary text-primary-content':'btn-ghost text-based-content'
//         }`
//     }
    

//     useEffect(()=>{
//         loadAllProducts()
    
//        },[page])

//        useEffect(() => {
//         fetchProductsCount();
//     }, []);

//     const loadAllProducts = () => {
//         const sort = "createdAt"; // Example sort criteria
//         const order = "desc"; // Example order
//         //  const page = 1; // Example page number
    
//         setLoading(true);
    
//         getGridProducts(sort, order, page).then((res) => {
//             setProducts(res.data);
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
    
    

//     return(
//        <>
//         <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
//         <h4 className="font-medium text-md">
//             {productsCount} product{productsCount >1 && 's'}

//         </h4>
//         <div className="flex gap-x-2" >
//             <button 
//             type="button"
//             onClick={()=>SetLayout('grid')}
//             className={setActiveStyles('grid')}
//             >
//             <BsFillGridFill/>
//             </button>
//             <button 
//             type="button"
//             onClick={()=>SetLayout('list')}
//             className={setActiveStyles('list')}
//             >
//          <BsList/>
//             </button>

//         </div>

//        </div>

//      <div className='mt-12 grid gap-y-8 '>
//             {products.map((product)=>{
//                 const {title,price,images,_id}=product
//                 const image=images[0]?.url;
//                 console.log('title,price,images,_id',title,price,images,_id)
//                 const dollarsAmount=formatPrice(price)
//                 console.log(dollarsAmount)
                
//                 return (
//                 <Link
//                  key={_id} to={`/products/${_id}` } 
//                   className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
//                 >
//                     <figure className='px-4 pt-4'>
//                         {/* <img src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover'/> */}
                        
//                         {image && (
//               <img
//                 src={image}
//                 alt={title}
//                 // className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
//                  className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
//               />
//             )}
//            </figure>
//                     {/* <div className='card-body items-center text-center'>

//                         <h2 className='card-title capitalize tracking-wider'>
//                             {title}

//                         </h2>
//                         <span className='text'>{dollarsAmount}</span>
//                     </div> */}

//                 <div className='ml-0 sm:ml-16'>
//                             <h3 className='capatalize font-medium text-lg'>{title}</h3>
//                             <h4 className='capatalize text-md text-neutral-content'>{company}</h4>

//                         </div>
//                         <p className='font-medium ml-0 sm:ml-auto text-lg'>{dollarsAmount}</p>


                   
  
//   <div className="card-body">
   
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">
//       <Link > <EditOutlined  />
//       Edit
//       </Link>
//        </div>
//       <div className="badge badge-outline"> 
//         <DeleteOutlined />Delete</div>
    
//   </div>
// </div> 

//                 </Link>
//                )
//             })}

//         </div>
//         <PaginationContainer
//                         current={page}
//                         total={productsCount}
//                         pageSize={PRODUCT_PER_PAGE}
//                         onChange={(value) => setPage(value)}
//                     />
//        </>
//     )

// }

// export default AdminProductCardList;

import {Link, useLoaderData} from 'react-router-dom'
import { formattedPrice } from '../../utils';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationContainer from '../PaginationContainer';
import { getProducts,getProductsCount,getGridProducts } from '../../functions/products';
const PRODUCT_PER_PAGE = 3;
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'

const AdminProductCardList=()=>{
    // const {products}=useLoaderData();

//   const [products ,setProducts]=useState([]);
//     const [loading, setLoading]=useState(true);
//     const [error,setError]=useState(null);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
  
    // useEffect(()=>{
    //     const fetchProducts=async()=>{
    //         try{
    //             const response=await axios.get('http://localhost:8001/api/products');
    //             console.log('Products',response)
    //             setProducts(response.data);
    //             setLoading(false);
    //         }catch(error){
    //             setError(error.message)
    //             setLoading(false);
    //         }
    //     };
    //     fetchProducts();
    // },[])


    useEffect(()=>{
        loadAllProducts()
    
       },[page])
    
       // useEffect(() => {
       //     getProductsCount().then((res) => setProductsCount(res.data));
       // }, []);
    
       useEffect(() => {
           fetchProductsCount();
       }, []);
    
       // const loadAllProducts = () => {
       //     setLoading(true);
       //     // sort, order, limit
       //     getProducts("createdAt", "desc", page).then((res) => {
       //         setProducts(res.data);
       //         setLoading(false);
       //     });
       // };
    
       const loadAllProducts = () => {
           const sort = "createdAt"; // Example sort criteria
           const order = "desc"; // Example order
           //  const page = 1; // Example page number
       
           setLoading(true);
       
           getGridProducts(sort, order, page).then((res) => {
               setProducts(res.data);
               setLoading(false);
           }).catch((error) => {
               console.error("Error loading products:", error);
               setLoading(false);
           });
       };
    
       const fetchProductsCount = () => {
           getProductsCount().then((res) => {
               console.log('API RESPONSE',res);
               setProductsCount(res.total);
               console.log('Products Count', res.total);
    
           }).catch((error) => {
               console.error("Error fetching products count:", error);
           });
       };
       
    

    return(
       <>

<div className='mt-12 grid gap-y-8 '>
            {products.map((product)=>{
                const {title,price,images,company,_id}=product
                const image=images[0]?.url;
                console.log('title,price,image,company,id',title,price,image,company)
                // const dollarsAmount=formatPrice(price)

                const Price=formattedPrice(price)
                
                
                return(
                    <Link
                    key={_id}
                    to={`/products/${_id}`}
                    className='p-8 flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                    
                    >
                        {/* <img
                        src={image}
                        alt={title}
                        className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition during-300'

                        /> */}
                        {image && (
              <img
                src={image}
                alt={title}
                className='h-24 w-60 sm:h-32 object-cover group-hover:scale-105 transition duration-300'
              />
            )}
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capatalize font-medium text-lg'>{title}</h3>
                            <h4 className='capatalize text-md text-neutral-content'>{company}</h4>

                        </div>
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>{Price}</p>

                        <div className="card-actions justify-end">
      <div className="badge badge-outline">
      <Link > <EditOutlined  />
      Edit
      </Link>
       </div>
      <div className="badge badge-outline"> 
        <DeleteOutlined />Delete</div>
    
  </div>
                    </Link>
                    
                )
            })}



        </div>
        <PaginationContainer
                        current={page}
                        total={productsCount}
                        pageSize={PRODUCT_PER_PAGE}
                        onChange={(value) => setPage(value)}
                    />
        
        
       </>
    )
}

export default AdminProductCardList

