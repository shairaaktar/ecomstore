import React, {useState,useEffect} from "react";
import { getProductsByCount,fetchProductsByFilter, getProductsFilters,getGridProducts,getProductsCount} from "../functions/products";
import { getCategories } from "../functions/category";
import { useSelector,useDispatch } from "react-redux";
import { FaHourglassEnd } from "react-icons/fa6";
// import { formatPrice } from "../utils";
import { Link, useSearchParams } from "react-router-dom";
import { Menu ,Slider,Checkbox,Radio, Button } from "antd";
import { DollarOutlined,DownSquareOutlined } from "@ant-design/icons";
import PaginationContainer from "../components/PaginationContainer";
import {useSpring,useSprings,animated,config} from '@react-spring/web'
import { formattedPrice } from "../utils";
import ReactStars from "react-rating-stars-component"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip } from 'antd';
import { ZoomIn } from '@mui/icons-material';
import axios from "axios";
import { toast } from "react-toastify";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Dialog, DialogBackdrop, DialogPanel, RadioGroup } from '@headlessui/react'
import { addItem } from "../features/cart/cartSlice";
import { ProductQuickView } from "../components";
import BASE_URL from "../config";

const {SubMenu}=Menu

const PRODUCT_PER_PAGE=10

const Shop=()=>{
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [price,setPrice]=useState([0,0])
  const [ok,setOk]=useState(false)
  const [categories,setCategories]=useState([]);
  const [categoryIds,setCategoryIds]=useState([])
  const [companies,setCompanies]=useState([]);
  const [colors,setColors]=useState([])
  const [company,setCompany]=useState('');
  const [color,setColor]=useState('')
  const [shipping,setShipping]=useState("")
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const [showDiscount,setShowDiscount]=useState(false)
  const [wishlist,setWishlist]=useState([])
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [selectedProduct,setSelectedProduct]=useState([])


  

  const search = useSelector((state) => state.searchState);
  const { text } = search;
  console.log('text',text)

  
      const user=useSelector((state)=>state.userState);
    const userId=user.id
    const {email,token}=user

let dispatch=useDispatch()

useEffect(()=>{
    loadAllProducts()

},[page])


  useEffect(()=>{
    
    getCategories().then((res)=>setCategories(res));
    getProductsFilters().then((res)=>{
        const {companies,colors}=res.data
        setCompanies(companies)
        setColors(colors)

    })
    // loadFilteredInfos();
    fetchProductsCount()
  },[]);
  console.log('categories',categories)

//   const loadAllProducts=()=>{
//     getProductsByCount(numofProduct).then((p)=>{
//         setProducts(p);
//         setLoading(false);
//     })
//   };

//   const loadFilteredInfos=async()=>{
//     try{
//         const {companies,colors}=await getProductsFilters();
//         console.log('companies,colors',companies,colors)
//         setCompanies(companies);
//         setColors(colors);

//     }catch(error){
//       console.error('Error loading filter:',error);
//     }
//   }

const loadAllProducts = () => {
    const sort = "createdAt"; // Example sort criteria
    const order = "desc"; // Example order
    //  const page = 1; // Example page number

    setLoading(true);

    getGridProducts(sort, order, page).then((res) => {
        // console.log('res',res)
        // setProducts(prevProducts=>
        //     [...prevProducts,...res.data.products]);

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
  console.log('companies--',companies)

  const fetchProductsCount = () => {
    getProductsCount().then((res) => {
        console.log('API RESPONSE',res);
        setProductsCount(res.total);
        console.log('Products Count', res.total);

    }).catch((error) => {
        console.error("Error fetching products count:", error);
    });
};

const getDisplayedPrice=(product)=>{
    const currentDate=new Date();
    const discountStartDate=product.discountStartDate ? new Date(product.discountStartDate) : null;
    const discountEndDate=product.discountEndDate ?  new Date(product.discountEndDate) : null;

    const isDiscountActive = discountStartDate && discountEndDate &&
    currentDate >= discountStartDate && currentDate <= discountEndDate;

const displayedPrice = isDiscountActive && product.discountPrice
    ? formattedPrice(product.discountPrice)
    : formattedPrice(product.price);

const discountPercentage = isDiscountActive && product.discountPercentage
    ? product.discountPercentage
    : null;

return { displayedPrice, discountPercentage };
    
}


  useEffect(()=>{
    const delayed=setTimeout(()=>{
        fetchProducts({query:text});
        if(!text){
            loadAllProducts()
        }
    },300)
    return ()=>clearTimeout(delayed)
       
  },[text])

  const fetchProducts=(arg)=>{
    fetchProductsByFilter(arg).then((res)=>{
        setProducts(res.data);
      })
  }

//   useEffect(()=>{
//     console.log('Ok to request');
//     fetchProducts({price});
//   },[ok]);

useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price:price });
}, [ok]);

  const handleSlider=(value)=>{
    console.log('value',value)
    dispatch({
        type:"SEARCH_QUERY",
        payload:{text:""},
    });
    setCategoryIds([])
    setColor([])
    setCompany([])
    setPrice(value)
    setTimeout(()=>{
        setOk(!ok);
    },300);
    
  }

  const showCategories=()=>{
  return  categories.map((c)=>(
        <div key={c._id}>
            
            <Checkbox
            onChange={handleCheck}
            className="pb-2 pl-4 pr-4  text-neutral"
            value={c._id}
            name="category"
            checked={categoryIds.includes(c._id)}
            >
                {c.name}
               
            </Checkbox>
            

        </div>
    ))
  }

  const handleCheck=(e)=>{
    dispatch({
        type:"SEARCH_QUERY",
        payload:{text:""},
    });
    setPrice([0,0]);
    setColor([]);
    setCompany([])
    
    let inTheState=[...categoryIds];
   
    let justChecked=e.target.value;
  
    let foundInTheState=inTheState.indexOf(justChecked);
   
    if(foundInTheState===-1){
        inTheState.push(justChecked);
      
    }else{
        inTheState.splice(foundInTheState,1);

    }
    setCategoryIds(inTheState)
    fetchProducts({category:inTheState})
  }
   

//   const showCompany=()=>{
//   return  companies.map((c)=>(
//         <Radio
//         key={c}
//         value={c}
//         name={c}
//         checked={c===companies}
//         onChange={handleCompany}
//         className="pb-1 pl-4 pr-4"
//         >
//             {c}
//         </Radio>
//     ))
//   }

const showCompany = () => {
    return Array.isArray(companies) && companies.length > 0 ? (
        companies.map((c) => (
            <Radio
                key={c}
                value={c}
                name={c}
                checked={c === company}
                onChange={handleCompany}
                className="pb-1 pl-4 pr-4  text-neutral"
            >
                {c}
            </Radio>
        ))
    ) : (
        <p>No companies available</p>
    );
};


  const handleCompany=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
        setPrice([0, 0]);
        setCategoryIds([]);
        setCompany(e.target.value);
        fetchProducts({ company: e.target.value });
  }
  
  const showColors = () => {
    return Array.isArray(colors) && colors.length > 0 ? (
        colors.map((c) => (
            <Radio
                key={c}
                value={c}
                name={c}
                checked={c === color}
                onChange={handleColor}
                className="pb-1 pl-4 pr-4  text-neutral"
            >
                {c}
            </Radio>
        ))
    ) : (
        <p>No color available</p>
    );
};

const handleColor=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });

    setPrice([0,0]);
    setCategoryIds([]);
   
    setColor(e.target.value);
    fetchProducts({color:e.target.value})
}

// const showShipping=()=>(
   
//         <>
//         <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingChange}
//         value="No"
//         checked={shipping==="No"}
//         >
//           Yes
//         </Checkbox>
    
//         <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingChange}
//         value="No"
//         checked={shipping==="No"}
//         >
//         No
//         </Checkbox>
//         </>
    
   
// )

const showShipping = () => (
    <>
        <Checkbox
            className="pb-2 pl-4 pr-4  text-neutral"
            onChange={handleShippingChange}
            value="Yes"
            checked={shipping === "Yes"}
        >
            Yes
        </Checkbox>

        <Checkbox
            className=" pb-2 pl-4 pr-4  text-neutral "
            onChange={handleShippingChange}
            value="No"
            checked={shipping === "No"}
        >
            No
        </Checkbox>
    </>
);

useEffect(() => {
    // const fetchUserWishList =  () => {
    //   try {
    //     const response =  axios.post(
    //       `${BASE_URL}/api/wishlist/${userId}`,
    //       { email },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           authtoken: token,
    //         },
    //       }
    //     );
    //     console.log('Fetched Wishlist:', response.data);
    //     setWishlist(response.data?.products || []);
    //   } catch (error) {
    //     console.error('Error fetching wishlist:', error);
    //   }
    // };

    const fetchUserWishList = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/api/wishlist/${userId}`, { email }, {
            headers: {
              Authorization: `Bearer ${token}`,
              authtoken: token,
            },
          });
      
          console.log('Wishlist Response:', response.data);
      
          const products = response.data?.wishlist?.products || [];
          setWishlist(products.map(product => product._id)); // Store only product IDs for comparison
        } catch (error) {
          console.error('Error fetching wishlist:', error);
        }
      };
      

    if (token && email) {
        fetchUserWishList();
      }
   
  }, [userId, email, token]);

  


const handleAddToWishList= async(product)=>{

   
    
    console.log('product',product)
     const productId=product._id;
     console.log('productId',productId)
    
    try{

        if(!wishlist.includes(productId)){
        const response=await addToWishList(userId,productId);
        console.log('response',response)

        toast.success(response.data.message || 'Product added to wishlist!');
        setWishlist([...wishlist,productId])
        }else{
            await axios.delete(
                 `${BASE_URL}/api/${userId}/${productId}`,
                 {
                    data:{userId,productId},
                    headers:{
                        Authorization:`Bearer ${token}`,
                        authtoken:token,
                    }
                 }
            );

            toast.success('Product removed from wishlist!');
            setWishlist(wishlist.filter((id)=>id !==productId))


        }

    }catch(error){
        // const errorMsg =
        //     error.response?.data?.message || 'Failed to add product to wishlist';
        // toast.error(errorMsg);

        console.log('error',error)

    }
}

const addToWishList=async(userId,productId)=>{

    console.log('userId ,productId',userId,productId)
    if (!token) {
        throw new Error('User not authenticated!');
    }
    if (!email) {
        throw new Error('User email is required!');
    }

    const WishProduct={
        userId:userId,
        productId:productId,
    }

    try {
        const response = await axios.post(
            `${BASE_URL}/api/wishlist`,
            {
                email, 
               WishProduct
            },
            {
                headers: {
                    Authorization:token,
                    authtoken: token,
                },
            }
        );
        return response;
    } catch (error) {
        throw error; // Rethrow to handle in the calling function
    }

}


const handleShippingChange=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
   setCompany([])
   setColor([])
   setShipping(e.target.value);
   fetchProducts({shipping:e.target.value})
}

const handleReset=()=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setCompany('');
    setColor('');
    setShipping('');
    loadAllProducts();
}

const springs=useSprings(
    products.length,
    products.map((product,index)=>({
        from:{opacity:0,transform:'translateY(20px)'},
        to:{opacity:1,transform:'translateY(0px)'},
        delay:index*100,
        // reset:true,
        // onRest:()=>{
        //     if(index===products.length-1){
        //         loadAllProducts()
        //     }
        // }

        config:{tension:200,friction:20}
    }))
);

const handleLoadMore=()=>{
    setPage(prevPage=>prevPage+1);
}


const ImageCarousel=({images})=>{
    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    const [isHovered,setIsHovered]=useState(false);

    useEffect(()=>{
        let intervalId;

        if(isHovered && images.length>1){
            intervalId=setInterval(()=>{
                setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length)

            },2000)
        }else{
            setCurrentImageIndex(0)
        }
        return()=>clearInterval(intervalId);
    },[isHovered,images.length]);

    return(
        <div 
        // className='relative w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'
        className="relative w-full h-80"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.length>0 ?(
                 <img
                 src={images[currentImageIndex]?.url}
                 alt={`Product Image ${currentImageIndex + 1}`}
                //  className="h-full w-full object-cover object-center group-hover:opacity-"
                className='absolute w-full h-80 object-cover transition-opacity  duration-1000 ease-in-out  group-hover:opacity-80 group-hover:border border-grey'
             />

            ):(
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">No Image</span>
            </div>
            )}
        </div>
    )
}


const handleModalToggle=()=>{
    setIsModalOpen(!isModalOpen);
   }
   const handleQuickView=(product)=>{
    setSelectedProduct(product)
    setIsModalOpen(true)
   }

   const closeModal=()=>{
    setIsModalOpen(false)
    setSelectedProduct(null)
   }

   function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

 


  return(
    <div>
    <div className="flex" >
        <div className="w-1/4 p-4 bg-base-100 "  >
           
            <div className="bg-base-100" >
           <h4 className="font-semibold text-lg mb-4  text-neutral">Search/Filter</h4>
            </div>
            <hr />
            <Menu className="bg-base-100 text-based-content"
            defaultOpenKeys={["1","2","3","4","5","6","7"]}
             mode="inline"
            >
                <SubMenu 
                className="bg-base-100"
                
                            key="1"
                            title={
                                <span className="h6  text-neutral">
                                    <DollarOutlined className=" text-neutral"/> Price
                                </span>
                            }
                        >
                            <div>
                                <Slider
                                   className="ml-4 mr-4 bg-base-100"
                                   tipFormatter={(v) => `$${v}`}
                                   range
                                   value={price}
                                   onChange={handleSlider}
                                   max="4999"
                                />
                            </div>
                        </SubMenu>
                        <SubMenu
                        className=" text-neutral"
                        key="2"
                        title={
                            <span className="h6  text-neutral">
                              <DownSquareOutlined className=" text-neutral"/>  Categories
                                </span>
                        }
                        >
                            <div   className='bg-base-100  text-neutral'style={{marginTop:"-10px"}}>{showCategories()}</div>
                        </SubMenu>
                    <SubMenu
                    className="bg-base-100"
                    key="3"
                    title={
                        <span className="h6 bg-base-100  text-neutral">
                            <DownSquareOutlined className="bg-base-100"/> Companies

                        </span>
                    }
                    >
                        <div style={{ maringTop: "-10px" }} className="pr-5 bg-base-100">
                            {showCompany() }

                        </div>

                    </SubMenu>
                    <SubMenu
                    bg-base-100
                    key="4"
                    title={
                        <span className="h6 bg-base-100  text-neutral">
                            <DownSquareOutlined className="bg-base-100"/>Colors
                        </span>
                    }
                    >
                        <div style={{marginTop:"-10px"}} className="pr-5">
                            {showColors()}
                        </div>
                    </SubMenu>
                    <SubMenu
                            key="7"
                            title={
                                <span className="h6  text-neutral">
                                    <DownSquareOutlined className="bg-base-100" /> Shipping
                                </span>
                            }
                        >
                            <div style={{ maringTop: "-10px" }} className="pr-5 bg-base-100">
                                {showShipping()}
                            </div>
                        </SubMenu>
                       


            </Menu>
            <br/>         
           <Button  className="bg-neutral text-white hover:bg-neutral-focus" onClick={handleReset} type="default" block>
            Reset

           </Button>

        </div>
        <div className="w-3/4 p-4" >
       
                <div className='mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:pb-24 sm:pt-8 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
    
                {springs.map((styles,index)=>{
                    const product=products[index];
                                     const {title,price,images,_id,quantity,averageRating}=product
                                     console.log('product',product)
                                    const image=images[0]?.url;
                                    console.log('title,price,images,_id',title,price,images,_id)
                                //     const dollarsAmount=formatPrice(price)
                                // console.log(dollarsAmount)
                                const {displayedPrice,discountPercentage}=getDisplayedPrice(product)

                                console.log('displayedPrice,discountPercentage',displayedPrice,discountPercentage)
                                const Price=formattedPrice(price)
                
                return (

            <animated.div key={_id} style={styles}
            
            
            >
                          
            <div >
                <>
               
               
                    <div className='relative  w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group'>
                        <div className='aspect-w-1 aspect-h-1'>
                        <Link
                 key={_id} to={`/products/${_id}`}
                //  className='group'
                 
                >

                                                    <ImageCarousel images={images}/> 
                                                      
                                                    
                                                    
{discountPercentage ? (
    <div
     className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded"
     >
        -{discountPercentage}%
    </div>
) : (
    quantity === 0 ? (
        <div 

         className="absolute top-2 left-2 bg-white text-grey-800 text-sm font-bold px-2 py-1 rounded"
       
        >
            Sold Out
        </div>
    ) : null
)}

</Link>


<div className=' absolute bottom-2 right-2 mb-2 flex items-center justify-center opacity-0 group-hover:opacity-85 transition-opacity duration-300'>
                                        <div className='space-x-4 bg-gray-800 rounded'>
                                            <ul>
                                             
                                            <li>
                                            <button
                                             className=" text-white py-2 px-4 rounded hover:bg-gray-600" 
                                             onClick={()=>handleAddToWishList(product)}
                                             data-tooltip-id={`wishlist-tooltip-${_id}`}
                                              >
                                           {wishlist.includes(_id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                                            </button>
                                            <Tooltip
                                            id={`wishlist-tooltip-${_id}`}
                                            place="top"
                                            effect="solid"
                                            content={wishlist.includes(_id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                                            />
                                            </li>
                                            <li>
                                            <button className=" text-white py-2 px-4 rounded hover:bg-gray-600 hover:shadow-lg transition-all" onClick={()=>handleQuickView(product)} >
                                               <ZoomIn/>
                                            </button>
                                            </li>
                                            </ul>

                                        </div>

                                    </div>

                                                    </div>



                    </div>
                   <Link key={_id} to={`/products/${_id}`} className="group">
                    <h3 className='mt-4 text-sm '>{title}</h3>
                    {averageRating >0 &&(
                        <div>
                            <ReactStars
                            count={5}
                            value={averageRating}
                            edit={false}
                            size={24}
                            color2={'#ffd700'} 
                            color1={'#e4e5e9'}
                            />
                        </div>
                    )

                    }

<p className="mt-0 text-xl">
               {Price !==displayedPrice ?(
                 <p><span className="line-through">{Price}</span>{displayedPrice} </p>

               ):(<span>{Price}</span>)}
                   

                </p>

                </Link>


                           </>
                          </div>
                        </animated.div>
               )

            })}

{isModalOpen && selectedProduct &&(
                                     <ProductQuickView isOpen={isModalOpen} classNames={classNames} product={selectedProduct} onClose={closeModal}/>
                                   )
                                   }

            </div>

        </div>

        {products.length <productsCount &&(
            <div className="flex justify-center mt-8">
                <button
                className="btn btn-primary"
                onClick={handleLoadMore}
                disabled={loading}
                >
                    {loading ? "Loading..." :"Load More"}
                </button>
                </div>
        )

        }

        {/* <PaginationContainer
                        current={page}
                        total={productsCount}
                        pageSize={PRODUCT_PER_PAGE}
                        onChange={(value) => setPage(value)}
                    /> */}

        </div>

    

    </div>
    
    </div>
  )

}

export default Shop;