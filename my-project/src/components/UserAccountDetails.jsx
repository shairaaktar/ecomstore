import React, { useEffect, useState } from 'react';
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../firebase";
import { createOrUpdateUser } from "../functions/auth";
import { store } from "../store";
import { redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import BASE_URL from '../config';
import axios from 'axios';





  const fetchUserDetails=async (token)=>{
  

    try{

        const response=await axios.get(`${BASE_URL}/api/get-account-details`,{
            headers:{
                authtoken:token,
            },
        })
        console.log('userdetails',response)
        return response.data;

    }catch(error){
        console.error("Error fetching user details:", error);
    return null;

    }
  }


  const addOrUpdateUserDetails=async(details,token)=>{
    try{
        const response = await axios.post(
            `${BASE_URL}/api/create-or-update-account`,
            details,
            {
              headers: {
                authtoken: token,
              },
            }
          );
          return response.data;

    }catch(error){
        console.error("Error adding or updating details:",error);
        toast.error("Failed to save details. Please try again later.");

         return null;     
    }
  }


const UserAccountDetails = () => {

    const [userDetails,setUserDetails]=useState(null);
    const [isEditing,setIsEditing]=useState(false);
    const user=useSelector((state)=>state.userState);
    const {email,token}=user;


    useEffect(()=>{
        const loadUserDetails=async()=>{
            const details=await fetchUserDetails (token);
            console.log('details',details)
            setUserDetails(details);

            };

            
      loadUserDetails();

    },[token]);


    const handleSubmit=async (event)=>{
        event.preventDefault();

        const formData=new FormData(event.target);

        const updatedDetails={
            email:email,
            name:formData.get("name"),
            address:formData.get("address"),
            number:formData.get("number"),


        };

        const response=await addOrUpdateUserDetails(updatedDetails,token);

        if(response){
            toast.success("User details saved successfully!");
            setUserDetails(updatedDetails);
            setIsEditing(false);
        }
    };


  

  return (
    <>
    
    <section
     className="h-screen  w-3/4 "
     >
      <div 
      className='card  w-80 lg:w-130 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >

        <h4 className='text-3xl font-bold'>
            Personal Information

        </h4>

        {isEditing || !userDetails ? (
            <Form method='post' className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                <FormInput 
                type="text"
                label="Name"
                name="name"
                defaultValue={userDetails?.name || ""}
                />
                <FormInput
                type="text"
                label="Address"
                name="address"
                defaultValue={userDetails?.address ||""}
                
                />
                <FormInput
                type="text"
                label="Phone Number"
                name="number"
                defaultValue={userDetails?.number || ""}
                />
                <div className='w-20'>
                <SubmitBtn label="save"/>
                </div>
            </Form>

        ):(
            <div className='px-4 sm:px-0'>
                <div className='mt-6 border-t border-gray-100'>
                    <div class="divide-y divide-gray-100">
                    <div className="px-3 py-6 grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 col-span-1 sm:col-span-2 sm:mt-0">{userDetails.name || "Not provided"}</dd>
           
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{userDetails.address || "Not provider"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{userDetails.number || "Not provider"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Email</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
                
                    </div>

                  

                   

                    <button
              className="btn btn-primary mt-4"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button> 
            </div>



                </div>
        )}
      </div>
    </section>
    </>
  );
}

export default UserAccountDetails;

