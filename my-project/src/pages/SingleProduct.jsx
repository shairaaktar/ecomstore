import { useLoaderData, useParams } from "react-router-dom";
import { formattedPrice,customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { getProducts,getRelatedProduct } from "../functions/products";
import {SectionTitle,MeasurementList, LoadingCard,SizeChartComponent,ProductQuickView} from '../components'
import { Tabs } from "antd";
import { Carousel } from "react-responsive-carousel";
//  import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useRef } from "react";
const {TabPane}=Tabs;
import ReactStars from "react-rating-stars-component"
import { useSprings, animated } from '@react-spring/web';
import { toast } from "react-toastify";
import axios from "axios";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import assert from "assert";
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BASE_URL from "../config";
import { spring } from "framer-motion";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip } from 'antd';
import { ZoomIn } from '@mui/icons-material';





const SingleProduct=()=>{
    // const {product}=useLoaderData();
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const [amount, setAmount]=useState(1)
    const [related,setRelated]=useState([])
    const [rating,setRating]=useState(0);
    const [comment,setComment]=useState("");
    const [reviews,setReviews]=useState([])
    const [zoom,setZoom]=useState(false);
    const [offset,setOffset]=useState({x:0,y:0});
    const [zoomImage,setZoomImage]=useState("");
    const [showDiscount,setShowDiscount]=useState(false);
    const [products,setProducts]=useState([]);
    const [page,setPage]=useState(1);
    const [wishlist ,setWishlist]=useState([])
    const [selectedProduct,setSelectedProduct]=useState(null)
    const [isModalOpen,setIsModalOpen]=useState(false)




    
 console.log('id',id)
 

    const user=useSelector((state)=>state.userState);
    console.log('user',user)

    const {token}=user;
    const {email}=user

    const ID=user.id;


    useEffect(()=>{
   loadAllProducts()
    },[page])



const loadAllProducts=()=>{
  const sort ="createdAt";
  const order="desc"

  setLoading(true);
  getProducts(sort,order,page).then((res)=>{
    setProducts(prevProducts=>{
      const newProducts=res.data.products.filter(
        (newProduct)=>!prevProducts.some((prevProduct)=>prevProduct._id===newProduct._id)


      );

      return [...prevProducts,...newProducts];
    })

    console.log('response.data||',res.data)
    setLoading(false);
  }).catch((error)=>{
    console.error("Error loading products:",error);
    setLoading(false);
  })
};


useEffect(()=>{
  const fetchUserWishList=async()=>{
    try{
      const response=await axios.post(`${BASE_URL}/api/wishlist/${ID}`,{email},{
        headers:{
          Authorization:`Bearer ${token}`,
          authtoken:token,
        }
      });
      console.log('Wishlist Response:',response.data);
      const products=response.data?.wishlist?.products || [];
      setWishlist(products.map(product=>product._id));


    }catch(error){
      console.error('Error fetching wishlist:', error);
    }
  };
  if(token && email){
    fetchUserWishList()
  }
},[ID,email,token]);


const springs=useSprings(
  products.length,
  products.map((product,index)=>({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: index * 100,
    config: { tension: 200, friction: 20 }

  }))
)


const handleMouseMove = (e, imageUrl) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setOffset({ x, y });
    setZoomImage(imageUrl); // Set the current image for zoom
    setZoom(true); // Enable zoom
  };
  
  const handleMouseLeave = () => {
    setZoom(false); // Disable zoom when mouse leaves
  };
  

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


    

    useEffect(() => {
       
       if(id){
        fetchProduct();
       }
    }, [id]);



    const fetchProduct = async () => {
      try {
          const response = await axios.get(`${BASE_URL}/api/single-product/${id}`,{

            headers: {
              'Cache-Control': 'no-cache',
            },

          });
          //const response = await axios.get(`${BASE_URL}/api/products/${id}?_=${new Date().getTime()}`);

          setProduct(response.data);
          console.log('response data11',response)

          const currentDate=new Date();
          const discountStartDate=new Date(response.data.discountStartDate);
          const discountEndDate=new Date(response.data.discountEndDate);

          if(currentDate>=discountStartDate && currentDate<=discountEndDate){
              setShowDiscount(true);
          }

          setProductColor(response.data.colors[0]);
          getRelatedProduct(response.data._id).then((res)=>setRelated(res.data))
          setAmount(response.data.quantity>0?1:0);

          setLoading(false);
          fetchReviews()
          
      } catch (error) {
          setError(error.message);
          setLoading(false);
      }
  };


    console.log('Product',product)


  


    const handleAmount=(e)=>{
        setAmount(parseInt(e.target.value))
    }


   
     const dispatch=useDispatch();



const handleAddToWishList= async(product)=>{

  console.log('product',product)
  const productId=product._id;
  console.log('productId',productId)
    try{
        if(!wishlist.includes(productId)){
          const response=await addToWishList(ID,productId);
          console.log('response',response)
          toast.success(response.data.message || 'Product added to wishlist!');
          setWishlist([...wishlist,productId])


        }else{
          await axios.delete(
            `${BASE_URL}/api/${ID}/${productId}`,
            {
              data:{ID,productId},
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


   
    
    const addToCart = () => {
        if (!product) return;

        if(amount>quantity){
            alert('The selected amount exceeds the available stock');
            return;
        }


        const currentDate=new Date()
        const discountStartDate=new Date(product.discountStartDate);
        const discountEndDate=new Date(product.discountEndDate);
        

        const finalPrice = (currentDate >= discountStartDate && currentDate <= discountEndDate) 
        ? product.discountPrice 
        : product.price;

        const cartProduct = {
            cartID: `${product._id}${productColor}`,
            productID: product._id,
            image: product.images[0]?.url,
            title: product.title,
            price: finalPrice,
            // company: product.company,
            productColor: productColor,
            productSize:productSize,
            amount: amount,
            quantity:quantity
        };

        dispatch(addItem({ product: cartProduct }));
    };

    const fetchReviews=async()=>{
        try{

            const response=await axios.get(`${BASE_URL}/api/${id}/getreviews`);
            setReviews(response.data);
            console.log('review',response)

        }catch(error){
            console.error("Error fetching reviews:",error.message);

        }
    }

    
     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error}</p>;
     if (!product) return <p>Product not found</p>;

     console.log('Product',product);
     const {images ,_id,title,price,description,colors,quantity,sizes,sizeChart,averageRating,highlights}=product;
     console.log('averageRating',averageRating)
     console.log('images',images)
   
    //  const displayedPrice=showDiscount ? formattedPrice(product.discountPrice):formattedPrice(product.price);
     console.log('price',price)
   
    //  const Price=formattedPrice(price)
    const Price=formattedPrice(price)
     



      const getDisplayedPrice = (product) => {
             const currentDate = new Date();
             const discountStartDate = product.discountStartDate ? new Date(product.discountStartDate) : null;
             const discountEndDate = product.discountEndDate ? new Date(product.discountEndDate) : null;
     
             // Check if the product is in the discount period
             const isDiscountActive = discountStartDate && discountEndDate &&
                 currentDate >= discountStartDate && currentDate <= discountEndDate;
     
             const displayedPrice = isDiscountActive && product.discountPrice
                 ? formattedPrice(product.discountPrice)
                 : formattedPrice(product.price);
     
             const discountPercentage = isDiscountActive && product.discountPercentage
                 ? product.discountPercentage
                 : null;
     
             return { displayedPrice, discountPercentage };
         };


         const {displayedPrice,discountPercentage}=getDisplayedPrice(product)


  const submitFeedback=async(e)=>{
    e.preventDefault();

 
   
    if ((!rating || isNaN(rating)) && (!comment || comment.trim() === '')) {
        alert('Please provide either a rating or a comment.');
        return;
      }


      const feedback = {

        id:user.id,
            name:user.name,
            email:email,
      };

      // Add rating to feedback if provided
      if (rating && !isNaN(rating)) {
        feedback.rating = Number(rating);
      }
    
      // Add comment to feedback if provided
      if (comment && comment.trim()) {
        feedback.comment = comment.trim();
      } 

    try{

       
        const response=await axios.post(
            `${BASE_URL}/api/${id}/reviews`,
            {feedback,email},
           { headers: {
                authtoken: token,
                
              }},


        );
        if(response.status===201){
            alert("Review added successfully!");
                setRating(0);
                setComment("");
                 fetchReviews(); 
        }

    }catch(error){

        console.error("Error submitting review:", error.message);
            alert("Failed to submit review");

    }
  }


 
 const ImageCarousels=({images})=>{
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
            // className="relative w-full h-80  "
               className="relative w-full h-[200px] lg:h-[270px] aspect-square overflow-hidden bg-gray-200 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {images.length>0 ?(
                     <img
                     src={images[currentImageIndex]?.url}
                     alt={`Product Image ${currentImageIndex + 1}`}
                    //  className="h-full w-full object-cover object-center group-hover:opacity-"
                    // className='absolute w-full h-80 object-cover  transition-opacity  duration-1000 ease-in-out  group-hover:opacity-80 group-hover:border border-grey'
                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-80"
                 />

                ):(
                    <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">No Image</span>
                </div>
                )}
            </div>
        )
    }

  
const ImageCarousel = ({ images }) => {
    const [zoom, setZoom] = useState(false);
    const [zoomImage, setZoomImage] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
    const sliderRef = useRef(null); // Create a ref for the slider
  
    const handleMouseMove = (e, imageUrl) => {
      setZoom(true);
      setZoomImage(imageUrl);
  
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setOffset({ x, y });
    };
  
    const handleMouseLeave = () => {
      setZoom(false);
      setZoomImage(null);
    };
  
    const handleThumbnailClick = (index) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(index); // Programmatically change the slide to the clicked thumbnail
      }
      setCurrentSlide(index); // Update the currentSlide state
    };
  
    // Slick settings
    const settings = {
      dots: true, // Enable dots (pagination)
      infinite: images.length > 1, // Disable infinite loop if there's only one image
      speed: 500,
      slidesToShow: 1, // Display one image at a time
      slidesToScroll: 1, // Scroll one image at a time
      autoplay: true,
      autoplaySpeed: 3000, // Autoplay interval in milliseconds
      arrows: true, // Show arrows for navigation
      beforeChange: (current, next) => setCurrentSlide(next), // Update current slide when the main carousel changes
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Adjust for smaller screens
          },
        },
      ],
    };
  
    return (
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {/* Main Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {images.map((i, index) => (
            <div
              key={i.public_id}
              style={{
                position: "relative",
                backgroundImage: `url(${i.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "400px", // Adjust the carousel height as needed
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseMove={(e) => handleMouseMove(e, i.url)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image for Carousel */}
              <img
                src={i.url}
                alt="Carousel slide"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensures the image fits within the container without stretching
                  borderRadius: "8px", // Optional: add rounded corners to the image
                }}
              />
  
              {/* Zoom Effect on Hover */}
              {zoom && zoomImage === i.url && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${i.url})`,
                    backgroundSize: "200%", // Zoom effect size
                    backgroundPosition: `${offset.x}% ${offset.y}%`,
                    pointerEvents: "none", // Prevent the zoomed image from interfering with carousel navigation
                  }}
                />
              )}
            </div>
          ))}
        </Slider>
  
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            {images.map((i, index) => (
              <div
                key={i.public_id}
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 5px",
                  cursor: "pointer",
                  borderRadius: "8px", // Optional: rounded corners for thumbnails
                  overflow: "hidden",
                  border: index === currentSlide ? "2px solid #000" : "none", // Highlight the active thumbnail
                }}
                onClick={() => handleThumbnailClick(index)} // Update main carousel when thumbnail is clicked
              >
                <img
                  src={i.url}
                  alt={`Thumbnail ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Make sure the thumbnail images are properly cropped
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  





    return(
      <section>
        <div className="text-md breadcrumbs">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>
                    Products
                    </Link>
                </li>
            </ul>

        </div>
        <div 
        // className="mt-6 w-[300px] grid
        // // sm:w-[300px] md:w-[600px] 
        // sm:w-10 md:w-20
        //  gap-y-7 
        // // lg:w-[1200px]
        // lg:w-40  lg:grid
        //  lg:grid-cols-2 lg:gap-x-10"
        className="mt-6 w-full sm:w-full md:w-3/5 lg:w-full lg:grid gap-y-7 lg:grid-cols-2 lg:gap-x-10"
         >
           <ImageCarousel  images={images}/>
              {/* PRODUCTS */}
            <div>
              
                <h1 className="capitalize text-2xl font-size-20px font-weight-500 font-semibold">{title}</h1>

                {averageRating >0 && (
    <div className="flex items-center">
        <ReactStars
            count={5}
            value={averageRating}
            edit={false} // Set to false to disable user editing
            size={24} // Adjust the size of the stars
            color2={'#ffd700'} // Color for filled stars
            color1={'#e4e5e9'} // Color for empty stars
        />
       
    </div>
)}

                
              
                <p className="mt-1 text-md  pb-6">
               

                    { Price !==displayedPrice ? (
                      <span>
                      <span className="line-through mr-2">{Price}</span>
                     <span className="font-bold">{displayedPrice}</span> 
                    </span>

                    ):(
                      <span className="font-bold">{Price}</span>
                    )}
                     {/* {showDiscount && (
                        <span className="text-sm text-red-500 ml-2">
                            -{discountPercentage}%
                        </span>
                    )} */}

                </p>

                <hr/>

                <p className="mt-6 leading-8 font-normal tracking-tighter">{description || ''}</p>

              

<div className="mt-5 mb-7">
 

  <div className="mt-4">
    <ul className="list-disc space-y-2 pl-4 text-sm">
      {Array.isArray(product.highlights) && product.highlights.length > 0 ? (
        product.highlights.map((highlight, index) => {
          const trimmedHighlight = highlight.trim(); // Trim whitespace
          return trimmedHighlight ? ( // Check if the highlight is not empty
            <li key={index} className="text-gray-600 font-normal tracking-tighter">
              {trimmedHighlight}
            </li>
          ) : null;
        })
      ) : (
       
          <span className="text-gray-600"></span>
       
      )}
    </ul>
  </div>
</div>

<hr/>


                {/* COLORS */}
                <div className="mt-6">
                    <h4 className="text-md font-normal   tracking-tighter capitalize">
                        colors:

                    </h4>
                   

<div className="mt-2">
  {colors.map((color) => {
    //const isKnownColor = ['Yellow', 'Lightblue', 'Lightgreen', 'White', 'Pink','Black','Blue','Green','Purple'].includes(color);
    const lightColors = ['Yellow', 'Lightblue', 'Lightgreen', 'White', 'Pink']; // Define light colors
    const darkColors = ['Black', 'Navy', 'Darkgreen', 'Brown']; // Define dark colors
    const isLightColor = lightColors.includes(color);
    const isDarkColor = darkColors.includes(color);
    
    return (
      <button
        key={color}
        type="button"
        className={`badge w-auto h-8 mr-2  items-center justify-center ${
          color === productColor && 'border-2 border-secondary'
        }`}
        // style={{
       

       
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => setProductColor(color)}  // Set selected color on click
      >
        {color}  {/* Display the color name inside the button */}
      </button>
    );
  })}
</div>


                </div>
                {/* {Size} */}
                <div className="mt-3">
                    <h4 className="text-md font-normal tracking-tighter capitalize">
                        sizes:

                    </h4>
                    <div className="mt-2 flex flex-wrap gap-4">
                        {sizes.map((size)=>{
                            return<button
                             key={size}
                              type="button" 
                              className={`badge  aspect-square w-10  flex items-center justify-center text-sm font-normal ${
                                size===productSize
                                ? 'border-2 border-black'
                                :'border border-gray-100'
                                 && 'border-2 '
                              }`}
                            //   style={{backgroundSize:size}}
                              onClick={()=>setProductSize(size)}
                              >
                             {size}
                            </button>
                        })}

                    </div>

                </div>

               
               
<div className="form-control w-full max-w-xs">
  <label className="label" htmlFor="amount">
    <h4 className="text-md font-normal tracking-tighter capitalize">
      Amount:
    </h4>
  </label>

  {/* Square Button with Three Sections */}
  <div className="flex justify-center items-center mt-2 border border-gray-300 rounded-lg w-24 h-12">
    {/* Decrement Button */}
    <button
      type="button"
      className="w-1/3 h-full text-center text-gray-600 hover:bg-gray-200"
      onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
      disabled={amount <= 1}
    >
      -
    </button>

    {/* Quantity Display */}
    <span className="w-1/3 h-full flex justify-center items-center text-md font-medium text-gray-800 border-x border-gray-300">
      {amount}
    </span>

    {/* Increment Button */}
    <button
      type="button"
      className="w-1/3 h-full text-center text-gray-600 hover:bg-gray-200"
      onClick={() => setAmount((prev) => Math.min(prev + 1, quantity))}
      disabled={amount >= quantity}
    >
      +
    </button>
  </div>
</div>



                {/* <div className="mt-2"><MeasurementList/></div> */}

                {/* Size Chart Table */}

                {/* {sizeChart &&(
                    <div className="size-chart mt-6">
                        <h3 className="text-xl font-bold mb-4">Size Chart</h3>
                        <table className="table-auto w-full text-left border-collapse bg-gray-100 rounded-md overfloew-hidden shadow-lg">
                            <thead className="bg-gray-200">
                                <tr className="border-b border-gray-300">
                                   
                                    {sizeChart.columns.map((col,index)=>(
                                        <th key={index} className="px-4 py-3 text-gray-700 font-semibold">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sizeChart.rows.map((row,rowIndex)=>(
                                    <tr key={rowIndex} className="hover:bg-gray-50 border-b border-gray-200">

                                     
                                        {sizeChart.columns.map((col,colIndex)=>(
                                            <td key={colIndex} className="px-4 py-2 text-gray-600">{row[col]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                )} */}

                {/* Dynamic */}

               <SizeChartComponent sizeChart={sizeChart}/>


                {/* CART BTN */}
                <div className="mt-10">
                   
                     {quantity > 0 ? (
                            <button 
                            className="btn btn-primary btn-md" 
                            onClick={addToCart}
                            disabled={quantity===0 || amount>quantity}>
                                Add to Cart
                            </button>
                        ) : (
                            <button className="btn btn-primary btn-md" disabled>
                                Sold Out
                            </button>
                        )}
                        <button
                         className="btn btn-primary btn-md ml-4"
                          onClick={handleAddToWishList}
                         >Add to wishList</button>

                </div>
                <div className="mt-10">
        <h3 className="text-xl font-bold">Leave Your Feedback</h3>

        {/* Star Rating */}

        <form onSubmit={submitFeedback}>

        <ReactStars
        count={5}
         onChange={(newRating)=>setRating(newRating)}
        size={24}
        activeColor="#ffd700"
        value={rating}

        />

        {/* Comment Box */}

        <div className="mt-4">
            <textarea
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            rows={4}
            className="textarea textarea-bordered w-full"
            placeholder="Leave a comment..."
            >

            </textarea>

        </div>
        {/* Submit Button */}

        <div className="mt-4">
            <button className="btn" type="submit" >
                Submit Feedback

            </button>
        </div>

        </form>

      
         
       </div>
               

            </div>
            <div className="mb-15">
            <Tabs type="card">
                    
                    <TabPane tab="More" key="2">
                        Call use on xxxx xxx xxx to learn more about this product.
                    </TabPane>
                </Tabs>
            </div>
          


        </div>
       <br/>
       <br/>

        {/* Product Review */}

        <div className="mt-10">
                    <SectionTitle text="Customer Reviews"/>
                    {reviews.length>0?(
                        reviews.map((review)=>(
                            <div key={review._id} className="mb-4">
                                <p ><strong>{review.user.name}</strong></p>
                                <ReactStars value={review.rating} edit={false}/>
                                <p>{review.comment}</p>

                            </div>
                        ))

                    ):(
                        <p>No reviews yet</p>
                    )}

                </div>

       <div className="mt-10">
        {/* <h3 className="text-xl font-bold">Leave Your Feedback</h3> */}

        {/* Star Rating */}

        <form onSubmit={submitFeedback}>

       

        </form>

      
         
       </div>
       <br/>

      

         <h1 className="text-center text-sm">
         <SectionTitle text="You May Also Like"/>
         </h1>
         <div
        //   className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-2xl lg:px-8"
        // className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
         className="mx-auto max-w-[1199px]  px-4 py-8  sm:px-6 sm:py-12 lg:px-8"
          >
            <div
             className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8"
            >
            {related.length ?(
               related.map((r,index)=>{
                // const {title,price,_id,quantity,images}=r
                const { title, price, images, _id, quantity,discountStartDate,discountEndDate,averageRating } = r;
                const {displayedPrice,discountPercentage}=getDisplayedPrice(r)
                console.log('title',title)
                const image=images[0]?.url;
                console.log('image',image)

                const Price=formattedPrice(price)
  
          return(
         
          <div
          // className="mx-auto max-w-[1199px]  px-4 py-8  sm:px-6 sm:py-12 lg:px-8" 
          >
          <div 
          //  className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8"
          >
             <animated.div
  key={_id}
  style={springs[index]}
  className="w-full h-full flex flex-col  "
>
  {/* Image Container */}
  <div className="relative group max-w-[160px] max-h[90px] lg:max-w-[250px] lg:ml-7  lg:max-h-[250px]">
    <Link to={`/products/${_id}`}>
      {/* {image ? (
        <img
          src={image}
          alt={title}
          className="w-80 h-80 object-cover group-hover:opacity-75"
        />
      ) : (
        <div className="w-80 h-80 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">No Image</span>
        </div>
      )} */}

      <ImageCarousels images={images}/>

      {/* Discount or Sold Out Badge */}
      {discountPercentage ? (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded">
          -{discountPercentage}%
        </div>
      ) : (
        quantity === 0 && (
          <div
            className="absolute top-2 left-2 bg-gray-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded"
          >
            Sold Out
          </div>
        )
      )}
    </Link>

    {/* Wishlist and Quick View Buttons */}
    <div className="absolute flex flex-col bottom-2 right-2 opacity-0 group-hover:opacity-85 transition-opacity duration-300">
      <div className=" flex bg-gray-800 rounded p-2 space-y-2 flex-col">
        <ul>
      <li>
        
        <button
          className="text-white py-1 px-1 lg:py-1 lg:px-2 rounded hover:bg-gray-600 rounded"
          onClick={() => handleAddToWishList(r)}
          data-tooltip-id={`wishlist-tooltip-${_id}`}
        >
          {wishlist.includes(_id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
        <Tooltip
          id={`wishlist-tooltip-${_id}`}
          place="top"
          effect="solid"
          content={wishlist.includes(_id) ? 'Added to Wishlist' : 'Add to Wishlist'}
        />
        </li>
        <li>
        <button
          className="text-white py-1 px-1 lg:py-1 lg:px-2 rounded hover:bg-gray-600 hover:shadow-lg transition-all"
          onClick={() => handleQuickView(r)}
        >
          <ZoomIn />
        </button>
        </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Title, Rating, and Price */}
  <Link to={`/products/${_id}`} className="mt-4 text-center w-full">
    {/* Title */}
    <h3 className="text-md font-medium text-gray-900 truncate">{title}</h3>

    {/* Rating */}
    {averageRating > 0 && (
      <div className="flex justify-center my-1">
        <ReactStars
          count={5}
          value={averageRating}
          edit={false}
          size={24}
          color2="#ffd700"
          color1="#e4e5e9"
        />
      </div>
    )}

    {/* Price */}
    <p className="text-lg font-semibold text-gray-600">
      {Price !== displayedPrice ? (
        <>
          <span className="line-through text-sm text-gray-400 mr-2">{Price}</span>
          {displayedPrice}
        </>
      ) : (
        Price
      )}
    </p>
  </Link>
</animated.div>
          </div>
          </div>
         

          )

               })

            ):(
                <div><div className="text-center col">No Products Found</div></div>
            )}
            </div>
           
           
            {isModalOpen && selectedProduct && (
  <ProductQuickView
    isOpen={isModalOpen}
    classNames={classNames}
    product={selectedProduct}
    onClose={closeModal}
  />
)}

         </div>
    
         
      
                    
            
      </section>
    )
}

export default SingleProduct;
