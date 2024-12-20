

import { FormInput,SubmitBtn } from "../components";
import { Form,Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Axios } from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export const handleRegister = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
  
    const config = {
      url: 'http://localhost:5173/register/complete',
      handleCodeInApp: true,
    };
  
    try {
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(`Email is sent to ${email}. Click the link to complete your registration`);
      window.localStorage.setItem('emailForRegistration', email);
      return redirect('/');
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };



const Register=()=>{

    let navigate=useNavigate()
    const {user}=useSelector((state)=>({...state}));

    useEffect(()=>{
        if(user && user.token){
            navigate('/');
        }

    },[user])

    // const handleRegister=async(e)=>{
    //     e.preventDefault()
    //     const config={
    //         url:'http://localhost:5173/register/complete',
    //         handleCodeInApp:true
    //     }
    //     await auth.sendSignInLinkToEmail(email,config)
    //     toast.success(`Email is sent to ${email}. Click the link to complete your registration`);
    //     window.localStorage.setItem('emailForRegistration',email)
        
   // };


    return(
       <section className="h-screen grid place-items-center">
        <Form method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        
        >
            <h4 className="text-center text-3xl font-bold">Register</h4>

            <FormInput  type='email' label='email' name='email'/>

           <div>
            <SubmitBtn  text='register'/>
           </div>
           <p className="text-center">
                Already a member?{' '}
                <Link to='/login'
                className="ml-2 link link-hover link-primary capitalize"
                >
               login
                </Link>

              </p>

        </Form>
       </section>
    )
}

export default Register;