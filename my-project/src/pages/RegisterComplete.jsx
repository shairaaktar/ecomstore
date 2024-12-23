

import { FormInput,SubmitBtn } from "../components";
import { Form,Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import {createOrUpdateUser} from '../functions/auth';
import { auth } from "../firebase";
import { store } from "../store";

export const handleRegisterComplete = async ({ request }) => {
     console.log("handleRegisterComplete called");
    const formData=await request.formData();
     console.log("Form data received:", formData);
    const password=formData.get('password');
    const email = window.localStorage.getItem('emailForRegistration');
    console.log("Retrieved email from localStorage:", email);

    if (!email || !password) {
        toast.error("Email and password are required");
        return null;
      }
    
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return null;
      }

    try{
        const result=await auth.signInWithEmailLink(email,window.location.href);
        if(result.user.emailVerified){
            window.localStorage.removeItem('emailForRegistration');
            let user=auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult=await user.getIdTokenResult();

            createOrUpdateUser(idTokenResult.token)
            .then((res)=>{
                store.dispatch({
                    type:"LOGGED_IN_USER",
                    payload:{
                        name:res.data.name,
                        email:res.data.email,
                        token:idTokenResult.token,
                        role:res.data.role,
                        id:res.data._id,
                    }
                })
            })
            .catch((err)=>console.log(err));
            toast.success("Registration Complete!!");
            return redirect('/');
        }

    }catch(err){
        console.log(err);
        toast.err(err.message);
        return null;

    }

  };


const RegisterComplete=()=>{
    return(
       <section className="h-screen grid place-items-center">
        <Form method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        
        >
            <h4 className="text-center text-3xl font-bold">Register</h4>
            <FormInput type='text' label='username' name='username'/>
            <FormInput  type='email' label='email' name='email'/>
            <FormInput  type='password' label='password' name='password'/>
           <div>
            <SubmitBtn text='register'/>
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

export default RegisterComplete;
