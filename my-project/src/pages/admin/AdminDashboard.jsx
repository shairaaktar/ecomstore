import { Card ,SectionTitle } from "../../components";

import img1 from '../../images/img4.jpg'
import img2 from '../../images/img5.jpg'
import img3 from '../../images/img6.jpg'

const carousalImages1=[img1, img2,img3 ];
const carousalImages2=[img1, img2,img3 ];
const carousalImages3=[img1, img2,img3 ];


const AdminDashboard=()=>{

    return <>
   <SectionTitle text='Admin Dashboard'/>
   <div className="flex justify-between items-center mt-8  border-base-300 pb-5">
    <div className=" grid gap-7 md:grid-cols-2 ">
    <Card text='Products' to='/admin/products' carousalImages={carousalImages1}/>
    <Card text='Orders' to='/admin/orders' carousalImages={carousalImages2} />
    <Card text='Customers' to='/admin/customers' carousalImages={carousalImages3}/>
    <Card text='Category' to='/admin/category/createcategory' carousalImages={carousalImages3}/>
 

    </div>
 
   </div>
    
    </>
}

export default AdminDashboard;