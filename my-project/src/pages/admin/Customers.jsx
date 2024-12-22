import { useState,useEffect } from "react"
import { useSelector } from "react-redux";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import {Link} from 'react-router-dom'
import BASE_URL from "../../config";


const Customers=()=>{
    const [allUsers,setAllUsers]=useState([]);
    const [page,setPage]=useState(1);
    const [usersCount,setUsersCount]=useState(0)

    const user=useSelector((state)=>state.userState);
    console.log('user-->',user)

    const {token,email}=user

    useEffect(()=>{
        fetchAllUser();
        fetchUsersCount();

    },[email,token])


    const fetchAllUser=()=>{
        axios.post(`${BASE_URL}/api/all-users`,{email

        },{
            headers:{
                Authorization: `Bearer ${token}`,
                authtoken: token,
            }

        }).then((response)=>{
            setAllUsers(response.data.users);
            console.log(response)
        }).catch((error)=>{
            console.error('Error fetching users',error)
    });
    }

  const  fetchUsersCount=()=>{
        axios.get(`${BASE_URL}/api/admin/users/count`,{
            headers:{
                Authorization:`Bearer ${token}`,
                authtoken:token,
                
            }
        }).then((response)=>{
                 setUsersCount(response.data.totalUsers);
                 console.log('usersCount',usersCount)


        }).catch((error)=>{
            console.error('Error fetching orders count',error);
        })
    }


    return (
        <>
        <div className="mt-8">
            <div className="mb-4 capitalize">
                {allUsers <1 ? (
                    <SectionTitle text='There is no customer at the moment'/>

                ):(
                    <h1>

                        total Customer:{usersCount}
                    </h1>
                )}

            </div>
            <div className="over-flow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                           
                            <th>role</th>
                            
                            <th>Last Active</th>
                            <th>Total Orders</th>
                            <th>Total Reviews</th> 
                        </tr>
                    </thead>
                     <tbody>
                        {allUsers.map((user)=>{
                            const id=user._id;

                            const {name,email,role, lastOrderDate,orders,reviews}=user

                           return(
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                               
                                <td>{lastOrderDate ? new Date (lastOrderDate).toLocaleDateString():'N?A'}</td>
                                <td><Link to={`/users/${id}/orders`}>

                                {orders.length}
                                </Link></td>
                                 <td>
                                    <Link   to={`admin/UserReviews/${id}`}>
                                    {reviews.length}
                                    </Link>
                                    </td> 
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
export default Customers