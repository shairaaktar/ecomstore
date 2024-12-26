import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import BASE_URL from '../../config'

const NewCustomersByMonth=()=>{
    const [customers,setCustomers]=useState([])
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetchNewCustomers()

    },[]);

    const fetchNewCustomers=async()=>{
        try{
            const response=await axios.get( `${BASE_URL}/api/new-customers`);
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