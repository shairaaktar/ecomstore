import { useState } from "react";
import { useEffect } from "react";
import { readCategory } from "../functions/category";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {BsFillGridFill, BsList} from 'react-icons/bs'
import CategoryProductsList from "./CategoryProductsList";
import  CategoryProducts  from "./CategoryProducts";
import { Link } from "react-router-dom";

const CategoryProductsPage=()=>{
    const {slug}=useParams()
    const [layout ,SetLayout]=useState('grid');
    const [productCount, setProductCount] = useState(0);
    const [loading,setLoading]=useState(true)

    const setActiveStyles=(pattern)=>{
        return `text-xl btn btn-circle btn-sm ${
            pattern===layout
            ? 
            'btn-primary text-primary-content':'btn-ghost text-based-content'
        }`
    }

    
    useEffect(()=>{
        setLoading(true);
        readCategory(slug)
        .then(response=>{
            console.log('category details:',response)
          
           setProductCount(response.productCount);
           
            setLoading(false)

        }).catch(error=>{
            console.error('Error fetchinh category details',error);
            toast.error('failed to load category details');
            setLoading(false);


        })
    },[slug]);
    return(
        <>
        
        
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
         <h4 className="font-medium text-md">
            {productCount} product{productCount >1 && 's'}

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
        <div>
        {productCount===0?(
            <h5 className="text-2xl mt-16">
                Sorry, no products matched your search...

            </h5>

        ): layout==='grid'?(

            <CategoryProducts/>
        ):(
            <CategoryProductsList/>
        )}
       </div>
       
        </>
    )

}
export default CategoryProductsPage;