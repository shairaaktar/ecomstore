// import React,{useEffect,useState} from "react";
// import { useNavigate } from "react-router-dom";
// import {useSelector,useDispatch} from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';




// const CardPaymentPage=()=>{
//     const [clientSecret,setClientSecret]=useState('');
//     const  navigate=useNavigate();
//     const stripe=useStripe();
//     const elements=useElements();
//     const dispatch=useDispatch();

//     const user=useSelector((state)=>state.userState);
//     const cartState=useSelector((state)=>state.cartState);

//     useEffect(()=>{
//         const fetchClientSecret=async ()=>{
//             try{
//             const response=await axios.post('http://localhost:8001/api/orders/create-payment-intent',{
//                 amount:cartState.orderTotal,
//             },{
//                 headers:{
//                     authtoken:user.token
//                 }

//             });
//             setClientSecret(response.data.clientSecret);


//             }catch(error){
//                 toast.error('Failed to fetch client secret. Please try again later.');

//             }
//         };
//        if(user.token && cartState.orderTotal){
//         fetchClientSecret();
//        }
//     },
//     [cartState.orderTotal,user.token]
//     );

//     const handleSubmit=async (e)=>{
//         e.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//           }
//         if(!user.token){
//             toast.error('Authorization token is missing. PLease log in again.');
//             return;
//         }
//         const payload=await stripe.confirmCardPayment(clientSecret,{
//             payment_method:{
//                 card:elements.getElement(CardElement),
//                 billing_details:{
//                     name:user.name,
//                 }
//             }
//         });
//         if(payload.error){
//             toast.error(`Payment Failed: ${payload.error.message}`);
//         }else{
//             const info={
//                 name:user.name,
//                 address:user.address,
//                 chargeTotal:cartState.orderTotal,
//                 orderTotal:cartState.orderTotal,
//                 cartItems: cartState.cartItems,
//                 numItemsInCart: cartState.numItemsInCart,
//                 userId: user.id,
//                 paymentMethod: 'Card',
//                 clientSecret
//             };
//             try{
//                 const response=await axios.post('http://localhost:8001/api/orders/card',info,{
//                     headers:{
//                         authtoken:user.token
//                     }
//                 });

//                 if(response.status==201){
//                     toast.success('Order placed successfully!');
                   
//                     navigate('/');

//                 }else{
//                     throw new Error('Failed to place order.');
//                 }

//             }catch(error){

//                 toast.error('Failed to place order. Please try again later.');
//             }
//         }
//     };

//     return(
//         <div className="card-payment-page">
//             <h1 className="text-2xl font-bold">Card Payment</h1>

//         </div>
//     )

// }

// // const  WrappedCardPaymentPage=()=>(
// //     <Element stripe={stripePromise}>
// //         <CardPaymentPage/>
// //     </Element>
// // )

// export default CardPaymentPage;

// 

// import React from "react";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from "@stripe/react-stripe-js";
// import StripeCheckout from "../components/StripeCheckout";

// const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

// const CardPaymentPage = () => {
//   return (
//     <div className="container p-5 text-center">
//       <h4>Complete your purchase</h4>
//       <Elements stripe={stripePromise}>
//         <div className="col-md-8 offset-md-2">
//           <StripeCheckout />
//         </div>
//       </Elements>
//     </div>
//   );
// };

// export default CardPaymentPage;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from "@stripe/react-stripe-js";
// import StripeCheckout from "../components/StripeCheckout";

// const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

// const CardPaymentPage = () => {
//   const { orderId } = useParams();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.userState);
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post('http://localhost:8001/api/create-payment-intent', {
//           orderId
//         }, {
//           headers: {
//             authtoken: user.token
//           }
//         });
//         setClientSecret(response.data.clientSecret);
//       } catch (error) {
//         toast.error('Failed to fetch client secret. Please try again later.');
//         navigate('/');
//       }
//     };

//     if (user.token && orderId) {
//       fetchClientSecret();
//     }
//   }, [orderId, user.token, navigate]);

//   return (
//     <div className="container p-5 text-center">
//       <h4>Complete your purchase</h4>
//       {clientSecret && (
//         <Elements stripe={stripePromise} options={{ clientSecret }}>
//           <div className="col-md-8 offset-md-2">
//             <StripeCheckout orderId={orderId} clientSecret={clientSecret} />
//           </div>
//         </Elements>
//       )}
//     </div>
//   );
// };

// export default CardPaymentPage;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import StripeCheckoutForm from '../components/StripeCheckout'

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const CardPaymentPage = () => {
//     const { orderId } = useParams();
//     const navigate = useNavigate();
//     const user = useSelector((state) => state.userState);
//     const [clientSecret, setClientSecret] = useState('');

//     useEffect(() => {
//         const fetchClientSecret = async () => {
//             try {
//                 const response = await axios.post(`http://localhost:8001/api/orders/${orderId}/payment-intent`, {}, {
//                     headers: {
//                         authtoken: user.token,
//                     },
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 toast.error('Failed to fetch client secret. Please try again later.');
//                 navigate('/');
//             }
//         };

//         if (user.token && orderId) {
//             fetchClientSecret();
//         }
//     }, [orderId, user.token, navigate]);

//     return (
//         <div className="container p-5 text-center">
//             <h4>Complete your purchase</h4>
//             {clientSecret && (
//                 <Elements stripe={stripePromise}>
//                     <StripeCheckoutForm orderId={orderId} clientSecret={clientSecret} />
//                 </Elements>
//             )}
//         </div>
//     );
// };

// export default CardPaymentPage;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import StripeCheckoutForm from '../components/StripeCheckout';

// const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

// const CardPaymentPage = () => {
//     const { orderId } = useParams();
//     const navigate = useNavigate();
//     const user = useSelector((state) => state.userState);
//     const [clientSecret, setClientSecret] = useState('');

//     useEffect(() => {
//         const fetchClientSecret = async () => {
//             try {
//                 const response = await axios.post(`http://localhost:8001/api/orders/${orderId}/payment-intent`, {}, {
//                     headers: {
//                         authtoken: user.token,
//                     },
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 toast.error('Failed to fetch client secret. Please try again later.');
//                 navigate('/');
//             }
//         };

//         if (user.token && orderId) {
//             fetchClientSecret();
//         }
//     }, [orderId, user.token, navigate]);

//     return (
//         <div className="container p-5 text-center">
//             <h4>Complete your purchase</h4>
//             {clientSecret && (
//                 <Elements stripe={stripePromise}>
//                     <StripeCheckoutForm orderId={orderId} clientSecret={clientSecret} />
//                 </Elements>
//             )}
//         </div>
//     );
// };

// export default CardPaymentPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js'
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useDispatch,useSelector } from 'react-redux';
// import {createPaymentIntent,createOrder} from '../functions/stripe';
// import { Link } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode'

// import { clearCart } from '../features/cart/cartSlice';

// const CardPaymentPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     console.log('location.state',location.state)
//     const { name, address, chargeTotal, orderTotal, cartItems, numItemsInCart, userId, token } = location.state;
//     console.log('name,address',name,address)
//     console.log('orderTotal',orderTotal)
//     console.log('token',token)

//     const decodedToken = jwtDecode(token);
//     const email = decodedToken.email;
//     console.log('email', email);
  
//     const [succeeded, setSucceeded]=useState(false);
//     const [error, setError] = useState(null);
//     const [processing, setProcessing] = useState("");
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState("");
//     const [payable, setPayable] = useState(0);
//     // const [cartTotal, setCartTotal] = useState(0);
//     const stripe=useStripe()
//     const elements=useElements();

//     // useEffect(()=>{
//     //     createPaymentIntent(token,orderTotal).then((res)=>{
//     //         console.log("create payment intent", res.data);
//     //         setClientSecret(res.data.clientSecret);
//     //         // setCartTotal(res.data.cartTotal);
//     //         setPayable(res.data.payable);
//     //     })

//     // },[token]);

//     // useEffect(() => {
//     //     const fetchPaymentIntent = async () => {
//     //         try {
//     //             const res = await createPaymentIntent(token, orderTotal);
//     //             console.log("create payment intent", res.data);
//     //             setClientSecret(res.data.clientSecret);
//     //             setPayable(res.data.payable);
//     //         } catch (error) {
//     //             console.error('Error creating payment intent', error);
//     //             toast.error('Failed to create payment intent');
//     //         }
//     //     };

//     //     fetchPaymentIntent();
//     // }, [token, orderTotal]);

//     useEffect(() => {
//         const fetchPaymentIntent = async () => {
//             try {
//                 const res = await createPaymentIntent(token, orderTotal);
//                 console.log("create payment intent", res);
//                 if (res && res.data) {
//                     setClientSecret(res.data.clientSecret);
//                     setPayable(res.data.payable);
//                 } else {
//                     throw new Error('Invalid response from server');
//                 }
//             } catch (error) {
//                 console.error('Error creating payment intent:', error);
//                 toast.error('Failed to create payment intent');
//             }
//         };

//         fetchPaymentIntent();
//     }, [token, orderTotal]);

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         setProcessing(true);

//         if (!stripe || !elements) {
//             return;
//           }

//         const payload=await stripe.confirmCardPayment(clientSecret,{
//             payment_method:{
//                 card:elements.getElement(CardElement),
//                 billing_details:{
//                     // name,
//                     // address
//                 }
//             }
//         });

//         const info={
//             name,
//             address,
//             chargeTotal: orderTotal,
//             orderTotal: orderTotal,
//             cartItems,
//             numItemsInCart,
//             userId,
//             email

//         }

//         if(payload.error){
//             setError(`Payment Failed ${payload.error.message}`);
//             setProcessing(false);
//         }else{
//             createOrder(payload,token,info).then((res)=>{
//                 console.log("create order", res.data);
//                 toast.success('Placed Order Successfully')
//             });

//             setError(null);
//             setProcessing(false);
//             setSucceeded(true);
//             dispatch(clearCart());
//             navigate('/');
//         }
//     }
    
//     // const [cardDetails, setCardDetails] = useState({
//     //     cardNumber: '',
//     //     expiryDate: '',
//     //     cvc: ''
//     // });

//     // const handleInputChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setCardDetails((prevDetails) => ({
//     //         ...prevDetails,
//     //         [name]: value
//     //     }));
//     // };
//     const handleChange = async (e) => {
//         setDisabled(e.empty);
//         setError(e.error ? e.error.message : "");
//     };

//     // const handlePayment = async () => {
//     //     try {
//     //         // Create payment intent with Stripe (placeholder logic)
//     //         const paymentIntent = await axios.post('http://localhost:8001/api/create-payment-intent', {
//     //             amount: chargeTotal,
//     //             currency: 'usd'
//     //         }, {
//     //             headers: {
//     //                 authtoken: token,
//     //             }
//     //         });

//     //         const info = {
//     //             name,
//     //             address,
//     //             chargeTotal,
//     //             orderTotal,
//     //             cartItems,
//     //             numItemsInCart,
//     //             userId,
//     //             paymentIntent: paymentIntent.data.id // Use the payment intent ID from Stripe
//     //         };

//     //         const response = await axios.post(
//     //             'http://localhost:8001/api/orders',
//     //             info,
//     //             {
//     //                 headers: {
//     //                     authtoken: token,
//     //                 },
//     //             }
//     //         );
//     //         console.log(response);
//     //         if (response.status === 201) {
//     //             toast.success('Order placed successfully!');
//     //             dispatch(clearCart());
//     //             navigate('/');
//     //         } else {
//     //             throw new Error('Failed to place order.');
//     //         }
//     //     } catch (error) {
//     //         console.log(error);
//     //         toast.error('Failed to place order. Please try again later.');
//     //     }
//     // };
//     const cartStyle = {
//         style: {
//             base: {
//                 color: "#32325d",
//                 fontFamily: "Arial, sans-serif",
//                 fontSmoothing: "antialiased",
//                 fontSize: "16px",
//                 "::placeholder": {
//                     color: "#32325d",
//                 },
//             },
//             invalid: {
//                 color: "#fa755a",
//                 iconColor: "#fa755a",
//             },
//         },
//     };

//     return (
//         // <div className="card-payment">
//         //     <h4 className="font-medium text-xl capitalize">Card Payment</h4>
//         //     <div className="form-control">
//         //         <label className="label">
//         //             <span className="label-text">Card Number</span>
//         //             <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} className="input input-bordered" />
//         //         </label>
//         //     </div>
//         //     <div className="form-control">
//         //         <label className="label">
//         //             <span className="label-text">Expiry Date</span>
//         //             <input type="text" name="expiryDate" value={cardDetails.expiryDate} onChange={handleInputChange} className="input input-bordered" />
//         //         </label>
//         //     </div>
//         //     <div className="form-control">
//         //         <label className="label">
//         //             <span className="label-text">CVC</span>
//         //             <input type="text" name="cvc" value={cardDetails.cvc} onChange={handleInputChange} className="input input-bordered" />
//         //         </label>
//         //     </div>
//         //     <div className="mt-4">
//         //         <button onClick={handlePayment} className="btn btn-primary">Confirm Order</button>
//         //     </div>
//         // </div>
//         <>
//           <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
//                <div className='card'>
//                <CardElement
//                     id="card-element"
//                     options={cartStyle}
//                     onChange={handleChange}
//                 />

//                </div>
//                 <button className="stripe-button" disabled={processing || disabled || succeeded}>
//                     <span id="button-text">
//                         {processing ? <div className="spinner" id="spinner"></div> : "Confirm Order"}
//                     </span>
//                 </button>
//                 <br />
//                 {error && <div className="card-error" role="alert">{error}</div>}
//                 <br />
//                 <p className={succeeded ? "result-message" : "result-message hidden"}>
//                     Payment Successful.
//                     <Link to="/user/history">Purchase History</Link>
//                 </p>
//             </form>
//         </>
//     );
// };

// export default CardPaymentPage

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createPaymentIntent, createOrder } from '../functions/stripe';
import { clearCart } from '../features/cart/cartSlice';
import {jwtDecode} from 'jwt-decode';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import BASE_URL from '../config';
// Assuming you have a CSS file for custom styles

const CardPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { name, address, chargeTotal,number, orderTotal, cartItems, numItemsInCart, userId, token } = location.state;
  const decodedToken = jwtDecode(token);
  const email = decodedToken.email;
  
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  
  const stripe = useStripe();
  const elements = useElements();
  
  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const res = await createPaymentIntent(token, orderTotal);
        if (res && res.data) {
          setClientSecret(res.data.clientSecret);
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        console.error('Error creating payment intent:', error);
        toast.error('Failed to create payment intent');
      }
    };
    fetchPaymentIntent();
  }, [token, orderTotal]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
          address: {
            line1: address,
          },
        },
      },
    });

    const info = {
      name,
      address,
      number,
      chargeTotal: orderTotal,
      orderTotal: orderTotal,
      cartItems,
      numItemsInCart,
      userId,
      email,
    };

    if (payload.error) {
      setError(`Payment Failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      createOrder(payload, token, info).then((res) => {
        toast.success('Order placed successfully!');
        dispatch(clearCart());
        navigate('/');
      });

      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
   <Wrapper>
     <div className="card-payment-page">
      <h2 className="page-title">Card Payment</h2>
      <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>
        <div className="card-details">
          <CardElement id="card-element" onChange={handleChange} />
        </div>
        <button className="submit-button" disabled={processing || disabled || succeeded}>
          <span id="button-text">{processing ? <div className="spinner" id="spinner"></div> : "Confirm Order"}</span>
        </button>
        {error && <div className="card-error" role="alert">{error}</div>}
        {succeeded && (
          <p className="result-message">
            Payment Successful. <Link to="/">View Purchase History</Link>
          </p>
        )}
      </form>
    </div>
   </Wrapper>
  );
};

const Wrapper=styled.main`

.card-payment-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.payment-form {
  display: flex;
  flex-direction: column;
}

.card-details {
  margin-bottom: 1rem;
}

.submit-button {
  background-color: #6772e5;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #5469d4;
}

.card-error {
  color: #e63946;
  margin-top: 1rem;
  text-align: center;
}

.result-message {
  margin-top: 1rem;
  text-align: center;
  font-size: 16px;
}

.result-message.hidden {
  display: none;
}

.result-message a {
  color: #6772e5;
  text-decoration: none;
}

.spinner {
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


`

export default CardPaymentPage;
