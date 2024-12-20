import { FormInput, FileUpload, FormSelect,SectionTitle,CartItemsList, CategoryList } from "../../components"
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {LoadingOutlined} from '@ant-design/icons'




const ParentCategoryCreate = () => {
  const [name, setName] = useState('');
  const [loading,setLoading]=useState('');
  const [slug,setSlug]=useState('');
  const [description,setDescription]=useState('')
  const [images,setImages]=useState([]);
  const [parentCategory,setParentCategory]=useState([])
  
  
  const featureOption = [false, true];
  const user = useSelector((state) => state.userState);
   const { token } = user;
   const {email}=user
 
   const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error('Authorization token is missing. Please log in again.');
      return;
    }

    const parentcategoryData = {
      name,
      slug,
      description,
      images,
      userId:user.id,
      email:user.email,
      token:token
     
    
    };

    console.log('Category Data:', parentcategoryData);  // Log the data to check if it's correct

    try {
const response = await axios.post('http://localhost:8001/api/parent-category', {parentcategoryData,email}, {
        headers: {
          authtoken: token,
          
        },
      });
      if(response.status===200){
        toast.success('Parent-Category created successfully!');
        setName('');
        setSlug('');
        setDescription('');
        setImages([]);

      }
       else if(response.status===403){
        // throw new Error ('Not Admin, Access Denied!')
        toast.error('Not Admin, Access Denied!');

      }
      
      else {
        throw new Error('Failed to create product.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error('Failed to create product. Please try again later.');
    }
  };

  const handleParentCategory=()=>{

  }

  return (
    <>
    <SectionTitle text='Parent Category'/>
    <form className="bg-base-200 rounded-md px-40 py-4  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" >
      {/* title */}
      <FormInput
        type='text'
        label='Name'
        name='name'
        value={name}
        size='input-sm'
        onChange={(e) => setName(e.target.value)}
      />
     
     <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The name is how it appears on your site</p>


      <div className="divider lg:divider"></div>
      <FormInput
        type='text'
        label='Slug'
        name='name'
        value={slug}
        size='input-sm'
        onChange={(e) => setSlug(e.target.value)}
      />
       <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The "slug" is the URL-friendly version of the name. it is usually all lower case and contains only letters,numbers,and hypens.</p>





<div className="divider lg:divider"></div>
       <FormInput
        type='text'
        label='Description'
        name='name'
        value={description}
        size='input input-bordered input-lg w-full'
        onChange={(e) => setDescription(e.target.value)}
      />
       <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The description is not prominent by default; however,some themes may show it.</p>

<div className="divider lg:divider"></div>
<h>Image</h>
      <FileUpload
      values={{images}}
      setValues={(val)=>setImages(val.images)}
      setLoading={setLoading}
      />
       <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>Use this image as a background for the page title on this category page</p>

<div className="divider lg:divider"></div>
    
      <button type="submit" className="btn btn-primary btn-sm mt-7" onClick={handleSubmit}>
        Add new parent-category
      </button>
      {loading && <LoadingOutlined style={{fontSize:24}} spin/>}
    </form>
   
    </>
    
  );
};

export default ParentCategoryCreate;
 

