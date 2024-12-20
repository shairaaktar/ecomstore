import { Link } from "react-router-dom"

const AddProductButton=()=>{
    return(
        <div className="menu menu-horizontal ">
       <Link to="/admin/products/createproduct">
                  <button className="btn btn-primary mt-7 " >
                           Add Product+
                    </button>
                  
                  </Link> 

    </div>
        
    )
}

export default AddProductButton;