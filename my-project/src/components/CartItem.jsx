import { formattedPrice,generateAmountOptions } from "../utils";
import {removeItem, editItem} from '../features/cart/cartSlice'
import { useDispatch } from "react-redux";

const CartItem=({cartItem}) =>{
    console.log('cartItems',cartItem)
    const dispatch=useDispatch()

    const removeItemFromTheCart=()=>{
        dispatch(removeItem({cartID}));
    }

    const handleAmount=(e)=>{
        dispatch(editItem({cartID, amount:parseInt(e.target.value),quantity:parseInt(quantity),productID}))

    }


    const {cartID ,title ,price,image,amount,company,productColor,productSize,quantity,productID}=cartItem;
    console.log('cartID ,title ,price,images,amount,company,productColor,productSize',cartID ,title ,price,image,amount,company,productColor,productSize,quantity)
   
    return(
       <article
       key={cartID}
       className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
       
       >
        {/* IMAGE */}
        {/* <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:w-32 sm:w-32 object-cover"
        />
         */}
          {image && (
              <img
                src={image}
                alt={title}
                // className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition duration-300'
               className="h-24 w-24 rounded-lg sm:w-32 sm:w-32 object-cover"
              />
            )}


        <div className="sm:ml-16 sm:w-48">
            {/* title */}
            <h3 className="capitalize font-medium">{title}</h3>
        
        {/* company*/}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">{company}</h4>
        {/* COLOR */}
            <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                color:
                <span 
                className="badge badge-sm "

                style={{backgroundColor:productColor}}
                >

                </span>

            </p>
            <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
              size:  {productSize}
                

            </p>

        </div>
        <div sm:ml-12> 
            {/* AMOUNT */}
            <div className="form-control max-w-xs">
                <label htmlFor="amount" className="label p-0">
                    <span className="label-text">
                        Amount

                    </span>
                    <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs"
                     value={amount}
                     onChange={handleAmount}
                    >
                        {generateAmountOptions(amount+5)}
                    </select>
                </label>

            </div>
        {/* REMOVE */}
        <button className="mt-2 link link-primary link-hover text-sm"
        onClick={removeItemFromTheCart}
        >
            remove
        </button>

        </div>
        
        {/* PRICE */}
        <p className="font-medium sm:ml-auto">{formattedPrice(price)}</p>

       </article>
    )

}

export default CartItem;