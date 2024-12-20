import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import axios from "axios";
import SectionTitle from "../SectionTitle";



const EveryDaysOrders=()=>{
    const [dailyOrders,setDailyOrders]=useState(null);
    const [selectedDate,setSelectedDate]=useState(new Date());

    const user=useSelector((state)=>state.userState);
    const {email,token}=user;

    useEffect(()=>{
        console.log("Triggered useEffect with selectedDate:", selectedDate);
        if (selectedDate) {
            fetchTodaysOrders();
        }

    },[selectedDate,token,email])




    

    const fetchTodaysOrders=async()=>{
        try{

            const date=selectedDate.toISOString().slice(0,10);
            console.log("Formatted Date for API:", date);


            const response=await axios.post(`http://localhost:8001/api/todays-orders?date=${date}`,

                {email,token },{
                    headers:{
                      Authorization:  `Bearer ${token}`,
                      authtoken:token
                    }

            })

            console.log('API Response:',response.data);
            const orders = response.data?.orders || []; // Fallback to an empty array if `orders` is undefined or null.
        setDailyOrders(orders);
            // setDailyOrders(response.data.orders)

        }catch(error){
            console.error("Error fetching today's orders:",error);
        }
    }


    return(
        <div>
            <h1 className="text-sm">Orders for </h1>
            <DatePicker
            selected={selectedDate}
            onChange={(date)=>{
                console.log("Selected Date:",date)
                setSelectedDate(new Date(date));
            }}
            dateFormat="yyyy-MM-dd"
            className="border text-sm p-2 rounded"
            />

            <div className="mt-8">
                <div className="mb-4 capitalize">
                    {dailyOrders<1?(
                        <SectionTitle text='No Order placed '/>

                    ):(
                        <h1 className="text-sm">
                            total Orders:{dailyOrders.length}
                        </h1>

                    )}

                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#Order Number</th>
                               
                                <th>Name</th>
                                <th>Address</th>
                                <th>Total Amount</th>
                                <th>OrderStatus</th>
                            </tr>

                        </thead>
                        <tbody>
                             {/* {dailyOrders.map((order)=>{
                                const id=order._id;
                                console.log('order,order')
                            })}  */}

                            {Array.isArray(dailyOrders) && dailyOrders.length>0 ?(
                                (dailyOrders.map((order)=>{
                                    const id=order._id
                                    return(
                                        <tr key={id}>
                                            <td>{order.orderNumber}</td>
                                           
                                            <td>{order.name}</td>
                                            <td>{order.address}</td>
                                            {/* <td>
                                                {order.cartItems.map((item)=>(
                                                    <div key={item.productID}>
                                                        <div>{item.}</div>
                                                    </div>
                                                ))}
                                            </td> */}
                                            <td>{order.chargeTotal}</td>
                                            <td>{order.orderStatus}</td>

                                        </tr>
                                    )

                                }))

                            ):(
                                <p className="text-sm">No Orders found for this day</p>
                            )}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )

}

export default EveryDaysOrders