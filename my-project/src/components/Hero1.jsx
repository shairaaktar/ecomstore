//  import { Link } from "react-router-dom";
//  import {Carousel} from 'react-responsive-carousel'
//  import 'react-responsive-carousel/lib/styles/carousel.min.css'
//  import axios from "axios";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { useState,useEffect } from "react";
//  import img1 from '../images/img4.jpg'
//  import img2 from '../images/img5.jpg'
//  import img3 from '../images/img6.jpg'

//  // import img2 from '../images/download (2)';

//  const carousalImages=[img1, img2,img3 ];
//  const Hero=()=>{
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchCarouselImages();
//       }, []);
    
//       const fetchCarouselImages = async () => {
//         try {
//           const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//           const images = response.data.map(image => ({
//             url: image.imageUrl,
//             id: image._id
//           }));
//           setImages(images);
//           console.log('images',images)
//         } catch (error) {
//           toast.error("Failed to fetch carousel images");
//         }
//       };
//      return(
//         <div className="grid lg:grid-cols-2 gap-24 items-center">
//          <div>
//              <h1 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-6xl">
//                 Easy Breezy Safe Shopping
//              </h1>
//              <p className="mt-8 max-w-xl text-lg leading-8">
//                  Lorem ipsum dolor sit amet consectetur 
//                  adipisicing elit. Ratione, magni officia.
//                   Deleniti possimus architecto voluptatem,
//                   nostrum ipsam, officiis ratione asperiores
//                    sapiente doloremque molestias tenetur
//                     molestiae, beatae voluptatum exercitationem
//                   repellendus dolore consequuntur cupiditate adipisci
//                    inventore veritatis quibusdam! Nesciunt minus ipsum suscipit.
//              </p>
//              <div className="mt-10">
//                  <Link to='/products' className="btn btn-primary">
//                  OUR PRODUCTS
//                  </Link>

//              </div>
//          </div>
//          <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-meutral rounded-box">
//             <Carousel 
//             showThumbs={false}
//             infiniteLoop={true}
//             autoPlay={true}
//             interval={2000}
//             showArrows={true}
//             stopOnHover={true}
//             showStatus={false}
//             className="carousel"
//            > 
//            {/* {carousalImages.map((image)=>{
//                  return(
//                      <div key={image} className="carousel-item">
//                          <img
//                          src={image} alt="vintage"
//                          className="rounded-box h-full w-80 object-cover"
                        
//                          />

//                      </div>
//                  )
//               })} */}

// {images.length > 0 ? (
//               images.map((image, index) => (
//                 <div key={image.id || index} className="carousel-item">
//                   <img
//                     src={`http://localhost:8001/${image.url}`}
//                     alt={`carousel-${index}`}
//                     // className="carousel-img"

//                      className="rounded-box h-full w-80 object-cover"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p>Loading images...</p>
//             )}

//             </Carousel> 
           
//          </div>

//         </div>
//      )
//  }
//  export default Hero;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';

// const Hero = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchCarouselImages();
//     }, []);

//     const fetchCarouselImages = async () => {
//         try {
//             const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//             const images = response.data.map(image => ({
//                 url: image.imageUrl,
//                 id: image._id
//             }));
//             setImages(images);
//             console.log('images', images);
//         } catch (error) {
//             toast.error("Failed to fetch carousel images");
//         }
//     };

//     return (
//         <div className="h-[28rem]">
//             <Carousel 
//                 // showThumbs={false}
//                 // infiniteLoop={true}
//                 // autoPlay={true}
//                 // interval={2000}
//                 // showArrows={true}
//                 // stopOnHover={true}
//                 // showStatus={false}
//                 // className="carousel"

//                 showThumbs={false}
//             infiniteLoop={true}
//              useKeyboardArrows ={true}
//              autoPlay={true}
//              interval={2000}
//               showArrows={true}
//              stopOnHover={true}
//              centerMode={true}
           
//              showStatus={false}
//              // className="carousel-wrapper h-full"
//              // className="h-full"
//             >
//                 {images.length > 0 ? (
//                     <div className="flex">
//                         {images.map((image, index) => (
//                             <div key={image.id || index} className="w-1/4">
//                                 <img
//                                     src={`http://localhost:8001/${image.url}`}
//                                     alt={`carousel-${index}`}
//                                     className="h-full w-full object-cover rounded-box"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>Loading images...</p>
//                 )}
//             </Carousel>
//             <div className='mt-10' >
//             <Link to='/products' className="btn btn-primary">
//                 OUR PRODUCTS
//                 </Link>

//             </div>
//         </div>
//     );
// }

// export default Hero;
 

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';

// const Hero = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchCarouselImages();
//     }, []);

//     const fetchCarouselImages = async () => {
//         try {
//             const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//             const images = response.data.map(image => ({
//                 url: image.imageUrl,
//                 id: image._id
//             }));
//             setImages(images);
//             console.log('images', images);
//         } catch (error) {
//             toast.error("Failed to fetch carousel images");
//         }
//     };

//     return (
//        <div className='mt-20'>
//          <div className="h-[28rem]"> {/* Set the overall height of the carousel */}
//             <Carousel 
//                 showThumbs={false}
//                 infiniteLoop={true}
//                 useKeyboardArrows={true}
//                 autoPlay={true}
//                 interval={3000}
//                 showArrows={true}
//                 stopOnHover={true}
//                 showStatus={false}
//                 centerSlidePercentage={30}
//                 centerMode={true}
               
//             >
//                 {images.length > 0 ? (
//                     images.map((image, index) => (
//                         <div key={image.id || index}>
//                             <img
//                                 src={`http://localhost:8001/${image.url}`}
//                                 alt={`carousel-${index}`}
//                                 className="h-[20rem] w-auto object-cover rounded-lg" // Adjust height for smaller images
//                             />
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading images...</p>
//                 )}
//             </Carousel>
//             <div className='mt-20'>
//                 <Link to='/products' className="btn btn-primary">
//                     OUR PRODUCTS
//                 </Link>
//             </div>
//         </div>
//        </div>
//     );
// }

// export default Hero;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';

// const Hero = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchCarouselImages();
//     }, []);

//     const fetchCarouselImages = async () => {
//         try {
//             const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//             const images = response.data.map(image => ({
//                 url: image.imageUrl,
//                 id: image._id
//             }));
//             setImages(images);
//             console.log('images', images);
//         } catch (error) {
//             toast.error("Failed to fetch carousel images");
//         }
//     };

//     return (
//        <div className='mt-20'>
//          <div className="h-[28rem]"> {/* Set the overall height of the carousel */}
//             <Carousel 
//                 showThumbs={false}
//                 infiniteLoop={true}
//                 useKeyboardArrows={true}
//                 autoPlay={true}
//                 interval={3000}
//                 showArrows={true}
//                 stopOnHover={true}
//                 showStatus={false}
//                 centerSlidePercentage={30}
//                 centerMode={true}
               
//             >
//                 {images.length > 0 ? (
//                     // <div className='flex'>
//                         images.map((image, index) => (
//                         <div key={image.id || index} className="flex-none w-3/4">
//                             <img
//                                 src={`http://localhost:8001/${image.url}`}
//                                 alt={`carousel-${index}`}
//                                 className="h-[20rem] w-auto object-cover rounded-lg" // Adjust height for smaller images
//                             />
//                         </div>
//                     ))
//                     // </div>
//                 ) : (
//                     <p>Loading images...</p>
//                 )}
//             </Carousel>
//             {/* <div className='mt-20'>
//                 <Link to='/products' className="btn btn-primary">
//                     OUR PRODUCTS
//                 </Link>
//             </div> */}
//         </div>
//        </div>
//     );
// }

// export default Hero;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCarouselImages();
    }, []);

    const fetchCarouselImages = async () => {
        try {
            const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
            const images = response.data.map(image => ({
                url: image.imageUrl,
                id: image._id
            }));
            setImages(images);
            console.log('images', images);
            setLoading(false)
        } catch (error) {
            toast.error("Failed to fetch carousel images");
            setLoading(false)
        }
    };

    return (
       <div className='mt-20 sm:mt-2'>
         <div className="h-[20rem] sm:h-[16rem] md:h-[20rem] lg:h-[28rem]"> {/* Set responsive height */}
            {loading ? (
                 <div className="flex justify-center items-center h-full">
                 <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-12 h-12"></div> {/* Customize the spinner */}
             </div>
            ):(
            <Carousel 
                showThumbs={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={3000}
                showArrows={true}
                stopOnHover={true}
                showStatus={false}
                centerSlidePercentage={30}
                centerMode={true}
                swipeable={true}
                // dynamicHeight={true}  
                transitionTime={200}
            >
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={image.id || index}
                        //  className="flex-none w-full sm:w-3/4 md:w-3/4 lg:w-3/4"
                        className='flex-none w-3/4'
                        > 
                            <img
                                src={`http://localhost:8001/${image.url}`}
                                alt={`carousel-${index}`}
                                className="h-[16rem] sm:h-[14rem] md:h-[16rem] lg:h-[19rem] w-auto object-cover rounded-lg" // Adjust height for mobile
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </Carousel>
        )}
        </div>
       </div>
    );
}

export default Hero;
