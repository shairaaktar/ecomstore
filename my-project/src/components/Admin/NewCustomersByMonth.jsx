import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const NewCustomersByMonth=()=>{
    const [customers,setCustomers]=useState([])
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetchNewCustomers()

    },[]);

    const fetchNewCustomers=async()=>{
        try{
            const response=await axios.get( `http://localhost:8001/api/new-customers`);
           setCustomers(response.data);
           console.log('response',response)

        }catch(error){
            console.error('Error fetching new customers:', error);
             throw error;
        }
    }

    return(
        <div><h6 className='text-sm font-normal mb-4'>
            New Customers This Month

            </h6>
            <p>
                {customers.length}
            </p>
            </div>
    )

}

export default NewCustomersByMonth