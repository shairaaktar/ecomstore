import { Link, useParams } from "react-router-dom";
import { readCategory } from "../functions/category";
import { useEffect, useState } from "react";
import { SectionTitle,PaginationContainer } from "../components";
import { formattedPrice } from "../utils";

const PRODUCT_PER_PAGE=10


const CategoryProductsList=()=>{
    const {slug}=useParams();
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    const [loading,setLoading]=useState(true)
    const [productCount,setProductCount]=useState(0);
    const [page, setPage] = useState(1);


    useEffect(()=>{
        setLoading(true);
        readCategory(slug,page,PRODUCT_PER_PAGE)
        .then(response=>{
            console.log('category details:',response)
           setCategories(response)
           setProductCount(response.productCount);
            setProducts(response.products);
            setLoading(false)

        }).catch(error=>{
            console.error('Error fetchinh category details',error);
            toast.error('failed to load category details');
            setLoading(false);


        })
    },[slug,page]);

    

return (
    <>
   {products.length<1 ?(
           <SectionTitle text='No Products Found Under this Category'/>
   ):(
   <h1>
    total Products:{productCount}
   </h1>

   )}
  
   <div className="mt-12 grid gap-y-8 ">
    {products.map((r)=>{
         const {title,price,_id,images,company,quantity}=r
         const image=images[0]?.url;
        
         console.log('title',title);
        //  const dollarsAmount=formatPrice(price)
        const Price=formattedPrice(price)
         return(
            <>
           

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
                       
                       
                       <div className='ml-0 sm:ml-16'>
                       {quantity===0 &&(
                            <span className="text-red-500 font-bold">
                                Sold Out
                            </span>
                        )}

                        </div>
                        

                       
                       
                    </Link>

            </>
         )

    })}

   </div>
   <PaginationContainer
        total={productCount}
        PageSize={PRODUCT_PER_PAGE}
        current={page}
        onChange={(value) => setPage(value)}
      />
  


    </>
)
}

export default  CategoryProductsList