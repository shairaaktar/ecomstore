import axios from 'axios';

export const getOrders=async (authtoken)=>{
    await axios.get(`http://localhost:8001/api/admin/orders`,{
        headers:{
            authtoken,
        }
    })
}

export const changeStatus=async (orderId,orderStatus,authtoken,email)=>{
    await axios.post(
        `http://localhost:3000/api/order-status`,{
            orderId,orderStatus,email
        },
        {
            headers:{
             authtoken,
        }
    }

    )
}