import { useSelector,useDispatch } from "react-redux";
import { CheckoutForm,SectionTitle,CartTotals } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../features/cart/cartSlice";
import BASE_URL from "../config";


//  export const loader=(store)=>()=>{
//     const user=store.getStore().userState.user
//     if(!user){
//         toast.warn(`You must be logged in to checkout`);
//     return redirect('/login');
    
//     }
//     return null;
   
//  }


const Checkout=()=>{
    const user=useSelector((state)=>state.userState);
    console.log('User----->',user)
    const cartTotal=useSelector((state)=>state.cartState.cartTotal);
    console.log('cartTotal',cartTotal)
    const navigate=useNavigate()
    const [formData,setFormData]=useState({name:'',address:'',number:''});
    const { cartItems, orderTotal, numItemsInCart } = useSelector((state) => state.cartState);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const dispatch=useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, address, number } = formData;
        console.log('name,address,number',name,address,number)

        if (selectedPaymentMethod === 'Card') {
            navigate('/card-payment', {
                state: {
                    name,
                    address,
                    number,
                    chargeTotal: orderTotal,
                    orderTotal: orderTotal.toFixed(2),
                    cartItems,
                    numItemsInCart,
                    userId: user.id,
                    token: user.token,
                },
            });
        } else if (selectedPaymentMethod === 'Cash') {
            const info = {
                name,
                address,
                number,
                chargeTotal: orderTotal,
                orderTotal: orderTotal.toFixed(2),
                cartItems,
                numItemsInCart,
                userId: user.id,
            };

            console.log('info',info)

            try {
                const response = await axios.post(
                    `${BASE_URL}/api/orders`,
                    info,
                    {
                        headers: {
                            authtoken: user.token,
                        },
                    }
                );

                console.log('response',response)
                if (response.status === 201) {
                    toast.success('Order placed successfully!');
                    dispatch(clearCart());
                    navigate('/');
                } else {
                    throw new Error('Failed to place order.');
                }
            } catch (error) {
               toast.error('Failed to place order. Please try again later.');
               console.log('error',error)
             }
        }
    };

    useEffect(()=>{
        if(!user.email){
            toast.warn('You must be logged in to checkout');
            navigate('/login');

        }
    },[user ,navigate]);

    if(!user.email){
        return null;
    }

    if(cartTotal===0){
        return <SectionTitle text='Your cart is empty'/>
    }
    return(
        <>
        <SectionTitle text='place your order'/>
        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
            <CheckoutForm formData={formData}  setFormData={setFormData} handleInputChange={handleInputChange} selectedPaymentMethod={selectedPaymentMethod} setSelectedPaymentMethod={setSelectedPaymentMethod}/>
            <CartTotals handleSubmit={handleSubmit}/>
        </div>
        </>
    )
}

export default Checkout;