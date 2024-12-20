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

    return (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">New Customers This Month</h2>
          {loading ? (
            <p>Loading...</p>
          ) : customers.length === 0 ? (
            <p>No new customers for this month.</p>
          ) : (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Role</th>
                  <th className="border border-gray-300 px-4 py-2">Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{customer.role}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(customer.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );

}

export default NewCustomersByMonth