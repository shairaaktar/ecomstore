import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const defaultState={
    cartItems:[],
    numItemsInCart:0,
    cartTotal:0,
    shipping:0,
    tax:0,
    orderTotal:0,

};

const getCartFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
}

const cartSlice=createSlice({
    name:'cart',
    initialState:getCartFromLocalStorage(),
    reducers:{
        addItem:(state,action)=>{
           const {product}=action.payload
           console.log('product',product)
           const item=state.cartItems.find((i)=>i.cartID===product.cartID);
           console.log('item',item)
           if(item){
            // item.amount+=product.amount;
             if(item.amount+product.amount>product.quantity){
                toast.error(`Cannot add more.  ${product.quantity - item.amount} more items left in stock at the moment!`);
             }else{
                item.amount += product.amount;
                    state.numItemsInCart += product.amount;
                    state.cartTotal += product.price * product.amount;
                    toast.success('Item quantity updated in cart');
             }
           }else{
            // state.cartItems.push(product);
            if (product.amount > product.quantity) {
                toast.error(`Only ${product.quantity} items available in stock!`);
            } else {
                // Add the product to the cart
                state.cartItems.push(product);
                state.numItemsInCart += product.amount;
                state.cartTotal += product.price * product.amount;
                toast.success('Item added to cart');
            }
           }
        //    state.numItemsInCart+=product.amount
        //    state.cartTotal+=product.price*product.amount

           cartSlice.caseReducers.calculateTotals(state,{payload:state.shipping});
          
        //    toast.success('Item added to cart')

        },
        clearCart:(state)=>{
            localStorage.setItem('cart',JSON.stringify(defaultState))
            return defaultState;
        },
        removeItem:(state,action)=>{
            const {cartID}=action.payload
            const product=state.cartItems.find((i)=>i.cartID===cartID);
            state.cartItems=state.cartItems.filter((i)=>i.cartID !==cartID);
            state.numItemsInCart-=product.amount
            state.cartTotal-=product.price*product.amount
            cartSlice.caseReducers.calculateTotals(state,{payload:state.shipping})
          
            toast.error('Item removed from cart')
        },
        editItem:(state,action)=>{
            
            const {cartID,amount,quantity}=action.payload;
            console.log('action.payload',action.payload)
            const item=state.cartItems.find((i)=>i.cartID===cartID);
            console.log('item---',item)
           if(item){
            if(amount>quantity){
                toast.error(`  ${quantity} items in stock  at the moment!`);
            }else{
                state.numItemsInCart += amount - item.amount;
                    state.cartTotal += item.price * (amount - item.amount);
                    item.amount = amount;

                    cartSlice.caseReducers.calculateTotals(state, { payload: state.shipping });

                    toast.success('Cart updated');
            }
           }
          
            // state.numItemsInCart +=amount-item.amount
            // state.cartTotal+=item.price*(amount-item.amount)
            // item.amount=amount
            // cartSlice.caseReducers.calculateTotals(state,{payload:state.shipping})
          
            // toast.success('Cart updated');

        },

        setShippingCost:(state,action)=>{
            state.shipping=action.payload;
            cartSlice.caseReducers.calculateTotals(state,{payload:action.payload});

        },
        calculateTotals:(state,action)=>{
            const shippingCost=action.payload||state.shipping;
            state.tax=0.1*state.cartTotal
            state.orderTotal=state.cartTotal+shippingCost+state.tax;
            localStorage.setItem('cart',JSON.stringify(state))

        }
    },
});

export const {addItem, clearCart,removeItem,editItem,setShippingCost}=cartSlice.actions;

export default cartSlice.reducer;