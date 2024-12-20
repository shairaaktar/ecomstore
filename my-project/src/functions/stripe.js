import axios from 'axios'

// export const createPaymentIntent=(token,orderTotal)=>{
//     console.log('token-->',token)
//     axios.post(
//      'http://localhost:8001/api/create-payment-intent',
//      {orderTotal},
//         {
//             headers:{
//                 authtoken:token
//             },
//         }
//     )
// }

export const createPaymentIntent = async (token, orderTotal) => {
    try {
      const response = await axios.post(
        'http://localhost:8001/api/create-payment-intent',
        { orderTotal },
        {
          headers: {
            authtoken: token,
          },
        }
      );
      console.log('Payment Intent Response:', response);
      return response;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  };

// export const createOrder=async(stripeResponse,token)=>
//     await axios.post('http://localhost:8001/api/card-orders',
//         {stripeResponse},
//         {headers:{
//             authtoken:token
//         }}
//     )

export const createOrder = async (payload, token,info) => {
    console.log('Payload',payload)
    try {
      const orderData = {
        // name: payload.billing_details.name,
        // address: payload.billing_details.address,
        chargeTotal: payload.amount,
        orderTotal: payload.amount,
        cartItems: [], // Populate with actual cart items
        numItemsInCart: 0, // Populate with actual number of items
        userId: 'user-id' // Populate with actual user ID
      };
  
      const response = await axios.post(
        'http://localhost:8001/api/card-orders',
        { data: info },
        {
          headers: {
            authtoken: token,
            
          },
        }
      );
      console.log('Order Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };
  