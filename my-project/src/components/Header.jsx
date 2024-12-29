import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import AdminNotificationForm from "../pages/admin/AdminNotificationForm";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import { logoutUser } from "../features/user/userSlice";
import AdminNav from "./AdminNav"
import { useState } from "react";



const Header=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
      const user=useSelector((state)=>state.userState);
   // const {user}=useSelector((state)=>({...state}));
    console.log('User||',user)

 


const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutUser()); // Clear user state in Redux
        navigate('/'); // Navigate to login page after logout
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
        // Handle error or show toast message
      });
  };

  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }
  
    return(
        <>
        <header className="bg-neutral py-2 text-neutral-content  sticky top-0 z-50 shadow-md ">
            <div className="align-element flex justify-between items-center">
                <div className="w-1/2 flex justify-start items-center">
                

{user.role==='admin' &&(
                
               
                  
        


                     
              <button className="text-xs sm:text-sm" >
                <Link to={`/admindash`}>Admin Dashboard</Link>
                

              </button>

                
             )}

</div>



            
           <div className="w-1/2 flex justify-end items-center"
            
            >
           {/* <div className="align-element flex justify-center sm:justify-start"> */}
            

{user.name?(
                     <div className="flex gap-x-2 sm:gap-x-8 items-center">
                    <p className="text-xs sm:text-sm">
                       <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" > Hello, {user.name}</div>
                        <ul tabIndex={0} 
                         className="dropdown-content menu bg-base-100 text-black z-[1] w-52 p-2 shadow" >
                            <li>
                            <Link to={`/dashboard`}>
                            My Dashboard
                            </Link>
                            </li>
                        </ul>

                       </div>
                    </p>
                    
                    <button className="btn btn-xs btn-outline text-white" 
                    onClick={handleLogout}>
                        logout

                    </button>

                </div>
                ):(
                      <div className="flex gap-x-6 justify-center items-center">
                      <Link to="/login" className="link link-hover text-xs sm:text-sm">
                      Sign in / Guest
                      </Link >
                      <Link to="/register" className="link link-hover text-xs sm:text-sm">
                      Create Account
                      </Link >

                     
  
  
                  </div>
                
                
                
                )}
            </div>
           </div>

        </header>
        <div
       
        className={
            `fixed top-0 left-0 w-74 bg-base-100 text-primary h-full shadow-lg transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
        >
            <div className="flex justify-between p-4">
                <h2 className="text-xl">Admin Dashboard</h2>
                <button 
                className="text-lg "
                onClick={toggleSidebar}
                >
                    X
                </button>

            </div>
            <nav>
                <ul >
                    <AdminNav/>

                </ul>
            </nav>

        </div>
        {isSidebarOpen &&(
            <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
            >

            </div>
        )}

        </>
      
        
    )
}

export default Header;