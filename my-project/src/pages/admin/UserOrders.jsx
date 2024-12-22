import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle } from "../../components";
import BASE_URL from "../../config";

const UserOrders=()=>{
    const {id}=useParams()
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/user/${id}/orders`)
        .then((response)=>{
            setOrders(response.data)
            console.log('response',response.data)
        })
        .catch((error)=>{
            console.error("Error fetching orders", error);
        })
    },[id])
    return(
      <>
      <div className="mt-8">
        <div className="mb-4 capitalize">
            {/* {orders.length<1?(
                <SectionTitle text='There is no order placed by this user'/>

            ):(
                <h1>
                    total Orders
                </h1>
            )} */}

        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Products</th>
                    <th>Cost</th>
                    <th className="hidden sm:block">Date</th>
                    <th>Order Status</th>

                    </tr>
                </thead>
                <tbody>
                 {orders.map((order)=>{
                    // console.log(order);
                    const id=order._id;
                    // console.log('id',id)

                    const {name,address,numItemsInCart,orderTotal,createdAt,orderStatus}=order
                    // const date=day(createdAt).format(`hh:mm a-MMM Do, YYYY`);
                    return (
                        <tr key={id}> 
                        <td>{name}</td>
                        <td>{address}</td>
                        <td>{numItemsInCart}</td>
                        <td>{orderTotal}</td>
                        <td className="hidden sm:block">{createdAt}</td>
                        <td>{orderStatus}</td>


                        </tr>
                    )
                })} 

                </tbody>
            </table>
        </div>

      </div>
      </>
    )

}

export default UserOrders;