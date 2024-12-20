import { Filters,PaginationContainer,ProductsContainer } from "../components";
import { useEffect,useState } from "react";

import { getProductsByCount,getProductsCount,getProducts } from "../functions/products";
import { customFetch } from "../utils";
const url='./products';
const PRODUCT_PER_PAGE=9;

export const loader=async ({request})=>{
    // const params=new URL(request.url).searchParams;
    // const search=params.get('search');

    const params=Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    const response=await customFetch(url, {
         params,
    });

    // const response=await customFetch(url);
    const products=response.data.data;
    const meta=response.data.meta;
    console.log(products)

    return {products, meta,params};
}

const Products=()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

   
   

    // useEffect(() => {
    //     fetchProductsCount();
    //     loadAllProducts()
    // }, [page]);

    // const loadAllProducts = () => {
    //     const sort = "createdAt"; // Example sort criteria
    //     const order = "desc"; // Example order
    //     //  const page = 1; // Example page number
    
    //     setLoading(true);
    
    //     getProducts(sort, order, page).then((res) => {
    //         setProducts(res.data);
    //         setLoading(false);
    //     }).catch((error) => {
    //         console.error("Error loading products:", error);
    //         setLoading(false);
    //     });
    // };


    // const fetchProductsCount = () => {
    //     getProductsCount().then((res) => {
    //         console.log('API RESPONSE',res);
    //         setProductsCount(res.total);
    //         console.log('Products Count', res.total);

    //     }).catch((error) => {
    //         console.error("Error fetching products count:", error);
    //     });
    // };

    // useEffect(() => {
    //     fetchProductsCount();
    //     loadAllProducts();
    // }, [page]);

    // const loadAllProducts = () => {
    //     const sort = "createdAt"; // Example sort criteria
    //     const order = "desc"; // Example order

    //     setLoading(true);

    //     getProducts(sort, order, page, PRODUCT_PER_PAGE).then((res) => {
    //         setProducts(res.data);
    //         setLoading(false);
    //     }).catch((error) => {
    //         console.error("Error loading products:", error);
    //         setLoading(false);
    //     });
    // };

    // const fetchProductsCount = () => {
    //     getProductsCount().then((res) => {
    //         console.log('API RESPONSE', res);
    //         setProductsCount(res.total);
    //         console.log('Products Count', res.total);
    //     }).catch((error) => {
    //         console.error("Error fetching products count:", error);
    //     });
    // };


    return(
       <>
       <ProductsContainer/>
       {/* <PaginationContainer
       current={page}
       total={productsCount}
       pageSize={PRODUCT_PER_PAGE}
       onChange={(value)=>setPage(value)}
       
       /> */}
       </>
    )
}

export default Products;