import {
    LOGGED_IN_USER,
    LOGGED_OUT_USER
} from './actions'


export const user_reducers=(state=null,action)=>{
    if(action.type===LOGGED_IN_USER){
        return action.payload
    }
    if(action.type===LOGGED_OUT_USER){
        return action.payload;
    }
    return state
}