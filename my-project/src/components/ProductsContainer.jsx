import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";
import { useState,useEffect } from "react";
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { getProductsByCount,getProductsCount,getProducts,getGridProducts } from '../functions/products';
import { Shop } from "../pages";
import {ShopList} from '../components'
const ProductsContainer=()=>{
    const {meta}=useLoaderData();
    const totalProducts=meta.pagination.total;
    const [layout ,SetLayout]=useState('grid');
    const [productsCount, setProductsCount] = useState(0);
    

    const setActiveStyles=(pattern)=>{
        return `text-xl btn btn-circle btn-sm ${
            pattern===layout
            ? 
            'btn-primary text-primary-content':'btn-ghost text-based-content'
        }`
    }

    useEffect(() => {
        fetchProductsCount();
    }, []);
 

    const fetchProductsCount = () => {
        getProductsCount().then((res) => {
            console.log('API RESPONSE',res);
            setProductsCount(res.total);
            console.log('Products Count', res.total);
 
        }).catch((error) => {
            console.error("Error fetching products count:", error);
        });
    };

    console.log('fetchProductsCount',productsCount)

    return(
       <>
       {/* HEADER */}
       <div className="flex justify-between items-center mt-2 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
            {productsCount} product{productsCount >1 && 's'}

        </h4>
        <div className="flex gap-x-2" >
            <button 
            type="button"
            onClick={()=>SetLayout('grid')}
            className={setActiveStyles('grid')}
            >
            <BsFillGridFill/>
            </button>
            <button 
            type="button"
            onClick={()=>SetLayout('list')}
            className={setActiveStyles('list')}
            >
         <BsList/>
            </button>

        </div>

       </div>
       {/* PRODUCTS */}
       <div>
        {totalProducts===0?(
            <h5 className="text-2xl mt-16">
                Sorry, no products matched your search...

            </h5>

        ): layout==='grid'?(

            <Shop/>
        ):(
            <ShopList/>
        )}
       </div>
       
       </>
    )
}
export default ProductsContainer;