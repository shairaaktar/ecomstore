import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {store} from './store.js'
import {Provider} from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

console.log('Stripe Public Key:', import.meta.env.VITE_APP_STRIPE_KEY);


const stripePromise=loadStripe(import.meta.env.VITE_APP_STRIPE_KEY)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
   
    <ToastContainer position='top-center'/>
  </Provider>,
)
