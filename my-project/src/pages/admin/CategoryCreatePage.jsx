import { FormInput, FileUpload, FormSelect,SectionTitle,CartItemsList, CategoryList } from "../../components"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {LoadingOutlined} from '@ant-design/icons'
import { getParentCategories } from "../../functions/parentcategories";
import BASE_URL from "../../config";
import { Link } from "react-router-dom";

const CategoryCreatePage = () => {
  const [name, setName] = useState('');
  const [loading,setLoading]=useState('');
  const [slug,setSlug]=useState('');
  const [description,setDescription]=useState('')
  const [images,setImages]=useState([]);
  const [parentCategory,setParentCategory]=useState([])
  const [parentCategories,setParentCategories]=useState([]);
  
  
  const featureOption = [false, true];
  const user = useSelector((state) => state.userState);
   const { token } = user;
   const {email}=user

   useEffect(()=>{
    loadParentCatgories();
   },[token,email])
 
   const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error('Authorization token is missing. Please log in again.');
      return;
    }
   

    const categoryData = {
      name,
      slug,
      description,
      images,
      userId:user.id,
      email:user.email,
      token:token
     
    
    };

    console.log('Category Data:', categoryData);  // Log the data to check if it's correct

    try {
const response = await axios.post(`${BASE_URL}/api/category`, {categoryData,email}, {
        headers: {
          authtoken: token,
          
        },
      });
      if(response.status===200){
        toast.success('Category created successfully!');
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

 
  const loadParentCatgories=()=>{
    getParentCategories().then((res)=>{
      console.log('API RESPONSE',res);
      setParentCategories(res)


    }).catch((error)=>{
      console.error('Error Loading categories',error);

    })
    
  }

   const handleParentCategoryChange=(e)=>{
    setParentCategory(e.target.value);
    console.log('Selected ParentCatgery ID :',e.target.value);
  }

  return (
    <>
     <div className="text-md breadcrumbs bg-primary pt-5 pb-5  lg:mt-10 mb-5 lg:pt-10 lg:pb-10 pl-2">
            <ul>
                <li>
                    <Link to='/admindash'>Admin Dashboard</Link>
                </li>
                <li>
                    <Link to='/createcategory'>
                    Create Category
                    </Link>
                </li>
            </ul>

        </div>

    <SectionTitle text='Product Category'/>
    <form className="bg-base-200 rounded-md  px-20 lg:px-40 py-4  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" >
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

{/* <FormSelect

 label='Parent category'
 name='Parent category'
 size='input-sm'
 value={parentCategory}
 onChange={handleParentCategoryChange}
 list={parentCategories.map((cat) => ({ label: cat.name, value: cat._id }))}

/> */}

<FormSelect
  label="Parent category"
  name="Parent category"
  size="input-sm"
  value={parentCategory}
  onChange={handleParentCategoryChange}
  list={[
    { label: "None", value: "" }, // First option as "None"
    ...parentCategories.map((cat) => ({ label: cat.name, value: cat._id }))
  ]}
/>
<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>Assign a parent term to create a hierarchy. The term Jazz, for example, would be the parent of Bebop and Big Band.</p>

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
        Submit
      </button>
      {loading && <LoadingOutlined style={{fontSize:24}} spin/>}
    </form>
   
    </>
    
  );
};

export default CategoryCreatePage;
 