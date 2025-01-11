import { FeaturedProducts,NewArrivals,Categories,FeaturedCategory, HeroZero,Inceptives, HeroSection, CustomCarousel } from "../components";
import { customFetch } from "../utils";
const url='/products?featured=true';


export const loader=async ()=>{
    const response=await customFetch(url);
    const products=response.data.data;
    console.log(products)
    return{products};
}

const Landing=()=>{

    return(
       <>
        {/* <HeroZero/>  */}
        {/* <Hero/>  */}
       {/* <Hero1/> */}
        <HeroSection/> 
       
       <FeaturedCategory/>
      
       {/* <FeaturedProducts/> */}
       {/* <Categories/> */}
       <NewArrivals/>
       <Inceptives/>

       </>
    )
}

export default Landing;