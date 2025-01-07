// import { FormInput,FileUpload } from "../components"
// import { Form } from "react-router-dom"
// import FormSelect from "../components/FormSelect"
// import { useState } from "react"
// import { useSelector } from "react-redux"
// import { toast } from "react-toastify"
// import axios from "axios"



// const ProductCreatePage=()=>{
//   const [title,setTitle]=useState('');
//   const [company,setCompany]=useState('');
//   const [description,setDescription]=useState('');
//   const [featured,setFeatured]=useState('');
//   const [price,setPrice]=useState('');
//   const [shipping,setShipping]=useState('');
//   const [colors,setColors]=useState('');
//   const [images,setImages]=useState([])
//   const featureOption=[false,true];
//   const user=useSelector((state)=>state.userState);
//   // console.log('user',user)
//   const {token}=user;
//   // console.log('Token',token)

//   const handleSubmit= async()=>{
//     event.preventDefault();
//     if(!token){
//       toast.error('Authorization token is missing.Please log in again')
//       return;
//     }

//     const productData={
//       title,
//       company,
//       description,
//       featured,
//       price,
//       shipping,
//       colors: colors.split(',').map(color => color.trim()),
//       images, // assuming colors are comma-separated
//       userId: user.id,

//     };
//     try{
//       const response=await axios.post('http://localhost:8001/api//create-product',productData,{
//         headers:{
//           authtoken:token,
//         },
//       });
//       if(response.status===201){
//         toast.success('Product created successfully!');
//         // Clear form fields
//         setTitle('');
//         setCompany('');
//         setDescription('');
//         setFeatured(false);
//         setPrice('');
//         setShipping(false);
//         setColors('');
//         setImages([]);

//       }else{
//         throw new Error('Failed to create product.');

//       }
//     }catch(error){
//       console.error('Error creating product:', error);
//       toast.error('Failed to create product. Please try again later.');

//     }

    
    
//   }
  
//     return (
//        <Form  classroom="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8
//        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" onSubmit={handleSubmit}> 
//        {/* title */}
//        <FormInput
//       type='text'
//       label='title'
//       name='title'
//       value={title}
//       size='input-sm'
//      onChange={(e)=>{
//       setTitle(e.target.value)
//      }}

      
//       />
//       {/* company */}
//       <FormInput
     
//       label='company'
//       name='comapny'
//       text='text'
//       value={company}
//       size='imput-sm'
//       onChange={(e)=>{
//         setCompany(e.target.value)
//        }}
     
//       />

//       {/* description */}
//       <FormInput
     
//       label='description'
//       name='descriotion'
//       type='text'
//       value={description}
//       size='imput-sm'
//       onChange={(e)=>{
//         setDescription(e.target.value)
//        }}
//       />
//       {/* featured */}
//       <FormSelect
     
//       label='featured'
//       name='featured'
//       type='text'

//       size='imput-sm'
//       onChange={(e)=>{
//         setFeatured(e.target.value)
//        }}
//        list={featureOption}
//       />
    
    
//       {/* category */}
//        <div className="form-control">
//        <FormInput
     
//      label='category'
//      name='category'
//      size='imput-sm'
//      onChange={(e)=>{
//       setCategory(e.target.value)
//      }}
     
//      />

//        </div>

     
//       {/* price */}
//        <FormInput
   
//       label='price'
//       name='price'
//       type='Number'
//       value={price}
//       size='imput-sm'
//       onChange={(e)=>{
//         setPrice(e.target.value)
//        }}
//       />
//       {/* shipping */}
//        <FormSelect
     
//       label='shipping'
//       name='shipping'
//       size='imput-sm'
//       onChange={(e)=>{
//         setShipping(e.target.value)
//        }}
//        list={featureOption}
//       />
//       {/* colors */}
//        <FormInput
   
//       label='color'
//       name='color'
//       size='imput-sm'
//       type='text'
//       value={colors}
//       placeholder='Comma seperated values'
//       onChange={(e)=>{
//         setColors(e.target.value)
//        }}
//       />  
//        {/* image */}
//        <FileUpload
//       values={{images}}
//       setValues={(val)=>setImages(val.images)}
     
      
//       />
//        <button type="submit"  className="btn btn-primary btn-sm">
//             Submit

//         </button>
      

//        </Form>

//     )
// }

// export default ProductCreatePage

// import { FormInput, FileUpload ,FormSelect} from "../components";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import axios from "axios";

// const ProductCreatePage = () => {
//   const [title, setTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [description, setDescription] = useState('');
//   const [featured, setFeatured] = useState('');
//   const [price, setPrice] = useState('');
//   const [shipping, setShipping] = useState('');
//   const [colors, setColors] = useState('');
//   const [images, setImages] = useState([]);
//   const [category, setCategory] = useState('');
//   const featureOption = [false, true];
//   const user = useSelector((state) => state.userState);
//   const { token } = user;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!token) {
//       toast.error('Authorization token is missing. Please log in again.');
//       return;
//     }

//     const productData = {
//       title,
//       company,
//       description,
//       featured,
//       price,
//       shipping,
//       colors: colors.split(',').map(color => color.trim()),
//       images,
//       category,
//       userId: user.id,
//     };
//     console.log('Product data',productData)

//     try {
//       const response = await axios.post('http://localhost:8001/api/create-product', productData, {
//         headers: {
//           authtoken: token,
//         },
//       });
//       if (response.status === 201) {
//         toast.success('Product created successfully!');
//         // Clear form fields
//         setTitle('');
//         setCompany('');
//         setDescription('');
//         setFeatured(false);
//         setPrice('');
//         setShipping(false);
//         setColors('');
//         setImages([]);
//         setCategory('');
//       } else {
//         throw new Error('Failed to create product.');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//       toast.error('Failed to create product. Please try again later.');
//     }
//   };

//   return (
//     <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" onSubmit={handleSubmit}>
//       {/* title */}
//       <FormInput
//         type='text'
//         label='Title'
//         name='title'
//         value={title}
//         size='input-sm'
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       {/* company */}
//       <FormInput
//         label='Company'
//         name='company'
//         type='text'
//         value={company}
//         size='input-sm'
//         onChange={(e) => setCompany(e.target.value)}
//       />
//       {/* description */}
//       <FormInput
//         label='Description'
//         name='description'
//         type='text'
//         value={description}
//         size='input-sm'
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       {/* featured */}
//       <FormSelect
//         label='Featured'
//         name='featured'
//         type='text'
//         size='input-sm'
//         onChange={(e) => setFeatured(e.target.value)}
//         list={featureOption}
//       />
//       {/* category */}
//       <div className="form-control">
//         <FormInput
//           label='Category'
//           name='category'
//           size='input-sm'
//           onChange={(e) => setCategory(e.target.value)}
//         />
//       </div>
//       {/* price */}
//       <FormInput
//         label='Price'
//         name='price'
//         type='number'
//         value={price}
//         size='input-sm'
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       {/* shipping */}
//       <FormSelect
//         label='Shipping'
//         name='shipping'
//         size='input-sm'
//         onChange={(e) => setShipping(e.target.value)}
//         list={featureOption}
//       />
//       {/* colors */}
//       <FormInput
//         label='Colors'
//         name='colors'
//         size='input-sm'
//         type='text'
//         value={colors}
//         placeholder='Comma separated values'
//         onChange={(e) => setColors(e.target.value)}
//       />
//       {/* image */}
//       <FileUpload
//         values={{ images }}
//         setValues={(val) => setImages(val.images)}
//         setLoading={(loading) => console.log('loading:', loading)}
//       />
//       <button type="submit" className="btn btn-primary btn-sm">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ProductCreatePage;

// import { FormInput, FileUpload,FormSelect } from "../components";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import axios from "axios";

// const ProductCreatePage = () => {
//   const [title, setTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [description, setDescription] = useState('');
//   const [featured, setFeatured] = useState('');
//   const [price, setPrice] = useState('');
//   const [shipping, setShipping] = useState('');
//   const [colors, setColors] = useState('');
//   const [images, setImages] = useState([]);
//   const [category, setCategory] = useState('');
//   const featureOption = [false, true];
//   const user = useSelector((state) => state.userState);
//   const { token } = user;

//   const handleSubmit = async (event) => {
//     event.preventDefault();  // Prevent default form submission

//     if (!token) {
//       toast.error('Authorization token is missing. Please log in again.');
//       return;
//     }

//     const productData = {
//       title,
//       company,
//       description,
//       featured,
//       price,
//       shipping,
//       colors: colors.split(',').map(color => color.trim()),
//       images,
//       category,
//       userId: user.id,
//     };

//     console.log('Product Data:', productData);  // Log the data to check if it's correct

//     try {
//       const response = await axios.post('http://localhost:8001/api/create-product', productData, {
//         headers: {
//           authtoken: token,
//         },
//       });
//       if (response.status === 201) {
//         toast.success('Product created successfully!');
//         // Clear form fields
//         setTitle('');
//         setCompany('');
//         setDescription('');
//         setFeatured(false);
//         setPrice('');
//         setShipping(false);
//         setColors('');
//         setImages([]);
//         setCategory('');
//       } else {
//         throw new Error('Failed to create product.');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//       toast.error('Failed to create product. Please try again later.');
//     }
//   };

//   return (
//     <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" onSubmit={handleSubmit}>
//       {/* title */}
//       <FormInput
//         type='text'
//         label='Title'
//         name='title'
//         value={title}
//         size='input-sm'
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       {/* company */}
//       <FormInput
//         label='Company'
//         name='company'
//         type='text'
//         value={company}
//         size='input-sm'
//         onChange={(e) => setCompany(e.target.value)}
//       />
//       {/* description */}
//       <FormInput
//         label='Description'
//         name='description'
//         type='text'
//         value={description}
//         size='input-sm'
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       {/* featured */}
//       <FormSelect
//         label='Featured'
//         name='featured'
//         type='text'
//         size='input-sm'
//         onChange={(e) => setFeatured(e.target.value)}
//         list={featureOption}
//       />
//       {/* category */}
//       <div className="form-control">
//         <FormInput
//           label='Category'
//           name='category'
//           size='input-sm'
//           onChange={(e) => setCategory(e.target.value)}
//         />
//       </div>
//       {/* price */}
//       <FormInput
//         label='Price'
//         name='price'
//         type='number'
//         value={price}
//         size='input-sm'
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       {/* shipping */}
//       <FormSelect
//         label='Shipping'
//         name='shipping'
//         size='input-sm'
//         onChange={(e) => setShipping(e.target.value)}
//         list={featureOption}
//       />
//       {/* colors */}
//       <FormInput
//         label='Colors'
//         name='colors'
//         size='input-sm'
//         type='text'
//         value={colors}
//         placeholder='Comma separated values'
//         onChange={(e) => setColors(e.target.value)}
//       />
//       {/* image */}
//       <FileUpload
//         values={{ images }}
//         setValues={(val) => setImages(val.images)}
//         setLoading={(loading) => console.log('loading:', loading)}
//       />
//       <button type="submit" className="btn btn-primary btn-sm">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ProductCreatePage;


import { FormInput, FileUpload, FormSelect,SectionTitle } from "../components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {LoadingOutlined} from '@ant-design/icons'
import { getCategories } from "../functions/category";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react"
import BASE_URL from "../config";


const ProductCreatePage = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [highlights,setHighlights]=useState([])
  const [featured, setFeatured] = useState(false);
  const [price, setPrice] = useState('');
  const [discountPrice,setDiscountPrice]=useState("");
  const [shipping, setShipping] = useState(false);
  const [colors, setColors] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [loading,setLoading]=useState('');
  const [quantity, setQuantity]=useState('');
  const [categories,setCategories]=useState([]);
  const [sizes,setSizes]=useState([]);
  const [sizeChartColumns,setSizeChartColumns]=useState([]);
  const [sizeChartRows,setSizeChartRows]=useState([]);
  const [discountStartDate,setDiscountStartDate]=useState(null);
  const [discountEndDate,setDiscountEndDate]=useState(null);
  const [discountPercentage,setDiscountPercentage]=useState(null)


  




  
  const featureOption = [false, true];
  
  const user = useSelector((state) => state.userState);
   const { token } = user;
   const {email}=user


   useEffect(()=>{
    loadCategories();
   },[token,email])


   useEffect(()=>{
    if(price && discountPrice && discountPrice<price){
      const discount=((price-discountPrice)/price)*100;
      setDiscountPercentage(discount.toFixed(0));

    }else{
      setDiscountPercentage(null)
    }

   },[price,discountPrice]);

   const handleCategoryChange=(e)=>{
    setCategory(e.target.value);
    console.log('Selected Category ID:', e.target.value);

   }

   const handleAddColumn=()=>{
    setSizeChartColumns([...sizeChartColumns,'']);
   }

   const handleRemoveColumn=(index)=>{
    const updatedColumns=[...sizeChartColumns];
    updatedColumns.splice(index,1);
    setSizeChartColumns(updatedColumns);
   }

   const handleColumnChange=(index,value)=>{
    const updatedColumns=[...sizeChartColumns];
    updatedColumns[index]=value;
    setSizeChartColumns(updatedColumns);
   };

   const handleAddRow=()=>{
    const newRow={};
    sizeChartColumns.forEach((col)=>{
      newRow[col]='';
    });
    setSizeChartRows([...sizeChartRows,newRow]);
   };

   const handleRemoveRow=(index)=>{
    const updatedRows=[...sizeChartRows];
    updatedRows.splice(index,1);
    setSizeChartRows(updatedRows);
   }

   const handleRowChange=(rowIndex,column,value)=>{
    const updatedRows=[...sizeChartRows];
    updatedRows[rowIndex][column]=value;
    setSizeChartRows(updatedRows);
   }


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error('Authorization token is missing. Please log in again.');
      return;
    }

    const productData = {
      title,
     
      description,
      highlights,
      featured,
      price,
      discountPrice,
      shipping,
      quantity,
      colors: colors.split(',').map(color => color.trim()),
      sizes:sizes.split(',').map(size=>size.trim()),
      images,
      category,
      userId: user.id,
      email:user.email,
      token:token,
      sizeChart:{
        columns:sizeChartColumns,
        rows:sizeChartRows,
      },
      discountsSchedule:{
        startDate:discountStartDate,
        endDate:discountEndDate,
      }
    };

    console.log('Product Data:', productData);  // Log the data to check if it's correct

    try {
      const response = await axios.post(`${BASE_URL}/api/create-product`, productData, {
        headers: {
          authtoken: token,
          
        },
      });
      if (response.status === 201) {
        toast.success('Product created successfully!');
        // Clear form fields
        setTitle('');
       
        setDescription('');
        setHighlights([]);
        setFeatured(false);
        setPrice('');
        setDiscountPrice("");
        setShipping(false);
        setQuantity('');
        setColors('');
        setSizes('');
        setImages([]);
        setCategory('');
        setSizeChartColumns(['Size','Chest','Length']);
        setSizeChartRows([]);
        setDiscountStartDate(null);
        setDiscountEndDate(null);


      } else if(response.status===403){
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

  const loadCategories=()=>{
    getCategories().then((res)=>{
      console.log('API RESPONSE',res);
      setCategories(res)
    }).catch((error)=>{
      console.error('Error Loading categories:',error);

    })

  }
  console.log('loadCategories',categories)


  
  

  return (
    <>
      <div className="text-md breadcrumbs bg-primary mt-10 mb-5 pt-5 pb-5 pl-2 lg:mt-10 lg:mb-5 lg:pt-10 lg:pb-10 lg:pl-2 ">
            <ul>
                <li>
                    <Link to='/admindash'>Admin Dashboard</Link>
                </li>
                <li>
                    <Link to='/createproducts'>
                    Create Products
                    </Link>
                </li>
            </ul>

        </div>
    <SectionTitle text='Product Create page'/>
    <form className="bg-base-200 rounded-md px-14 py-4 lg:px-40 lg:py-4  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:items-center" >
      {/* title */}
      <FormInput
        type='text'
        label='Title'
        name='title'
        value={title}
        size='input-sm'
        onChange={(e) => setTitle(e.target.value)}
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The name is how it appears on your site</p>


<div className="divider lg:divider"></div>
      {/* company */}
      {/* <FormInput
        label='Company'
        name='company'
        type='text'
        value={company}
        size='input-sm'
        onChange={(e) => setCompany(e.target.value)}
      /> */}

      
      {/* description */}
      <FormInput
        label='Description'
        name='description'
        type='textarea'
        value={description}
       
        size='input-xl'
        onChange={(e) => setDescription(e.target.value)}
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The description is how it appears on your site as the description of the product</p>


<div className="divider lg:divider"></div>
     
     <FormInput
  label="Highlights"
  name="highlights"
  type="textarea"
  value={highlights.join("\n")}
  onChange={(e) => setHighlights(e.target.value.split("\n"))}
 
  size="input-xl"
/>

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The highlights is how it appears on your site</p>


<div className="divider lg:divider"></div>

       {/* price */}
       <FormInput
        label='Price'
        name='price'
        type='number'
        value={price}
        size='input-sm'
        onChange={(e) => setPrice(e.target.value)}
      />
      <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>This  is the price of the product that  appears on your site</p>


<div className="divider lg:divider"></div>

      {/* Discount Price */}
      <FormInput
      label="Discount Price (optional)"
      name="discountPrice"
      type="number"
      value={discountPrice}
      size="input-sm"
      onChange={(e)=>setDiscountPrice(e.target.value)}
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The is the discount price that appears on your site</p>


<div className="divider lg:divider"></div>
{/* 
      Display Discount Percentage if applicable */}

      {discountPercentage &&(
        <div className="text-green-500">
          Discount: { discountPercentage}% off

        </div>
      )}

     <div className="border border-2 pl-2 pb-2 mt-2 border-gray-300 bg-white">
     <div className="mt-5">
        <label className="text-sm/6">Schedule Discount Price (Optional)</label>

     

      {/* Discount start date */}
      <div className="mt-2">
        <label className="font-thin text-sm/6">Start Date:</label>
        <DatePicker
        selected={discountStartDate}
        onChange={(date)=>setDiscountStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
        className="input input-bordered input-sm ml-2 w-full"
        placeholderText="Select Discount Start Date and Time"
        />
      </div>

      {/* Discount End Date */}
      <div className="mt-2 ">
        <label className="font-thin text-sm/6">End Date:</label>
        <DatePicker
        selected={discountEndDate}
        onChange={(date)=>setDiscountEndDate(date)}
        showTimeSelect
        dateFormat="Pp"
        className="input input-bordered input-sm ml-3 w-full"
        placeholderText="Select discount End Date and Time"
        />

      </div>
      </div>
     </div>

     <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The  is the time limit within which the discount price is valid </p>


<div className="divider lg:divider"></div>

      {/* featured */}
      <FormSelect
        label='Featured'
        name='featured'
        size='input-sm'
        value={featured}
        onChange={(e) => setFeatured(e.target.value)}
        list={featureOption.map((item) => ({ label: item.toString(), value: item }))}
        
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>If true the product will be in the featured product</p>


<div className="divider lg:divider"></div>
    
      <div className="form-control">
          <FormSelect
            label='Category'
            name='category'
            size='input-sm'
            value={category}
            onChange={handleCategoryChange}
            list={[
              {label:"None",value:""},
              ...categories.map((cat) => ({ label: cat.name, value: cat._id }))
            ]}
          />
        </div>

        <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The Category of the product</p>


<div className="divider lg:divider"></div>

     
      {/* shipping */}
      <FormSelect
        label='Shipping'
        name='shipping'
        size='input-sm'
        value={shipping}
        onChange={(e) => setShipping(e.target.value)}
        list={featureOption.map((item) => ({ label: item.toString(), value: item }))}
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The name is how it appears on your site</p>


<div className="divider lg:divider"></div>
        {/* Quantity */}
        <FormInput
        label='Quantity'
        name='quantity'
        type='number'
        size='input-sm'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
       
      />
      <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The quatity of product available in the inventory</p>


<div className="divider lg:divider"></div>
      {/* colors */}
      <FormInput
        label='Colors'
        name='colors'
        size='input-sm'
        type='text'
        value={colors}
        placeholder='Comma separated values'
        onChange={(e) => setColors(e.target.value)}
      />
      <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The colors available in the inventory</p>


<div className="divider lg:divider"></div>
       {/* size */}
       <FormInput
        label='Sizes'
        name='sizes'
        size='input-sm'
        type='text'
        value={sizes}
        placeholder='Comma separated values'
        onChange={(e) => setSizes(e.target.value)}
      />

<p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The sizes available in the inventory</p>


<div className="divider lg:divider"></div>

      {/* Size Chart-Dynamic Columns */}

      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-md font-normal mb-4">Size Chart Columns</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {sizeChartColumns.map((column,index)=>(
            <div key={index} className="flex items-center space-x-2">
              <input
              type="text"
              placeholder={`Column ${index+1}`}
              value={column}
              onChange={(e)=>handleColumnChange(index,e.target.value)}
              className="input input-bordered input-sm flex-grow"
              />
              <button onClick={(e)=>{
                 e.preventDefault(); // Prevent form submission
                 handleRemoveColumn(index);

              }} 
              className="btn text-sm font-normal btn-sm "
              >
                Remove
                </button>

            </div>
          ))}
          <button
           onClick={(e)=>{
            e.preventDefault(); 
            handleAddColumn();

           }}
            className="btn text-sm font-normal btn-sm col-span-2 md:col-span-1"
            >
              Add Column
              </button>

        </div>
      </div>

      <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The number of column in the size chart</p>


<div className="divider lg:divider"></div>

      {/* Size Chaty-Dynamic Rows */}

      {/* <div>
        <h3>Size Chart Rows</h3>
        <div className="grid grid-cols-2 gap-4">
          {sizeChartRows.map((row,rowIndex)=>(
            <div key={rowIndex}>
              {sizeChartColumns.map((col,colIndex)=>(
                <input
                key={colIndex}
                type="text"
                placeholder={col}
                value={row[col] || ''}
                onChange={(e) => handleRowChange(rowIndex, col, e.target.value)}
                className="input input-bordered input-sm"
                />
              ))}

            <button onClick={() => handleRemoveRow(rowIndex)} className="btn btn-error btn-sm ml-2">Remove Row</button>

            </div>
          ))}

       <button onClick={() => handleRemoveRow(rowIndex)} className="btn btn-error btn-sm ml-2">Remove Row</button>

        </div>
      </div> */}

<div> <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-md font-normal mb-4">Size Chart Rows</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {sizeChartRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap items-center space-x-2 bg-white p-4 rounded-lg shadow">
                {sizeChartColumns.map((col, colIndex) => (
                  <input
                    key={colIndex}
                    type="text"
                    placeholder={col}
                    value={row[col] || ''} // Access row value safely
                    onChange={(e) => handleRowChange(rowIndex, col, e.target.value)}
                    className="input input-bordered input-sm mb-2 flex-grow"
                  />
                ))}
                <button onClick={(e) =>
                  { 
                    e.preventDefault();
                    handleRemoveRow(rowIndex)

                  }} 
                   className="btn  btn-sm ml-2 text-sm font-normal">Remove Row</button>
              </div>
            ))}
            <button 
            onClick={(e)=>
              {
                e.preventDefault(); 
                handleAddRow();
            }} 
            className="btn text-sm font-normal btn-sm col-span-2 md:col-span-1"
            >
              Add Row
              </button>
          </div>
        </div>
        </div>

        <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The number of row in the size chart </p>


      <div className="divider lg:divider"></div>
      {/* image */}
      <FileUpload
       values={{images}}
       setValues={(val)=>setImages(val.images)}
        setLoading={setLoading}
      />
      
      <p style={{ fontSize: '12px', color: '#555',marginTop: '10px' }}>The image that will appear on your site </p>


<div className="divider lg:divider"></div>

      <button type="submit" className="btn btn-primary btn-sm mt-7" onClick={handleSubmit}>
        Submit
      </button>
      {loading && <LoadingOutlined style={{fontSize:24}} spin/>}
    </form>
    </>
    
  );
};

export default ProductCreatePage;
 