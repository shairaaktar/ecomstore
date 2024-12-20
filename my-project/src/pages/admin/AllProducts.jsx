import { Link } from "react-router-dom"
import { Filters,SectionTitle,AdminProductCardGrid,AddProductButton,AdminProductCardList } from "../../components"
import { customFetch } from '../../utils';
import { getProductsByCount,getProductsCount,getGridProducts,getProducts } from "../../functions/products";
import { useEffect,useState } from "react";
import {BsFillGridFill, BsList} from 'react-icons/bs'
import axios from "axios";

const url='./products';

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


const AllProducts=()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [layout ,SetLayout]=useState('grid');

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
  
    useEffect(()=>{
        loadAllProducts()
    
       },[page])

       useEffect(() => {
        fetchProductsCount();
    }, []);

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
    
   
    return (
        <>
        <div className="">
        {/* <SectionTitle text='Products'/> */}
         <Filters/> 
        {/* <Link to="/admin/products/createproduct">
                  <button className="btn btn-primary mt-7 float-left" >
                           Add Product+
                    </button>
                  
                  </Link> */}
     <AddProductButton/>
     <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
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
     
     <div>
        {productsCount===0?(
            <h5 className="text-2xl mt-16">
                Sorry, no products matched your search...

            </h5>

        ): layout==='grid'?(

            <AdminProductCardGrid/>
        ):(
            <AdminProductCardList/>
        )}
       </div>
       
       
        </div>

       
        </>
        
    )

}
export default AllProducts