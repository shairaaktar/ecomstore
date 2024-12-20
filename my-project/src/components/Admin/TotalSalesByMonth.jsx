import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formattedPrice } from "../../utils";



const TotalSalesByMonth=()=>{
    const [totalSaleByMonth,setTotalSaleByMonth]=useState([])
    const [selectedMonth,setSelectedMonth]=useState(new Date());

    const user=useSelector((state)=>state.userState)
    const {email,token}=user

    useEffect(()=>{
        console.log("Triggered useEffect with selectedMonth:", selectedMonth);
        if (selectedMonth) {
            fetchtotalSaleByMonth();
        }

    },[selectedMonth,token,email]);

    const fetchtotalSaleByMonth=async()=>{
        try{

            const month=new Date(Date.UTC(
                selectedMonth.getFullYear(),
                selectedMonth.getMonth()

            )).toISOString().slice(0,7);

            console.log("Formatted Month for API (UTC):", month);
            const response = await axios.post(
                `http://localhost:8001/api/total-sales-month?month=${month}`,
                { email,token },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        authtoken: token,
                    },
                }
            );
            console.log('API Response:', response.data);
            setTotalSaleByMonth(response.data);

        }catch(error){
            console.error('Error fetching monthly sales:', error);
            setTotalSaleByMonth([]);
        }
    };

return(
    <div>
        <div>
        <div>
            <h1 className="text-sm font-normal"> Total Sale this month</h1>
        </div>
        </div>

        {totalSaleByMonth>0?(
            <div className=" text-sm font-semibold">{formattedPrice(totalSaleByMonth)}</div>

        ):(
            <div></div>

        )}
    </div>
)

}

export default TotalSalesByMonth