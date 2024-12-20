//  import { Link } from "react-router-dom";
//  import {Carousel} from 'react-responsive-carousel'
//  import 'react-responsive-carousel/lib/styles/carousel.min.css'
//  import img1 from '../images/img4.jpg'
//  import img2 from '../images/img5.jpg'
//  import img3 from '../images/img6.jpg'

  

//  const carousalImages=[img1, img2,img3 ];
//  const HeroZero=()=>{
//      return(
//         <div className="grid lg:grid-cols-2 gap-24 items-center">
//          <div>
//              <h6 className="text-l font-bold tracking-tight sm:text-6xl">
//                 Easy Breezy Safe Shopping
//              </h6>
             
//          </div>
//          <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-meutral rounded-box">
//            {/* <Carousel 
//             showThumbs={false}infiniteLoop useKeyboardArrows autoPlay
//            > */}
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
//               <p>
//               Lorem ipsum dolor sit amet consectetur 
//                  adipisicing elit. Ratione, magni officia.
//                   Deleniti possimus architecto voluptatem,
//               </p>
//            {/* </Carousel> */}
           
//          </div>

//         </div>
//      )
//  }
//  export default HeroZero;

// import { Link } from "react-router-dom";

// const HeroZero = () => {
//     return (
//         <div className="grid lg:grid-cols-2  items-center ">
           
//             <div className="flex flex-col max-w-sm justify-center ">
//                 <h6 className="text-4xl font-bold tracking-tight pl-16">
//                     Easy Breezy Safe Shopping
//                 </h6>
               
                
           
//             </div>
           
//                 <p className="text-sm max-w-sm text-left pl-16">
//                     Shopping made easy and enjoyable with our curated collection. Discover a variety of products that suit your needs, all in one place.
//                 </p>
            
//         </div>
//     );
// }

// export default HeroZero;

import { Link } from "react-router-dom";

const HeroZero = () => {
    return (
        <div className="grid lg:grid-cols-2 mb-20 gap-24 items-center pl-32 pr-32 hidden lg:grid"> {/* Added padding on both sides */}
            {/* Left Side: Header and description */}
            <div className="flex flex-col justify-center pl-12">
                <h6 className="text-4xl max-w-sm font-bold tracking-tight">
                Quality Finds Just a Click Away!
                </h6>
               
                
            </div>

            {/* Right Side: Paragraph with reduced width and extra padding */}
            <div className="flex justify-center pr-12">
                <p className="text-sm max-w-sm text-left">
                    Shopping made easy and enjoyable with our curated collection. 
                    Discover a variety of products that suit your needs, all in one 
                    place.
                </p>
            </div>
        </div>
    );
}

export default HeroZero;
