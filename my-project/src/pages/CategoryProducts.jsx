import { Link, useParams } from "react-router-dom";
import { readCategory } from "../functions/category";
import { useEffect, useState } from "react";
import { SectionTitle ,PaginationContainer} from "../components";
import { formattedPrice } from "../utils";
import { toast } from "react-toastify";
const PRODUCT_PER_PAGE=10

const CategoryProducts=()=>{
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
  
   <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    {products.map((r)=>{
         const {title,price,_id,images}=r
         const image=images[0]?.url;
        
         console.log('title',title);
        //  const dollarsAmount=formatPrice(price)
        const Price=formattedPrice(price)
         return(
            <>
            <Link
            key={_id} to={`/products/${_id}`} className='card
                w-full shadow-xl hover:shadow-2xl transition duration-300'
                    >
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

export default  CategoryProducts