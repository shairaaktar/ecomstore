// import {Form, redirect, useNavigate} from 'react-router-dom'
//  import FormInput from './Form';
//  import SubmitBtn from './SubmitBtn';
//  import { customFetch, formatPrice } from '../utils';
//  import { toast } from 'react-toastify';
//  import { clearCart } from '../features/cart/cartSlice';
//  import axios from 'axios';
//  import { useState } from 'react';

//  export const action=(store)=>async({request})=>{
//     const formData=await request.formData();
//     console.log('formData',formData);

//     const {name ,address}=Object.fromEntries(formData);
//     console.log('name ',name)
//     console.log('address',address)
//     const user=store.getState().userState;
//     const {token}=user
//     console.log('token',token)


   
//     console.log('User|||||',user)
//     const {cartItems,orderTotal,numItemsInCart}=store.getState().cartState
//     console.log('cartItems , orderTotal,numItemsInCart',cartItems,orderTotal,numItemsInCart);

//     if(!user?.token){
//      toast.error('Authorization token is missing. Please log in again');
//      return null
//     }

   
//      const info={
//          name,
//          address,
//          chargeTotal:orderTotal,
//          orderTotal:formatPrice(orderTotal),
//          cartItems,
//          numItemsInCart,
//          paymentIntent: null,
//          userId:user.id

//      };
//      try{
//          const response=await axios.post('http://localhost:8001/api/orders',
            
              
//              info,
//              {
//                  headers:{
                    
//                      authtoken:token
//                  },
//              }
//          );
//          console.log(response);
//           if(response.status===201){
//               toast.success('Order placed successfully!');
//               store.dispatch(clearCart())
//                return redirect('/')
             

//           }else{
//               throw new Error('Failed to place order.');


//           }

//      }catch(error){
//      console.log(error);
//      toast.error('Failed to place order. PLease try again later.');
//      return null;
//      }
   
//  };



//  const CheckoutForm=()=>{
//      const [selectedPaymentMethod, setSelectedPaymentMethod]=useState('');
//      const navigate=useNavigate();

//      const handleSubmit=(event)=>{
//         if (!selectedPaymentMethod) {
//                         toast.error('Please select a payment method.');
//                         return;
//                      }
//           if(selectedPaymentMethod==='Card'){
//               event.preventDefault();
//               navigate('/card-payment');
//            }
//         // if (selectedPaymentMethod === 'Card') {
//         //     navigate(`/card-payment`);
//         // }
//      }
//      return(
//         <Form method='POST' className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
//          <h4 className='font-medium text-xl capitalize'>shipping information</h4>
//          <FormInput label='first name' name='name' type='text'/>
//          <FormInput label='address' name='address' type='text'/>

         

//          {/* Payment Method */}

//          {/* <>
//          <div className='dropdown dropdown-end'>
//              <div tabIndex={0} role='button' className='btn m-1'>Choose Payment Method</div>
//              <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
//                  <li>
//                      <div className="form-control">
//    <label className="cursor-pointer label">
//      <span className="label-text"> Cash </span>
//      <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//    </label>
//  </div>
//                  </li>
//                   <li>
//                      <div className="form-control">
//    <label className="cursor-pointer label">
//      <span className="label-text">Card</span>
//      <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//    </label>
//  </div>
//                   </li>

//              </ul>

//          </div>
//          </> */}
//           {/* Payment Method */}

//           <div className='dropdown '>
//              <div tabIndex={0} role='button' className='btn m-1'>Choose Payment Method</div>
//              <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
                
//                      <div className='form-control'>
//                          <label className='cursor-pointer label'>
//                              <span className='label-text'>Cash</span>
//                              <input
//                              type='radio'
//                              name='paymentMethod'
//                              value='Cash'
//                              checked={selectedPaymentMethod==='Cash'}
//                              onChange={() => setSelectedPaymentMethod('Cash')}
//                              className='radio radio-success'

//                              />
//                          </label>

//                      </div>
                

//                  <div className='form-control'>
//                          <label className='cursor-pointer label'>
//                              <span className='label-text'>Card</span>
//                              <input
//                              type='radio'
//                              name='paymentMethod'
//                              value='Card'
//                              checked={selectedPaymentMethod==='Card'}
//                              onChange={() => setSelectedPaymentMethod('Card')}
//                              className='radio radio-success'

//                              />
//                          </label>

//                      </div>


//              </ul>


//           </div>
//           {selectedPaymentMethod &&(
//              <div className='mt-4'>
//                  <p className="text-l font-bold text-blue-600">Selected Payment Method: {selectedPaymentMethod}</p>
//              </div>
//           )}

//          <div className='mt-4'>
//              <SubmitBtn text='place your order' disabled={!selectedPaymentMethod}/>
//          </div>
       

       
//         </Form>
//      )
//  }

//  export default CheckoutForm

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { clearCart } from '../features/cart/cartSlice';
// import FormInput from './Form'
// import SubmitBtn from './SubmitBtn';

// const CheckoutForm = () => {
//     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const user = useSelector((state) => state.userState);
//     const { cartItems, orderTotal, numItemsInCart } = useSelector((state) => state.cartState);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!user?.token) {
//             toast.error('Authorization token is missing. Please log in again.');
//             return;
//         }

//         if (!selectedPaymentMethod) {
//             toast.error('Please select a payment method.');
//             return;
//         }

//         const formData = new FormData(event.target);
//         const { name, address } = Object.fromEntries(formData);

//         try {
//             if (selectedPaymentMethod === 'Cash') {
//                 // Place order directly for Cash payment
//                 await placeOrder(name, address, 'Cash');
//             } else if (selectedPaymentMethod === 'Card') {
//                 // Place order and redirect to card payment page
//                 const orderId = await placeOrder(name, address, 'Card');
//                 if (orderId) {
//                     navigate(`/card-payment/${orderId}`);
//                 }
//             }
//         } catch (error) {
//             console.error('Error placing order:', error);
//             toast.error('Failed to place order. Please try again later.');
//         }
//     };

//     const placeOrder = async (name, address, paymentMethod) => {
//         const info = {
//             name,
//             address,
//             chargeTotal: orderTotal,
//             orderTotal: orderTotal.toFixed(2),
//             cartItems,
//             numItemsInCart,
//             userId: user.id,
//             paymentMethod,
//         };

//         try {
//             const response = await axios.post('http://localhost:8001/api/orders', info, {
//                 headers: {
//                     authtoken: user.token,
//                 },
//             });

//             if (response.status === 201) {
//                 toast.success('Order placed successfully!');
//                 dispatch(clearCart());
//                 return response.data.order._id; // Return order ID
//             } else {
//                 throw new Error('Failed to place order.');
//             }
//         } catch (error) {
//             console.error('Error placing order:', error);
//             toast.error('Failed to place order. Please try again later.');
//             return null;
//         }
//     };

//     return (
//         <form method="POST" className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
//             <h4 className="font-medium text-xl capitalize">Shipping Information</h4>
//             <FormInput label="First Name" name="name" type="text" />
//             <FormInput label="Address" name="address" type="text" />

//             <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn m-1">
//                     Choose Payment Method
//                 </div>
//                 <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
//                     <div className="form-control">
//                         <label className="cursor-pointer label">
//                             <span className="label-text">Cash</span>
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="Cash"
//                                 checked={selectedPaymentMethod === 'Cash'}
//                                 onChange={() => setSelectedPaymentMethod('Cash')}
//                                 className="radio radio-success"
//                             />
//                         </label>
//                     </div>

//                     <div className="form-control">
//                         <label className="cursor-pointer label">
//                             <span className="label-text">Card</span>
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="Card"
//                                 checked={selectedPaymentMethod === 'Card'}
//                                 onChange={() => setSelectedPaymentMethod('Card')}
//                                 className="radio radio-success"
//                             />
//                         </label>
//                     </div>
//                 </ul>
//             </div>

//             {selectedPaymentMethod && (
//                 <div className="mt-4">
//                     <p className="text-l font-bold text-blue-600">Selected Payment Method: {selectedPaymentMethod}</p>
//                 </div>
//             )}

//             <div className="mt-4">
//                 <SubmitBtn text="Place Your Order" disabled={!selectedPaymentMethod} />
//             </div>
//         </form>
//     );
// };

// export default CheckoutForm;
import { Form, redirect, useNavigate } from 'react-router-dom';
import FormInput from './Form';
// import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartTotals from './CartTotals';
import { useEffect } from 'react';
import BASE_URL from '../config';

// export const action = (store) => async ({ request }) => {
//     const formData = await request.formData();
//     console.log('formData', formData);

//     const { name, address } = Object.fromEntries(formData);
//     console.log('name', name);
//     console.log('address', address);

//     const user = store.getState().userState;
//     const { token } = user;
//     console.log('token', token);

//     const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;
//     console.log('cartItems, orderTotal, numItemsInCart', cartItems, orderTotal, numItemsInCart);

//     if (!user?.token) {
//         toast.error('Authorization token is missing. Please log in again');
//         return null;
//     }

//     const info = {
//         name,
//         address,
//         chargeTotal: orderTotal,
//         orderTotal: orderTotal.toFixed(2),
//         cartItems,
//         numItemsInCart,
//         userId: user.id,
//     };

//     try {
//         const response = await axios.post(
//             'http://localhost:8001/api/orders',
//             { data: info },
//             {
//                 headers: {
//                     authtoken: token,
//                 },
//             }
//         );
//         console.log(response);
//         if (response.status === 201) {
//             toast.success('Order placed successfully!');
//             store.dispatch(clearCart());
//             return redirect('/');
//         } else {
//             throw new Error('Failed to place order.');
//         }
//     } catch (error) {
//         console.log(error);
//         toast.error('Failed to place order. Please try again later.');
//         return null;
//     }
// };

const CheckoutForm = ({formData,setFormData,handleInputChange,setSelectedPaymentMethod,selectedPaymentMethod}) => {
    // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [userDetails,setUserDetails]=useState('')
     const navigate = useNavigate();
    // const user = useSelector((state) => state.userState);
    // const { cartItems, orderTotal, numItemsInCart } = useSelector((state) => state.cartState);
    // const dispatch = useDispatch();
    // const [formData, setFormData] = useState({ name: '', address: '',number:'' });
    const user=useSelector((state)=>state.userState);
    const {token,email}=user


    useEffect(() => {
      
       if(token){
        fetchUserDetails(token)
       }
      }, [ token]);

      useEffect(() => {
        if (userDetails) {
          setFormData({
            name: userDetails.name || '',
            address: userDetails.address || '',
            number: userDetails.number || '',
          });
        }
      }, [userDetails]);
      
  
  
      const fetchUserDetails=async (token)=>{
    
  
        try{
    
            const response=await axios.get(`${BASE_URL}/api/get-account-details`,{
                headers:{
                    authtoken:token,
                },
            })
            console.log('userdetails',response)
            setUserDetails(response.data)
           
          
    
        }catch(error){
            console.error("Error fetching user details:", error);
            setUserDetails(null)
      
    
        }
      }

     const handleSubmit = async (event) => {
         event.preventDefault();
         const form = event.currentTarget;
         const formData = new FormData(form);
         const name = formData.get('name');
         const address = formData.get('address');
         const number=formData.get('number');

         if (selectedPaymentMethod === 'Card') {
             navigate('/card-payment', {
                 state: {
                     name,
                     address,
                     chargeTotal: orderTotal,
                     orderTotal: orderTotal.toFixed(2),
                     cartItems,
                     numItemsInCart,
                     userId: user.id,
                     token: user.token
                 }
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
                 console.log(response);
                 if (response.status === 201) {
                     toast.success('Order placed successfully!');
                     dispatch(clearCart());
                     navigate('/');
                 } else {
                     throw new Error('Failed to place order.');
                 }
             } catch (error) {
                 console.log(error);
                 toast.error('Failed to place order. Please try again later.');
             }
         }
     };

    // const handleInputChange=(e)=>{
    //     const {name ,value}=e.target;
    //     setFormData((prevFormData)=>({
    //         ...prevFormData,
    //         [name]:value
    //     }))
    // }

    return (
        <Form method="POST" className="flex flex-col gap-y-4"
          onSubmit={handleSubmit}
         >
            <h4 className="font-medium text-xl capitalize">Shipping Information</h4>
            <FormInput
             label="First Name"
              name="name" 
              type="text" 
             // value={formData.name} 
            //  value={formData.name || userDetails?.name || ' '}
            value={formData.name || ''}
              onChange={handleInputChange} 
            //   defaultValue={userDetails?.name || ''}
              />

            <FormInput 
            label="Address"
             name="address" 
             type="text" 
            //  value={formData.address || userDetails?.address || ' '} 
            value={formData.address || ''}
             onChange={handleInputChange}
            
              />
            <FormInput 
            label="Mobile Number *" 
            name="number"
             type="number"
            //   value={formData.number || userDetails?.number || ''}
            value={formData.number || ''}
               onChange={handleInputChange}
            //    defaultValue={userDetails?.number || ''}
                />


            {/* Payment Method */}
             <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1">Choose Payment Method</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Cash</span>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Cash"
                                checked={selectedPaymentMethod === 'Cash'}
                                onChange={() => setSelectedPaymentMethod('Cash')}
                                className="radio radio-success"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Card</span>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Card"
                                checked={selectedPaymentMethod === 'Card'}
                                onChange={() => setSelectedPaymentMethod('Card')}
                                className="radio radio-success"
                            />
                        </label>
                    </div>
                </ul>
            </div> 

            {selectedPaymentMethod && (
                <div className="mt-4">
                    <p className="text-l font-bold text-blue-600">Payment Method: {selectedPaymentMethod}</p>
                </div>
            )}

           

{/* <div className="mt-4">
                <SubmitBtn text="Place Your Order"
                //  disabled={!selectedPaymentMethod} 
                 />
            </div> */}
        </Form>
    );
};

export default CheckoutForm;
