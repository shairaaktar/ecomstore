import { combineReducers } from "@reduxjs/toolkit";
import { user_reducers } from "./user_reducers";
import { searchReducers } from "./searchReducers";

const rootReducer=combineReducers({
    user:user_reducers,
    search:searchReducers,
})

export default rootReducer;