// import React,{useEffect,useState} from "react";
// import { useNavigate } from "react-router-dom";
// import {useSelector,useDispatch} from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';




// const StripeCheckout=()=>{
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
//             const response=await axios.post('http://localhost:8001/api/create-payment-intent',{
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

// export default StripeCheckout;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripeCheckout = () => {
//   const [clientSecret, setClientSecret] = useState('');
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.userState);
//   const cartState = useSelector((state) => state.cartState);

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post('http://localhost:8001/api/create-payment-intent', {
//           amount: cartState.orderTotal,
//         }, {
//           headers: {
//             authtoken: user.token,
//           },
//         });
//         setClientSecret(response.data.clientSecret);
//       } catch (error) {
//         toast.error('Failed to fetch client secret. Please try again later.');
//       }
//     };

//     if (user.token && cartState.orderTotal) {
//       fetchClientSecret();
//     }
//   }, [cartState.orderTotal, user.token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     if (!user.token) {
//       toast.error('Authorization token is missing. Please log in again.');
//       return;
//     }

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//         billing_details: {
//           name: user.name,
//         },
//       },
//     });

//     if (payload.error) {
//       toast.error(`Payment Failed: ${payload.error.message}`);
//     } else {
//       const info = {
//         name: user.name,
//         address: user.address,
//         chargeTotal: cartState.orderTotal,
//         orderTotal: cartState.orderTotal,
//         cartItems: cartState.cartItems,
//         numItemsInCart: cartState.numItemsInCart,
//         userId: user.id,
//         paymentMethod: 'Card',
//         clientSecret,
//       };

//       try {
//         const response = await axios.post('http://localhost:8001/api/orders/card', info, {
//           headers: {
//             authtoken: user.token,
//           },
//         });

//         if (response.status === 201) {
//           toast.success('Order placed successfully!');
//           navigate('/order-confirmation');
//         } else {
//           throw new Error('Failed to place order.');
//         }
//       } catch (error) {
//         toast.error('Failed to place order. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="card-payment-page">
//       <h1 className="text-2xl font-bold">Card Payment</h1>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>Pay</button>
//       </form>
//     </div>
//   );
// };

// export default StripeCheckout;

// components/StripeCheckout.js
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripeCheckout = () => {
//     const [clientSecret, setClientSecret] = useState('');
//     const navigate = useNavigate();
//     const stripe = useStripe();
//     const elements = useElements();
//     const user = useSelector((state) => state.userState);
//     const cartState = useSelector((state) => state.cartState);

//     useEffect(() => {
//         const fetchClientSecret = async () => {
//             try {
//                 const response = await axios.post('http://localhost:8001/api/create-payment-intent', {
//                     amount: cartState.orderTotal * 100,
//                 }, {
//                     headers: {
//                         authtoken: user.token
//                     }
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 toast.error('Failed to fetch client secret. Please try again later.');
//             }
//         };
//         if (user.token && cartState.orderTotal) {
//             fetchClientSecret();
//         }
//     }, [cartState.orderTotal, user.token]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         if (!user.token) {
//             toast.error('Authorization token is missing. Please log in again.');
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);
//         const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: cardElement,
//                 billing_details: {
//                     name: user.name,
//                 }
//             }
//         });

//         if (error) {
//             toast.error(`Payment Failed: ${error.message}`);
//         } else {
//             const orderDetails = {
//                 items: cartState.cartItems,
//                 totalAmount: cartState.orderTotal,
//             };

//             try {
//                 const response = await axios.post('http://localhost:8001/api/create-order-with-payment-intent', {
//                     paymentIntentId: paymentIntent.id,
//                     orderDetails,
//                 }, {
//                     headers: {
//                         authtoken: user.token
//                     }
//                 });

//                 if (response.status === 201) {
//                     toast.success('Order placed successfully!');
//                     navigate('/');
//                 } else {
//                     throw new Error('Failed to place order.');
//                 }
//             } catch (error) {
//                 toast.error('Failed to place order. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="card-payment-page">
//             <h1 className="text-2xl font-bold">Card Payment</h1>
//             <form onSubmit={handleSubmit}>
//                 <CardElement />
//                 <button type="submit" disabled={!stripe || !clientSecret}>
//                     Pay
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default StripeCheckout;

// components/StripeCheckout.js
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripeCheckout = () => {
//     const [clientSecret, setClientSecret] = useState('');
//     const { orderId } = useParams();
//     const navigate = useNavigate();
//     const stripe = useStripe();
//     const elements = useElements();
//     const user = useSelector((state) => state.userState);

//     useEffect(() => {
//         const fetchClientSecret = async () => {
//             try {
//                 const response = await axios.post('http://localhost:8001/api/create-payment-intent', {
//                     orderId
//                 }, {
//                     headers: {
//                         authtoken: user.token
//                     }
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 toast.error('Failed to fetch client secret. Please try again later.');
//             }
//         };
//         if (user.token && orderId) {
//             fetchClientSecret();
//         }
//     }, [orderId, user.token]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         if (!user.token) {
//             toast.error('Authorization token is missing. Please log in again.');
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);
//         const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: cardElement,
//                 billing_details: {
//                     name: user.name,
//                 }
//             }
//         });

//         if (error) {
//             toast.error(`Payment Failed: ${error.message}`);
//         } else {
//             toast.success('Payment successful and order placed!');
//             navigate('/');
//         }
//     };

//     return (
//         <div className="card-payment-page">
//             <h1 className="text-2xl font-bold">Card Payment</h1>
//             <form onSubmit={handleSubmit}>
//                 <CardElement />
//                 <button type="submit" disabled={!stripe || !clientSecret}>
//                     Pay
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default StripeCheckout;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripeCheckout = ({ orderId, clientSecret }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const user = useSelector((state) => state.userState);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//         billing_details: {
//           name: user.name,
//         }
//       }
//     });

//     if (error) {
//       toast.error(`Payment Failed: ${error.message}`);
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8001/api/orders/confirm', {
//           orderId,
//           paymentIntentId: paymentIntent.id,
//         }, {
//           headers: {
//             authtoken: user.token
//           }
//         });

//         if (response.status === 200) {
//           toast.success('Payment successful and order confirmed!');
//           navigate('/');
//         } else {
//           throw new Error('Failed to confirm order.');
//         }
//       } catch (error) {
//         toast.error('Failed to confirm order. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="card-payment-page">
//       <h1 className="text-2xl font-bold">Card Payment</h1>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StripeCheckout;

import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const StripeCheckoutForm = ({ orderId, clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const user = useSelector((state) => state.userState);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: user.name,
                    },
                },
            });

            if (error) {
                toast.error(`Payment Failed: ${error.message}`);
            } else {
                const response = await axios.post(`http://localhost:8001/api/orders/${orderId}/confirm-payment`, {
                    paymentIntentId: paymentIntent.id,
                }, {
                    headers: {
                        authtoken: user.token,
                    },
                });

                if (response.status === 200) {
                    toast.success('Payment successful and order confirmed!');
                    // Additional actions after successful payment confirmation
                } else {
                    throw new Error('Failed to confirm order.');
                }
            }
        } catch (error) {
            toast.error('Failed to process payment. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default StripeCheckoutForm;
