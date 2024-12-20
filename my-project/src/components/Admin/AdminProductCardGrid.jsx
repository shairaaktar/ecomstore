import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { formattedPrice } from "../../utils";
import PaginationContainer from "../PaginationContainer";
import LoadingCard from "../LoadingCard";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import {BsFillGridFill, BsList} from 'react-icons/bs'
const PRODUCT_PER_PAGE = 3;
import { getProducts ,getGridProducts,getProductsByCount,getProductsCount,removeProduct} from "../../functions/products";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'





const AdminProductCardGrid=()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [layout ,SetLayout]=useState('grid');
    const user=useSelector((state)=>state.userState);


     console.log('User-->',user)

    const setActiveStyles=(pattern)=>{
        return `text-xl btn btn-circle btn-sm ${
            pattern===layout
            ? 
            'btn-primary text-primary-content':'btn-ghost text-based-content'
        }`
    }
    

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
            setProducts(prevProducts=>[...prevProducts,...res.data.products]);
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


     const handleRemove=(slug)=>{
         let answer=window.confirm('Delete?')
         if(answer){
             removeProduct(slug,user.token,user.email)
             .then(res=>{
                loadAllProducts();
                toast.success(`${res.data.title} is deleted`);
             })
             .catch(err => {
               
                console.log(err)
            })
         }

        // Swal.fire({
        //     icon: 'warning',
        //   title: 'Are you sure?',
        //   text: "You won't be able to revert this!",
        //   showCancelButton: true,
        //   confirmButtonText: 'Yes, delete it!',
        //   cancelButtonText: 'No, cancel!',

        // }).then(result=>{
        //            if(result.value){
        //             removeProduct(slug,user.token,user.email)
        //             .then(response=>{
                       
        //                 if(response.status===200){
                            
        //                     const ProductToDelete=products.find(product=>product._id===id);
        //                     setProducts(products.filter(product=>product._id==id));
        //                     Swal.fire({
        //                         icon: 'success',
        //                         title: 'Deleted!',
        //                         text: `Employee Id : ${ProductToDelete.id}  has been deleted.`,
        //                         showConfirmButton: false,
        //                         timer: 1500,
        //                       });
        //                 }else{
        //                     Swal.fire({
        //                         icon: 'error',
        //                         title: 'Oops...',
        //                         text: 'Something went wrong while deleting the employee!',
        //                       });
        //                 }
        //             }

        //             )
        //             .catch(error => {
        //                 console.error('Error Order:', error);
        //                 Swal.fire({
        //                   icon: 'error',
        //                   title: 'Oops...',
        //                   text: 'Something went wrong while deleting the employee!',
        //                 });
        //               });


        //            }
        // })
     }
    

    return(
       <>
        {/* <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
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

       </div> */}

     <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {products.map((product)=>{
                const {title,price,images,_id,slug}=product
                console.log('slug',slug)
                const image=images[0]?.url;
                console.log('title,price,images,_id',title,price,images,_id)
                // const dollarsAmount=formatPrice(price)
                // console.log(dollarsAmount)

                const Price=formattedPrice(price)
                
                return (
              < div  className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
                <Link
                 key={_id} to={`/products/${_id}` }>
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
                   
  
  <div className="card-body">
   
    <div className="card-actions justify-end">
      <div className="badge badge-outline">
      <Link to={`/admin/product/update/${_id}`} > <EditOutlined  />
      Edit
      </Link>
       </div>
      <div className="badge badge-outline"> 
        <DeleteOutlined onClick={() => { handleRemove(slug) }}/>Delete</div>
    
  </div>
</div> 

              
              </div>
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

export default AdminProductCardGrid;