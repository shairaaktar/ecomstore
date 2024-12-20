// import {Link, useLoaderData} from 'react-router-dom'
// import { formatPrice } from '../utils';
// import { useEffect,useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formattedPrice } from '../utils';
import PaginationContainer from './PaginationContainer';
import LoadingCard from './LoadingCard';
const PRODUCT_PER_PAGE = 12;
import { getProductsByCount,getProductsCount,getProducts,getGridProducts } from '../functions/products';

const ProductsGrid=()=>{
    // const {products}=useLoaderData();

    // const [products ,setProducts]=useState([]);
    // const [loading, setLoading]=useState(true);
    // const [error,setError]=useState(null);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

    // useEffect(()=>{
    //     const fetchProducts=async()=>{
    //         try{
    //             const response=await axios.get('http://localhost:8001/api/products');
    //             console.log('Products-->',response)
    //             setProducts(response.data);
    //             setLoading(false);
    //         }catch(error){
    //             setError(error.message)
    //             setLoading(false);
    //         }
    //     };
    //     fetchProducts();
    // },[])


// useEffect(() => {
//         fetchProductsCount();
//         fetchProducts();
//     }, [page]);

//     const fetchProductsCount = async () => {
//         try {
//             const response = await axios.get('http://localhost:8001/api/products/count');
//             console.log('Products Count -->', response);
//             setProductsCount(response.data.total);
//         } catch (error) {
//             console.error("Error fetching products count:", error);
//             setError(error.message);
//         }
//     };

//     const fetchProducts = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get('http://localhost:8001/api/productss', {
//                 params: { page, limit: PRODUCT_PER_PAGE }
//             });
//             console.log('Products -->', response);
//             setProducts(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error loading products:", error);
//             setError(error.message);
//             setLoading(false);
//         }
//     };

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
        const featuredProducts=res.data.filter(product=>product.featured);
           setProducts(featuredProducts);
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
         <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {products.map((product)=>{
                const {title,price,images,_id,quantity}=product
                const image=images[0]?.url;
                console.log('title,price,images,_id',title,price,images,_id)
                // const dollarsAmount=formatPrice(price)
                const Price=formattedPrice(price)
                console.log(dollarsAmount)
                
                return (
                <Link
                 key={_id} to={`/products/${_id}` } className='card
                w-full shadow-xl hover:shadow-2xl transition duration-300'>
                    <figure className='px-4 pt-4'>
                        {/* <img src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover'/> */}
                        
                        {image && (
              <img
                src={image}
                alt={title}
                // className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
                className='h-64 md:h-48 w-full object-cover'
              />
            )}
                    </figure>
                    <div className='card-body items-center text-center'>

                        <h2 className='card-title capitalize tracking-wider'>
                            {title}

                        </h2>
                        <span className='text'>{Price}</span>
                        {quantity===0 &&(
                            <span className="text-red-500 font-bold">
                                Sold Out
                            </span>
                        )}
                    </div>

                </Link>
               )
            })}

        </div>
       
        
        </>
       
    )
}

export default ProductsGrid