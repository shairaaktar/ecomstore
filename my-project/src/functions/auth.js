import axios from "axios";

export const createOrUpdateUser=async(authtoken)=>{
    return await axios.post(
        `http://localhost:8001/api/create-or-update-user`,
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
        `http://localhost:8001/api/current-user`,
        {},
        {
            headers:{
                authtoken,
            }
        }
    )
}