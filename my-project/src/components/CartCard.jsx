import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { formattedPrice } from "../utils";

const CartCard=({})=>{
    const {cartTotal ,tax, orderTotal}=useSelector(
        (state)=>state.cartState
    );

   const dispatch=useDispatch();

   const [shipping,setShipping]=useState(0);

   const shippingRates={
    insideDhaka:70,
    outsideDhaka:120,
   }
  
//    const handleShippingChange=(e)=>{
//     const selectedShipping=e.target.value;
//     if(selectedShipping==='insideDhaka'){
//         setShipping(shippingRates.insideDhaka)
//     }else if(selectedShipping=="outsideDhaka"){
//         setShipping(shippingRates.outsideDhaka);
//     }

//    };

   const totalPrice=cartTotal+shipping+tax;

 return(
   <div>
     <div className="card bg-base-200">
        <div className="card-body">
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>
                    Subtotal
                </span>
                <span className="font-medium">
                    {formattedPrice(cartTotal)}
                </span>
            </p>

           

            {/* <div className="my-4 flex justify-between">
                <label className="block mb-2 text-xs"> Shipping:</label>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center ml-12 text-sm">
                        <input
                        type="radio"
                        name="shipping"
                        value='insideDhaka'
                        onChange={handleShippingChange}
                        className="mr-2"

                       />
                   Inside Dhaka ({formatPrice(shippingRates.insideDhaka)})
                        </label>
                   
                
                <label className="flex items-center text-sm ml-12">
                    <input
                    type="radio"
                    name="shipping"
                    value="outsideDhaka"
                    onChange={handleShippingChange}
                     className="mr-2"
                    />
                    Outside Dhaka ({formatPrice(shippingRates.outsideDhaka)})
                </label>
            </div>
            </div>
              {/* <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>
                    Shipping
                </span>
                <span className="font-medium">
                    {formatPrice(shipping)}
                </span>
            </p>  */} 

            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>
                    Tax
                </span>
                <span className="font-medium">
                    {formattedPrice(tax)}
                </span>
            </p>

            <p className="flex justify-between text-sm mt-4 ">
                <span>
                    Ordertotal
                </span>
                <span className="font-medium">
                    {formattedPrice(totalPrice)}
                </span>
            </p>
             
        </div>

       
    </div>
     <div className="mt-4">
    
 </div>

 
   </div>
 )


}

export default CartCard;