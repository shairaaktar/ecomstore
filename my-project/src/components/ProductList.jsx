import {Link, useLoaderData} from 'react-router-dom'
import { formattedPrice } from '../utils';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationContainer from './PaginationContainer';
import { getProducts,getProductsByCount,getProductsCount,getGridProducts } from '../functions/products';
const PRODUCT_PER_PAGE = 3;

const ProductList=()=>{
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
            //    setProducts(res.data);

            setProducts(prevProducts=>{
                const newProducts=res.data.products.filter(
                    (newProduct)=>!prevProducts.some((prevProduct)=>prevProduct._id===newProduct._id)
                );
                return [...prevProducts,...newProducts];
            })

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
                    className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                    
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
                className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
              />
            )}
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capatalize font-medium text-lg'>{title}</h3>
                            <h4 className='capatalize text-md text-neutral-content'>{company}</h4>

                        </div>
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>{Price}</p>
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

export default ProductList