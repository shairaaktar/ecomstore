// export const searchReducer=(state={text:''},action)=>{
//     switch(action.type){
//         case "SEARCH_QUERY":
//             return {...state,...action.payload};

//         default:
//             return state;
//     }
// }
import { SEARCH_QUERY } from "../action";


export const searchReducers=(state={text:''},action)=>{
    if(action.type===SEARCH_QUERY){
        return {...state,...action.payload};

    }
    return state;
}