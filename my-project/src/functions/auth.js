import axios from "axios";
import BASE_URL from "../config";

export const createOrUpdateUser=async(authtoken)=>{
    return await axios.post(
        `${BASE_URL}/api/create-or-update-user`,
        {},
        {
            headers:{
                authtoken,
            }
        }
    )
}


export const currentUser=async(authtoken)=>{
    return await axios.post(
        `${BASE_URL}/api/current-user`,
        {},
        {
            headers:{
                authtoken,
            }
        }
    )
}