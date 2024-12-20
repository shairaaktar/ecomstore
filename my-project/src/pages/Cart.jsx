import { useSelector } from "react-redux";
import { CartItemsList,SectionTitle,CartTotals,Footer,CartCard } from "../components";
import { Link } from "react-router-dom";






const Cart=()=>{
    const user=useSelector((state)=>state.userState);
    const numItemsInCart=useSelector((state)=>state.cartState.numItemsInCart);
    const cart=useSelector((state)=>state.cartState);

    console.log('Cart--->',cart)

    const saveOrderToDb=()=>{
        userCart()
    }

    if(numItemsInCart===0){
        return (
            <>
              <SectionTitle text='Your cart is empty'/>
            {/* <Link to={'products'} className="btn btn-secondary">
            Continue Shopping
            </Link> */}
              <main className="grid min-h-[40vh] place-items-center px-8">
       
       <div className="text-center">
          

           <div className="mt-20">

          <Link to={'/'} className="btn btn-wide">
         Continue Shopping
          </Link>
           </div>
       </div>
      </main>
            </>
          
        )
    }
        


    return(
       <>
       <SectionTitle text='Shopping Cart'/>
       <div className="mt-8 grid gap-8 lg:grid-cols-12" >
        <div className="lg:col-span-8" >
            <CartItemsList/>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
            <CartCard/>
            {user.name ?(
               <>
                <Link to='/checkout' className="btn btn-primary btn-block mt-8" >
                proceed to checkout
                </Link>
                 {/* <button className="btn btn-primary btn-block mt-8">
                    Pay Cash On Delivery

                </button>  */}
               </>

            ):(
                <Link to='/login' className="btn btn-primary btn-block mt-8">
                please login
                </Link>
            )
           
            }
           
        </div>
      

       </div>
     
       </>
    )
}

export default Cart;