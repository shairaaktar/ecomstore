//  import { Link } from "react-router-dom";
// //  import {Carousel} from 'react-responsive-carousel'
// //  import 'react-responsive-carousel/lib/styles/carousel.min.css'
//  import img1 from '../images/img4.jpg'
//  import img2 from '../images/img5.jpg'
//  import img3 from '../images/img6.jpg'

//  // import img2 from '../images/download (2)';

//  const carousalImages=[img1, img2,img3 ];
//  const Hero=()=>{
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
//            {/* <Carousel 
//             showThumbs={false}infiniteLoop useKeyboardArrows autoPlay
//            > */}
//            {carousalImages.map((image)=>{
//                  return(
//                      <div key={image} className="carousel-item">
//                          <img
//                          src={image} alt="vintage"
//                          className="rounded-box h-full w-80 object-cover"
                        
//                          />

//                      </div>
//                  )
//               })}
//            {/* </Carousel> */}
           
//          </div>

//         </div>
//      )
//  }
//  export default Hero;

// // import { Link } from "react-router-dom";
// // import {Carousel} from 'react-responsive-carousel'
// // import 'react-responsive-carousel/lib/styles/carousel.min.css'
// // import img1 from '../images/img4.jpg'
// // import img2 from '../images/img5.jpg'
// // import img3 from '../images/img6.jpg'
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import styled from 'styled-components'

// // // import img2 from '../images/download (2)';

// // const carousalImages=[img1, img2,img1,img1,img2 ];
// // const Hero=()=>{
// //     const [images,setImages]=useState([]);
// //     const [currentIndex,setCurrentIndex]=useState(0);

// //     useEffect(()=>{
// //       const interval=setInterval(()=>{

// //         setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length);
// //       },2000)


// //       return()=>clearInterval(interval);
// //     },[images.length])

// //     useEffect(()=>{
// //         fetchCarouselImages();

// //     },[])


// //     // const fetchCarouselImages=async()=>{
// //     //     try{
// //     //         const response=await axios.get("http://localhost:8001/api/admin/carousel-images");
// //     //         // const images=response.data.map(image=>({
// //     //         //     url: image.imageUrl,
// //     //         //     id: image._id
// //     //         // }))
// //     //          setImages(Array.isArray(response.data)?response.data:[]);
// //     //         // setImages(images)
// //     //         console.log("Fetched images:",response);


// //     //     }catch(error){
// //     //         toast.error('Failed to fetch carousel images');

// //     //     }
// //     // }

// //     const fetchCarouselImages = async () => {
// //         try {
// //           const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
// //         //   setImages(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
// //         const images=response.data.map(image=>({
// //             url:image.imageUrl,
// //             id:image._id
// //         }))
// //           console.log("Fetched images: ", response.data);
// //           setImages(images)
// //         } catch (error) {
// //           toast.error("Failed to fetch carousel images");
// //         }
// //       };
    

// //     return(
// //       <Wrapper>
// //         <div className="carousel-container">
// //           <div className="carousel-wrapper">
// //           <div
// //          className="grid lg:gap-24  items-center"
       

// //         >
// //         <div className="hidden h-[28rem] lg:carousel carousel-center  space-x-2 bg-meutral rounded-box">
// //            <Carousel 
// //             showThumbs={false}
// //            infiniteLoop={true}
// //             useKeyboardArrows ={true}
// //             autoPlay={true}
// //             interval={2000}
// //              showArrows={true}
// //             stopOnHover={true}
// //             centerMode={true}
// //             centerSlidePercentage={30}
// //             showStatus={false}
// //              className="carousel-wrapper h-full"
// //             // className="h-full"


//           > 
//           {/* {carousalImages.map((image)=>{
//                 return(
//                     <div key={image} className="carousel-item">
//                         <img
//                         src={image} alt="vintage"
//                         className="rounded-box h-full w-80 object-cover"
//                        // className="w-100 h-100 object-cover"
                        
//                         />

//                     </div>
//                 )
//              })} */}

//              {images.length>0?(
//                 images.map((image,index)=>(
//                     // const formattedImageUrl = image.imageUrl.replace(/\\/g, '/');
//                     // return(
//                         <div key={image.id||index} className="carousel-item">
//                         <img
//                         // src={image.url}
//                         src={`http://localhost:8001/${image.url}`}
//                         alt={`carousel-${index}`}
//                         className="rounded-box h-full w-80 object-cover"
//                         />
//                     </div>
//                     // )
                   

//                 ))

//              ):(
//                 <p>Loading images...</p>

//              )}
//            </Carousel> 
           
//         </div>
//         <div 
//         className="mt-0"
//         >
//                 <Link to='/products' className="btn btn-primary">
//                 OUR PRODUCTS
//                 </Link>

//             </div>

//        </div>
//           </div>
//         </div>
//       </Wrapper>
//     )
// }

// const Wrapper=styled.main`

// // .carousel-wrapper{
// // perspective:1000px;
// // }

// // .carousel-container {
// //     position: relative; 
// //   }

// // .carousel .carousel-item{
// // transform:rotateY(0deg);
// // transition:transform 1s ease-in-out;
// // }

// // .carousel .carousel-item img{
// // border-radius:25px;
// // box-shadow:0 4px 15px rgba(0,0,0,0.1);
// // }

// //  .carousel-center .carousel-item{
// // // position:absolute;
// //  left:50%;
// //  top:50%;
// //  transform-origin:center center;
// //  transition:transform 0.8s ease;

// //  }

// // .carousel-center .carousel-item {
// //   transform-style: preserve-3d;
// //   transition: transform 1s ease-in-out;
// // }

// // .carousel-center .carousel-item:nth-child(1) {
// //   transform: rotateY(-40deg) translateZ(-300px); /* Adjust angle and distance */
// // }

// // .carousel-center .carousel-item:nth-child(2) {
// //   transform: rotateY(0deg) translateZ(0px); /* Center item */
// // }

// // .carousel-center .carousel-item:nth-child(3) {
// //   transform: rotateY(40deg) translateZ(-300px); /* Right item */
// // }

// //  .carousel-wrapper {
// //     perspective: 1000px;
// //   }




//   .carousel-container {
//     // position: relative;
//      perspective: 1500px;
//   }

//   .carousel-wrapper {
//     position: relative;
//     height: 28rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transform-style: preserve-3d;
//   }

//   // .carousel .carousel-item {
//   //   //position: absolute; /* Now this will work */
//   //   left: 50%;
//   //   top: 50%;
//   //   transform: translate(-50%, -50%) rotateY(0deg); /* Center and transform */
//   //   transition: transform 1s ease-in-out;
//   // }
  

//   .carousel .carousel-item {
//    // position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 50%;
//     left: 50%;
//     transform-origin: center center;
//     transform-style: preserve-3d;
//     transform: rotateY(0deg) translateZ(0);
//     transition: transform 1s ease-in-out;
//   }

//    .carousel-item:nth-child(1) {
//     transform: rotateY(-60deg) translateZ(300px);
//   }

//   .carousel-item:nth-child(2) {
//     transform: rotateY(0deg) translateZ(500px);
//   }

//   .carousel-item:nth-child(3) {
//     transform: rotateY(60deg) translateZ(300px);
//   }


//    .carousel .carousel-item img {
//      border-radius: 25px;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   }

//   // .carousel-center .carousel-item {
//   //   transform-origin: center center;
//   //   transition: transform 0.8s ease;
//   // }

//   // .carousel-center .carousel-item:nth-child(1) {
//   //   transform: rotateY(-40deg) translateZ(-300px); /* Adjust angle and distance */
//   // }

//   // .carousel-center .carousel-item:nth-child(2) {
//   //   transform: rotateY(0deg) translateZ(0px); /* Center item */
//   // }

//   // .carousel-center .carousel-item:nth-child(3) {
//   //   transform: rotateY(40deg) translateZ(-300px); /* Right item */
//   // }

//    .carousel .carousel-item img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 25px;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   }



// `
// export default Hero;

// import { Link } from "react-router-dom";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img1 from '../images/img4.jpg';
// import img2 from '../images/img5.jpg';
// import img3 from '../images/img6.jpg';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import styled from 'styled-components';

// const carousalImages = [img1, img2, img1, img1, img2];
// const Hero = () => {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   useEffect(() => {
//     fetchCarouselImages();
//   }, []);

//   const fetchCarouselImages = async () => {
//     try {
//       const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//       const images = response.data.map(image => ({
//         url: image.imageUrl,
//         id: image._id
//       }));
//       setImages(images);
//     } catch (error) {
//       toast.error("Failed to fetch carousel images");
//     }
//   };

//   return (
//     <Wrapper>
//       <div className="carousel-container">
//         <div className="carousel-wrapper">
//           <Carousel
//             showThumbs={false}
//             infiniteLoop={true}
//             autoPlay={true}
//             interval={2000}
//             showArrows={true}
//             stopOnHover={true}
//             showStatus={false}
//             className="carousel"
//           >
//             {images.length > 0 ? (
//               images.map((image, index) => (
//                 <div key={image.id || index} className="carousel-item">
//                   <img
//                     src={`http://localhost:8001/${image.url}`}
//                     alt={`carousel-${index}`}
//                     className="carousel-img"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p>Loading images...</p>
//             )}
//           </Carousel>
//         </div>
//         <div className="mt-0">
//           <Link to='/products' className="btn btn-primary">
//             OUR PRODUCTS
//           </Link>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// // const Wrapper = styled.main`
// //    .carousel-container {
// //      perspective: 1000px;
// //      width: 100%;
// //      max-width: 1200px;
// //      margin: 0 auto;
// //    }

// //   // .carousel-wrapper {
// //   //   height: 28rem;
// //   //   display: flex;
// //   //   justify-content: center;
// //   //    align-items: center;
// //   //   position: relative;
// //   // }

// //    .carousel .carousel-item {
// //     // width: 300px;
// //      height: 50%;
// //      transform-origin: center center;
// //      transform-style: preserve-3d;
// //      transition: transform 1s ease-in-out;
// //    }

// //    .carousel .carousel-item:nth-child(1) {
// //      transform: rotateY(-40deg) translateZ(200px);
// //    }

// //   .carousel .carousel-item:nth-child(2) {
// //     transform: rotateY(0deg) translateZ(400px);
// //   }

// //  .carousel .carousel-item:nth-child(3) {
// //    transform: rotateY(40deg) translateZ(200px);
// //  }

// //    .carousel .carousel-img {
// //      width: 100%;
// //     height: 100%;
// //      object-fit: cover;
// //      border-radius: 20px;
// //      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //    }

  

// //    .carousel-container {
// //      perspective: 1500px;
// //      width: 100%;
// //      max-width: 1200px;
// //      margin: 0 auto;
// //    }

// //    .carousel-wrapper {
// //      height: 28rem;
// //      display: flex;
// //       //justify-content: center;
// //     //  align-items: center;
// //      position: relative;
// //    }

// //    .carousel .carousel-item {
// //     // width: 300px;
// //      height: 100%;
// //      transform-origin: center center;
// //      transform-style: preserve-3d;
// //      transition: transform 1s ease-in-out;
// //    }

// //    .carousel .carousel-item:nth-child(1) {
// //      transform: rotateY(-20deg) translateZ(150px); /* Adjusted angle and distance */
// //    }

// //   .carousel .carousel-item:nth-child(2) {
// //     transform: rotateY(0deg) translateZ(300px); /* Reduced forward distance */
// //   }

// //    .carousel .carousel-item:nth-child(3) {
// //      transform: rotateY(20deg) translateZ(150px); /* Adjusted angle and distance */
// //    }

// //    .carousel .carousel-img {
// //      width: 100%;
// //      height: 100%;
// //      object-fit: cover;
// //       border-radius: 20px;
// //      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //    }
// // `;


// // const Wrapper = styled.main`
// //   .carousel-container {
// //     perspective: 1500px; /* Increased perspective for more depth */
// //     width: 100%;
// //     max-width: 1200px;
// //     margin: 0 auto;
// //   }

// //   .carousel-wrapper {
// //     height: 28rem;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: relative;
// //   }

// //   .carousel .carousel-item {
// //     width: 300px;
// //     height: 100%;
// //     transform-origin: center center;
// //     transform-style: preserve-3d;
// //     transition: transform 1s ease-in-out;
// //   }

// //   /* Adjusted angles and translateZ for a more curved effect */
// //   .carousel .carousel-item:nth-child(1) {
// //     transform: rotateY(-30deg) translateZ(250px);
// //   }

// //   .carousel .carousel-item:nth-child(2) {
// //     transform: rotateY(0deg) translateZ(400px); /* Center item */
// //   }

// //   .carousel .carousel-item:nth-child(3) {
// //     transform: rotateY(30deg) translateZ(250px);
// //   }

// //   .carousel .carousel-img {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: cover;
// //     border-radius: 20px;
// //     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //   }
// // `;

// // const Wrapper = styled.main`
// //   .carousel-container {
// //     perspective: 800px; /* Slightly reduced perspective for less depth */
// //     width: 100%;
// //     max-width: 1200px;
// //     margin: 0 auto;
// //   }

// //   .carousel-wrapper {
// //     height: 28rem;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: relative;
// //   }

// //   .carousel .carousel-item {
// //     width: 300px;
// //     height: 100%;
// //     transform-origin: center center;
// //     transform-style: preserve-3d;
// //     transition: transform 1s ease-in-out;
// //   }

// //   /* Adjusted angles and translateZ for closer images */
// //   .carousel .carousel-item:nth-child(1) {
// //     transform: rotateY(-15deg) translateZ(150px); /* Reduced angle and Z distance */
// //   }

// //   .carousel .carousel-item:nth-child(2) {
// //     transform: rotateY(0deg) translateZ(200px); /* Reduced forward distance */
// //   }

// //   .carousel .carousel-item:nth-child(3) {
// //     transform: rotateY(15deg) translateZ(150px); /* Reduced angle and Z distance */
// //   }

// //   .carousel .carousel-img {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: cover;
// //     border-radius: 20px;
// //     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //   }
// // `;

// // const Wrapper = styled.main`
// //   .carousel-container {
// //     perspective: 500px; /* Further reduced perspective */
// //     width: 100%;
// //     max-width: 1200px;
// //     margin: 0 auto;
// //   }

// //   .carousel-wrapper {
// //     height: 28rem;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //      position: relative;
// //   }

// //    .carousel .carousel-item {
// //      width: 350px;
// //      height: 100%;
// //      transform-origin: center center;
// //     transform-style: preserve-3d;
// //      transition: transform 1s ease-in-out;
// //   }

// //   /* Tighter angles and reduced Z distance */
// //   // .carousel .carousel-item:nth-child(1) {
// //   //   transform: rotateY(-0deg) translateZ(10px); /* Closer angle and Z */
// //   // }

// //    .carousel .carousel-item:nth-child(1) {
// //     transform: translateZ(20px); /* Small Z distance */
// //   }

// //   // .carousel .carousel-item:nth-child(2) {
// //   //   transform: rotateY(0deg) translateZ(100px); /* Less forward distance */
// //   // }

// //   // .carousel .carousel-item:nth-child(3) {
// //   //   transform: rotateY(5deg) translateZ(20px); /* Closer angle and Z */
// //   // }

// //   .carousel .carousel-item:nth-child(2) {
// //     transform: translateZ(30px); /* Minimal forward distance */
// //   }

// //   .carousel .carousel-item:nth-child(3) {
// //     transform: translateZ(20px); /* Small Z distance */
// //   }

// //   .carousel .carousel-img {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: cover;
// //     border-radius: 20px;
// //     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //   }
// // `;

// // const Wrapper = styled.main`
// //   .carousel-container {
// //     width: 100%;
// //     max-width: 1200px;
// //     margin: 0 auto;
// //   }

// //   .carousel-wrapper {
// //     height: 28rem;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: relative;
// //   }

// //   .carousel .carousel-item {
// //     width: 100%; /* Full width for each image */
// //     height: 100%;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //   }

// //   .carousel .carousel-item img {
// //     width: 100%; /* Ensure the images fill the container */
// //     height: 100%;
// //     object-fit: cover;
// //     border-radius: 20px;
// //     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //   }

// //   .carousel .control-dots {
// //     margin-top: 10px; /* Reduce gap between carousel and dots */
// //   }
// // `;


// const Wrapper = styled.main`
//   .carousel-container {
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   .carousel-wrapper {
//     height: 28rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//   }

//   .carousel .carousel-item {
//     width: 100%; /* Full width for each image */
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .carousel .carousel-item img {
//     max-width: 80%; /* Reduce the size of images to 80% of container */
//     max-height: 80%; /* Maintain the aspect ratio and fit within 80% */
//     object-fit: cover;
//     border-radius: 20px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   }

//   .carousel .control-dots {
//     margin-top: 10px; /* Reduce gap between carousel and dots */
//   }
// `;



//  export default Hero;
