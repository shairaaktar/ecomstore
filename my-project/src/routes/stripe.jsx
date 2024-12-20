// import {loadStripe} from '@stripe/stripe-js'

// export const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_KEY)

// src/stripe.js
// import { loadStripe } from '@stripe/stripe-js';
// const stripe=require('stripe')(process.env.REACT_APP_STRIPE_KEY)

// // Ensure the environment variable is prefixed with REACT_APP_
// // const stripePublicKey = process.env.REACT_APP_STRIPE_KEY;

// if (!stripePublicKey) {
//   throw new Error('Stripe public key not found in environment variables.');
// }

// export const stripePromise = loadStripe(stripePublicKey);

// src/stripe.js (for client-side)
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// export default stripePromise;

// stripe.js (Client-side Stripe Configuration)
// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// // import CardPaymentPage from '../pages/CardPaymentPage';
// import { Elements } from '@stripe/react-stripe-js';
// import StripeCheckout from '../components/StripeCheckout';

// // const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// const Payment=()=>{
//     return(
//         <div>
//             <Elements stripe={stripePromise}>
//                   <div>
//                    <StripeCheckout/>
//                   </div>
//             </Elements>
//         </div>
//     )


// }
// export default Payment;

// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import StripeCheckout from "../components/StripeCheckout";

// const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// const Payment = () => {
//     return (
//         <div className="container p-5 text-center">
//             <h4>Complete your purchase</h4>
//             <Elements stripe={promise}>
//                 <div className="col-md-8 offset-md-2">
//                     <StripeCheckout />
//                 </div>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;