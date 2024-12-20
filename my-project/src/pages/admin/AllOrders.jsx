import { AllOrdersList } from "../../components"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const AllOrders=()=>{
    const user=useSelector((state)=>state.userState);

    if(!user){
        toast.warm('You must logged in to view orders')
        return redirect('/login');
    }
    return (
        <AllOrdersList/>
    )

}
export default AllOrders