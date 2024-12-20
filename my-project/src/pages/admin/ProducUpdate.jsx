// import React,{useEffect,useState} from "react";
// import { useParams } from "react-router-dom";
// import { FormInput, FileUpload, FormSelect,SectionTitle } from "../../components";

// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import axios from "axios";
// import {LoadingOutlined} from '@ant-design/icons'
// import {getProducts,getProduct, updateProduct} from '../../functions/products'


// const ProducUpdate = () => {
//     const [product,setProduct]=useState('')
//   const [title, setTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [description, setDescription] = useState('');
//   const [featured, setFeatured] = useState(false);
//   const [price, setPrice] = useState('');
//   const [shipping, setShipping] = useState(false);
//   const [colors, setColors] = useState('');
//   const [images, setImages] = useState([]);
//   const [category, setCategory] = useState('');
//   const [loading,setLoading]=useState('');
//   const [quantity, setQuantity]=useState('50');
//   const {slug}=useParams();
//   const featureOption = [false, true];
//   const user = useSelector((state) => state.userState);
//    const { token } = user;
//    const {email}=user

//    useEffect(()=>{
//           loadProduct()

//    },[slug])

//    const loadProduct= async()=>{
//     try {
       
       
//         const { data } = await getProduct(slug);
//         setTitle(data.title);
//         setCompany(data.company);
//         setDescription(data.description);
//         setFeatured(data.featured);
//         setPrice(data.price);
//         setShipping(data.shipping);
//         setColors(data.colors.join(', '));
//         setImages(data.images);
//         setCategory(data.category);
//         setQuantity(data.quantity);
//       } catch (error) {
//         console.error('Error loading product:', error);
//         toast.error('Failed to load product details.');
//       }
//    }

//    const fetchProduct = () => {
//     getProduct(slug).then((res) => {
//         console.log('API RESPONSE',res);
//         setProduct({res});
       

//     }).catch((error) => {
//         console.error("Error fetching product:", error);
//     });
// };

// console.log('fetchProduct',product)
   

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
//       quantity,
//       colors: colors.split(',').map(color => color.trim()),
//       images,
//       category,
//       userId: user.id,
//       email:user.email,
//       token:token
//     };

//     console.log('Product Data:', productData);  // Log the data to check if it's correct

//     // try {
//     //  updateProduct(slug,productData,user.token)
//     //   if (response.status === 201) {

//     //     toast.success('Product updated successfully!');
//     //     // Clear form fields
//     //     setTitle('');
//     //     setCompany('');
//     //     setDescription('');
//     //     setFeatured(false);
//     //     setPrice('');
//     //     setShipping(false);
//     //     setQuantity('');
//     //     setColors('');
//     //     setImages([]);
//     //     setCategory('');
//     //   } else if(response.status===403){
//     //     // throw new Error ('Not Admin, Access Denied!')
//     //     toast.error('Not Admin, Access Denied!');

//     //   }
      
//     //   else {
//     //     throw new Error('Failed to create product.');
//     //   }
//     // } catch (error) {
//     //   console.error('Error creating product:', error);
//     //   toast.error('Failed to create product. Please try again later.');
//     // }

//     try {
//         setLoading(true);
//         const response = await updateProduct(slug, productData, token);
//         setLoading(false);
  
//         if (response.status === 200) {
//           toast.success('Product updated successfully!');
//         } else if (response.status === 403) {
//           toast.error('Not Admin, Access Denied!');
//         } else {
//           throw new Error('Failed to update product.');
//         }
//       } catch (error) {
//         setLoading(false);
//         console.error('Error updating product:', error);
//         toast.error('Failed to update product. Please try again later.');
//       }
//   };

//   return (
//     <>
//     <SectionTitle text='Product Update page'/>
//     <form onSubmit={handleSubmit} className="bg-base-200 rounded-md px-40 py-4  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center" >
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
//         size='input-sm'
//         value={featured}
//         onChange={(e) => setFeatured(e.target.value)}
//         list={featureOption}
//       />
//       {/* category */}
//       <div className="form-control">
//         <FormInput
//           label='Category'
//           name='category'
//           size='input-sm'
//           value={category}
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
//         value={shipping}
//         onChange={(e) => setShipping(e.target.value)}
//         list={featureOption}
//       />
//         {/* Quantity */}
//         <FormInput
//         label='Quantity'
//         name='quantity'
//         size='input-sm'
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
       
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
//        values={{images}}
//        setValues={(val)=>setImages(val.images)}
//         setLoading={setLoading}
//       />
//       <button type="submit" className="btn btn-primary btn-sm mt-7" onClick={handleSubmit}>
//         Update
//       </button>
//       {loading && <LoadingOutlined style={{fontSize:24}} spin/>}
//     </form>
//     </>
    
//   );
// };

// export default ProducUpdate
 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormInput, FileUpload, FormSelect, SectionTitle } from "../../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoadingOutlined } from '@ant-design/icons';
import {  updateProduct } from '../../functions/products';
import { getCategories } from "../../functions/category";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ProducUpdate = () => {
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [featured, setFeatured] = useState(false);
  const [price, setPrice] = useState('');
  const [discountPrice,setDiscountPrice]=useState(false)
  const [shipping, setShipping] = useState(false);
  const [colors, setColors] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(50);
  const [categories,setCategories]=useState([]);
  const [sizes,setSizes]=useState("")
  const [sizeChartColumns,setSizeChartColumns]=useState([]);
  const [sizeChartRows,setSizeChartRows]=useState([]);
  const [discountStartDate,setDiscountStartDate]=useState(null);
  const [discountEndDate,setDiscountEndDate]=useState(null);
  const [discountPercentage,setDiscountPercentage]=useState(null)

  
  
  const featureOption = [false, true];

  const { slug } = useParams();
  const {id}=useParams()
  console.log('id',id)
  const user = useSelector((state) => state.userState);
  const { token } = user;
  const {email}=user;

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  useEffect(()=>{
    loadCategories()
  },[token,email])

  const handleCategoryChange=(e)=>{
    setCategory(e.target.value);
    console.log('Selected Category Name:',e.target.value);
  }

//   const getProduct = async (slug) => {
//     try {
//       const response = await axios.get(`http://localhost:8001/api/single-product/${slug}`);
//       return response; // This should return the complete response object, including data
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       throw error; // Ensure errors are thrown for proper handling
//     }
//   };

  

  const loadProduct = async () => {
    try {
     const response = await axios.get(`http://localhost:8001/api/single-product/${id}`);
     console.log('response',response)

      if (!response || !response.data) {
        throw new Error('No product data received from API');
      }

      const {data}=response
      console.log('data',data)


      setTitle(data.title);
      
      setCompany(data.company);
      setDescription(data.description);
      setFeatured(data.featured);
      setPrice(data.price);
      setDiscountPrice(data.discountPrice);
      setShipping(data.shipping);
      setColors(data.colors.join(', '));
      setImages(data.images);
      setCategory(data.category);
      setQuantity(data.quantity);
      setSizes(data.sizes.join(", "));
      setSizeChartColumns(data.sizeChart.columns);
      setSizeChartRows(data.sizeChart.rows);
      setDiscountStartDate(data.discountStartDate ? new Date(data.discountStartDate) : null);
      setDiscountEndDate(data.discountEndDate ? new Date(data.discountEndDate) : null);

    } catch (error) {
      console.error('Error loading product:', error);
      toast.error('Failed to load product details.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error('Authorization token is missing. Please log in again.');
      return;
    }

    const productData = {
      title,
      company,
      description,
      featured,
      price,
      discountPrice,
      shipping,
      quantity,
      colors: colors.split(',').map(color => color.trim()),
      images,
      category,
      sizeChart: {
        columns: sizeChartColumns,
        rows: sizeChartRows,
      },
      discountStartDate,
      discountEndDate
    };

    try {
      setLoading(true);
      const response = await updateProduct(id, productData,email, token);
      setLoading(false);
      toast.success('Data Successfully Updated!')

      // setTitle('');
      //   setCompany('');
      //   setDescription('');
      //   setFeatured(false);
      //   setPrice('');
      //   setShipping(false);
      //   setQuantity('');
      //   setColors('');
      //   setImages([]);
      //   setCategory('');

    //   if (response.status === 200) {
    //     toast.success('Product updated successfully!');
    //   } else if (response.status === 403) {
    //     toast.error('Not Admin, Access Denied!');
    //   } else {
    //     throw new Error('Failed to update product.');
    //   }
    } catch (error) {
      setLoading(false);
      console.error('Error updating product:', error);
      toast.error('Failed to update product. Please try again later.');
    }
  };

  const loadCategories=()=>{
    getCategories().then((res)=>{
      console.log('Api RESPONSE',res);
      setCategories(res)
    }).catch((error)=>{
           console.error('Error Loading products',error);
    })
  }
  console.log('loadCategories',categories)

  const handleAddColumn = () => {
    setSizeChartColumns([...sizeChartColumns, ""]);
  };

  const handleRemoveColumn = (index) => {
    const updatedColumns = [...sizeChartColumns];
    updatedColumns.splice(index, 1);
    setSizeChartColumns(updatedColumns);
  };

  const handleColumnChange = (index, value) => {
    const updatedColumns = [...sizeChartColumns];
    updatedColumns[index] = value;
    setSizeChartColumns(updatedColumns);
  };

  const handleAddRow = () => {
    const newRow = {};
    sizeChartColumns.forEach((col) => {
      newRow[col] = "";
    });
    setSizeChartRows([...sizeChartRows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...sizeChartRows];
    updatedRows.splice(index, 1);
    setSizeChartRows(updatedRows);
  };

  const handleRowChange = (rowIndex, column, value) => {
    const updatedRows = [...sizeChartRows];
    updatedRows[rowIndex][column] = value;
    setSizeChartRows(updatedRows);
  };

  return (
    <>
      <SectionTitle text="Product Update Page" />
      <form onSubmit={handleSubmit} className="bg-base-200 rounded-md px-40 py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* title */}
        <FormInput
          type="text"
          label="Title"
          name="title"
          value={title}
          size="input-sm"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* company */}
        <FormInput
          label="Company"
          name="company"
          type="text"
          value={company}
          size="input-sm"
          onChange={(e) => setCompany(e.target.value)}
        />
        {/* description */}
        <FormInput
          label="Description"
          name="description"
          type="text"
          value={description}
          size="input-sm"
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* featured */}
        <FormSelect
          label="Featured"
          name="featured"
          size="input-sm"
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
          list={featureOption.map((item) => ({ label: item.toString(), value: item }))}
        />
        {/* category */}
        <FormSelect
          label="Category"
          name="category"
          size="input-sm"
          value={category}
          onChange={handleCategoryChange}
            list={categories.map((cat) => ({ label: cat.name, value: cat.name }))}
        />
        {/* price */}
        <FormInput
          label="Price"
          name="price"
          type="number"
          value={price}
          size="input-sm"
          onChange={(e) => setPrice(e.target.value)}
        />
        {/* Discount Price */}
        <FormInput
        label="Discount Price" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} type="number"
        />
        {discountPercentage && <p>Discount: {discountPercentage}% off</p>}
        <div className="discount-schedule">
          <DatePicker selected={discountStartDate} onChange={(date) => setDiscountStartDate(date)} placeholderText="Start Date" />
          <DatePicker selected={discountEndDate} onChange={(date) => setDiscountEndDate(date)} placeholderText="End Date" />
        </div>
        {/* shipping */}
        <FormSelect
          label="Shipping"
          name="shipping"
          size="input-sm"
          value={shipping}
          onChange={(e) => setShipping(e.target.value)}
          list={featureOption.map((item) => ({ label: item.toString(), value: item }))}
        />
        {/* Quantity */}
        <FormInput
          label="Quantity"
          name="quantity"
          size="input-sm"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {/* colors */}
        <FormInput
          label="Colors"
          name="colors"
          size="input-sm"
          type="text"
          value={colors}
          placeholder="Comma separated values"
          onChange={(e) => setColors(e.target.value)}
        />
          <FormInput label="Sizes" value={sizes} onChange={(e) => setSizes(e.target.value)} placeholder="Comma separated values" />
        
        {/* Size Chart: Dynamic Columns and Rows */}
        <div className="size-chart">
          <div className="columns">
            {sizeChartColumns.map((col, index) => (
              <div key={index}>
                <input value={col} onChange={(e) => handleColumnChange(index, e.target.value)} placeholder={`Column ${index + 1}`} />
                <button onClick={() => handleRemoveColumn(index)}>Remove</button>
              </div>
            ))}
            <button onClick={handleAddColumn}>Add Column</button>
          </div>

          <div className="rows">
            {sizeChartRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                {sizeChartColumns.map((col, colIndex) => (
                  <input key={colIndex} value={row[col] || ""} onChange={(e) => handleRowChange(rowIndex, col, e.target.value)} />
                ))}
                <button onClick={() => handleRemoveRow(rowIndex)}>Remove Row</button>
              </div>
            ))}
            <button onClick={handleAddRow}>Add Row</button>
          </div>
        </div>

      

        {/* image */}
        <FileUpload
          values={{ images }}
          setValues={(val) => setImages(val.images)}
          setLoading={setLoading}
        />
        <button type="submit" className="btn btn-primary btn-sm mt-7">
          Update
        </button>
        {loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
      </form>
    </>
  );
};

export default ProducUpdate;
