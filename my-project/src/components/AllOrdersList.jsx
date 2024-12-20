import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import {getOrders,changeStatus} from '.././functions/adminOrder'
import SectionTitle from "./SectionTitle";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import ShowPaymentInfo from "./Admin/ShowPaymentInfo";
import PaginationContainer from "./PaginationContainer";
const ORDER_PER_PAGE=10;

day.extend(advancedFormat);


const AllOrdersList=()=>{
    const [allOrders,setAllOrders]=useState([]);
    const [orders,setOrders]=useState([])
    const [ordersCount,setOrdersCount]=useState(0);
    const [page,setPage]=useState(1);
    
    const user=useSelector((state)=>state.userState);
    console.log('user-->',user)
    const {token}=user
    const {email}=user
    console.log('token',token)


     useEffect(()=>{
        loadOrders();
         fetchOrdersCount();
    },[page,token,email]);

    // useEffect(()=>{
    //     axios.post('http://localhost:8001/api/admin/orders',{email},{
    //         headers:{
    //             Authorization:`Bearer ${token}`,
    //             authtoken:token,
                
    //         }

    //     }).then((response)=>{
    //         setAllOrders(response.data);
    //         console.log(response)

    //     }).catch((error)=>{
    //         console.error('Error fetching orders'.error)
    //     })
    // },[token,email]);

    // const loadOrders=()=>{
    //   axios.post('http://localhost:8001/api/admin/orders',{email,page,ORDER_PER_PAGE},{
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       authtoken: token,
    //   }.then((response)=>{
    //     setAllOrders(response.data);
    //     console.log(response)

    //   }).catch((error)=>{

    //     console.error('Error fetching Orders',error)
    //   })

    //   })
    // }

    const loadOrders = () => {
      axios.post('http://localhost:8001/api/admin/orders', { email, page, limit: ORDER_PER_PAGE }, {
          headers: {
              Authorization: `Bearer ${token}`,
              authtoken: token,
          }
      }).then((response) => {
          setAllOrders(response.data);
          console.log(response);
      }).catch((error) => {
          console.error('Error fetching orders', error);
      });
  };


    // const loadOrders=()=>{
    //   getOrders(token).then((res)=>{
    //     console.log(JSON.stringify(res.data,null,4));
    //     setOrders(res.data);
    //   })
    // }


    const handleStatusChange=(orderId,orderStatus)=>{
      changeStatus(orderId,orderStatus,token,email).then((res)=>{
        toast.success('Status Updated');
         allOrders();
      })
    }

    const fetchOrdersCount =()=>{
      axios.get('http://localhost:8001/api/admin/orders/count',{
        headers:{
          Authorization:`Bearer ${token}`,
          authtoken:token,
          
      }

      }).then((response)=>{
        setOrdersCount(response.data.totalOrders);
        console.log('Orders Count--->',response.data.totalOrders);
      }).catch((error)=>{
        console.error('Error fetching orders count',error);
      })
    }


    

    const handleDelete = (id) => {
        // Ensure id is defined before proceeding
        console.log('id',id)
        if (!id) {
          console.error('Invalid id:', id);
          return;
        }
      
        Swal.fire({
          icon: 'warning',
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
        }).then(result => {
          if (result.value) {
            axios.post(`http://localhost:8001/api/admin/orders/${id}`,{email},
              {
                headers:{
                   Authorization:`Bearer ${token}`,
                    authtoken:token,
                   
                }
            })
              .then(response => {
                if (response.status === 200) {
                  const orderToDelete = allOrders.find(order => order._id === id);
                  setAllOrders(allOrders.filter(order => order._id !== id));
                  Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `Employee Id : ${orderToDelete.id}  has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  fetchOrdersCount();
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while deleting the employee!',
                  });
                }
              })
             .catch(error => {
                console.error('Error Order:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong while deleting the employee!',
                });
              }); 
          }
        });
      };

    return(
        <div className="mt-8">
            <div className="mb-4 capitalize">
                {allOrders <1 ?(
                    <SectionTitle text='There is no order at the monent'/>

                ):(
                    <h1>
                        total Orders :{ordersCount}

                    </h1>
                )}

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Products</th>
                            <th>ProductImage</th>
                            <th>Total</th>
                            
                            <th className="hidden sm:block">Date</th>
                            <th>OrderStatus</th>
                            {/* <th colSpan={2} className="text-center">
                                Actions
                            </th> */}
                           
                            <th  >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order)=>{
                            const id=order._id;
                            console.log('order',order)

                            const {name ,address,numItemsInCart,orderTotal,createdAt,cartItems,orderStatus}=order
                            

                            
                            console.log('name ,address,numItemsInCart,orderTotal,createdAt,cartItems,orderStatus',name ,address,numItemsInCart,orderTotal,createdAt,cartItems,orderStatus)
                            const date=day(createdAt).format(`hh:mm a-MMM Do, YYYY`);
                            return(
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{address}</td>
                                    <td> {cartItems.map((item) => (
                                            <div key={item.productID}className="mb-2" >
                                                 <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </div>
                                        ))}</td>
                                    <td>
                                        {cartItems.map((item) => (
                                            <div key={item.productID} className="mb-2">
                                                {/* {item.title} - {item.amount} x ${item.price}\n
                                               Color: {item.productColor} */}
                                                <div>{item.title} - {item.amount} x ${item.price}</div>
                                                <div>Color: {item.productColor}</div>
                                            </div>
                                        ))}
                                    </td>
                                  <td>${orderTotal}</td>
                                 
                                  
                                  <td className="hidden sm:block">{date}</td>
                                   
                                  <td>
                                    {<select
                                    onChange={(e)=>
                                      handleStatusChange(order._id,e.target.value)
                                      
                                    }
                                    name="status"
                                    className="form-control"
                                    defaultValue={orderStatus}
                                    >
                                      <option value="Not Processed">Not Processed</option>
                                     
                                     <option value="Pending payment">Pending payment</option>
                                     <option value="Processing">Processing</option>
                                     <option value="On Hold">On Hold</option>
                                    <option value="Dispatched">Dispatched</option>
                                    
                                     <option value="Completed">Completed</option>
                                     <option value="Cancelled">Cancelled</option>
                                     <option value="Refunded">Refunded</option>
                                     <option value="Failed">Failed</option>
                                     <option value="Return">Return</option>
                                     <option value="Packeging">Packeging</option>
                                     <option value="Shipped Orders">Shipped orders</option>
                                      </select>}
                                  </td>

                                
                                  
                                  {/* <ShowPaymentInfo order={order} showStatus={false} /> */}
                                    
                                  <td 
                                   className="text-right"

                                  >
                                    <button className="btn btn-primary"   onClick={()=>handleDelete(id)}>
                                        Delete

                                    </button>
                                   

                                  </td>
                                 



                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
            <PaginationContainer
            current={page}
            total={ordersCount}
            pageSize={ORDER_PER_PAGE}
            onChange={(value)=>setPage(value)}
            
            />


        </div>
    )

}

export default AllOrdersList;