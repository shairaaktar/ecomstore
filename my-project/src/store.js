import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import  useReducer  from './features/user/userSlice'
import {searchReducers} from './reducers/searchReducers'

export const store=configureStore({
    reducer:{
        cartState:cartReducer,
        userState:useReducer,
        searchState:searchReducers
    }
})