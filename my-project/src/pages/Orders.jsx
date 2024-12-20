import { redirect,useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { OrdersList,PaginationContainer,SectionTitle } from "../components";
import { useSelector } from "react-redux";


const Orders=()=>{
    const user=useSelector((state)=>state.userState);

    if(!user){
        toast.warn('You must logged in to view orders')
        return redirect('/login');
    }
    
    return(
       <OrdersList/>
    )
}

export default Orders;