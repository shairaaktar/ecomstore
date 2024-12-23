import axios from 'axios';
import BASE_URL from '../config'

export const getOrders=async (authtoken)=>{
    await axios.get(`${BASE_URL}/api/admin/orders`,{
        headers:{
            authtoken,
        }
    })
}

export const changeStatus=async (orderId,orderStatus,authtoken,email)=>{
    await axios.post(
        `${BASE_URL}/api/order-status`,{
            orderId,orderStatus,email
        },
        {
            headers:{
             authtoken,
        }
    }

    )
}