import React from "react"

import { Link } from "react-router-dom"


const AdminDashboardNav=()=>{
    return(
        <nav>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link>Dashboard</Link>

                </li>
                <li className="nav-item">
                    <Link>Product</Link>

                </li>
                <li className="nav-item">Category</li>
                <li className="nav-item">Parent-Category</li>
                <li className="nav-item">Coupon</li>
                <li className="nav-item">Password</li>
            </ul>

        </nav>
    )



}

export default AdminDashboardNav