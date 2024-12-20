// import { Form ,useLoaderData,Link } from "react-router-dom";
// import FormInput from "./Form";
// import FormSelect from "./FormSelect";
// import FormRange from "./FormRange";
// import FormCheckBox from "./FormCheckBox";
// import React ,{useState,useEffect} from "react";
// import { getProductsCount,getProductsByCount,getGridProducts,fetchProductsByFilter } from "../functions/products";
// import {getCategories} from '../functions/category'
// import {useSelector,useDispatch} from 'react-redux'

// const Filters=()=>{
//     const {meta,params} =useLoaderData()
//     const {categroy,order}=params

//     const [products,setProducts]=useState([]);
    
//     const [loading,setLoading]=useState(false);
//     const [price,setPrice]=useState([0,0]);
//     const [ok,setOk]=useState(false);
//     const [categories,setCategories]=useState([]);
//     const [categoryIds,setCategoryIds]=useState([]);
//     const [category,setCategory]=useState('')
//     const [companies,setCompanies]=useState([
//         "Apple",
//         "Samsung",
//         "Microsoft",
//         "Lenovo",
//         "ASUS",
//     ])
//     const [company,setCompany]=useState('');
//     const [color,setColor]=useState('')
//     const [shipping,setShipping]=useState('')
//     let dispatch=useDispatch();
//     // let {search}=useSelector((state)=>({...state}))
//     const search=useSelector((state)=>state.searchState);
//     console.log('search',search)
//     const {text}=search;
//     const user = useSelector((state) => state.userState);
//     const { token } = user;
//     const {email}=user


//     useEffect(()=>{
//         getCategories().then((res)=>setCategories(res.data));

//     },[])

//     useEffect(()=>{
//         loadCategories();
//        },[token,email])
    

//     const loadAllProducts = () => {
//         const sort = "createdAt"; // Example sort criteria
//         const order = "desc"; // Example order
//         //  const page = 1; // Example page number
    
//         setLoading(true);
    
//         getGridProducts(sort, order, page).then((res) => {
//             setProducts(res.data);
//             setLoading(false);
//         }).catch((error) => {
//             console.error("Error loading products:", error);
//             setLoading(false);
//         });
//     };
 

//     const fetchProducts=(arg)=>{
//         fetchProductsByFilter(arg).then((res)=>{
//             setProducts(res.data);
//         })
//     }

//     useEffect(()=>{
//         const delayed=setTimeout(()=>{
//             fetchProducts({query:text});
//             if(!text){
//                loadAllProducts();
//             }
//         },300);
//         return ()=>clearTimeout(delayed);
//     },[text]);

//   useEffect(()=>{
//     console.log('ok to request');
//     fetchProducts({price});

//   },[ok])

//   const handleSlider=(value)=>{
//     dispatch({
//         type:"SEARCH_QUERY",
//         payload:{text:" "},

//     });

//     setCategoryIds([]);
//         setPrice(value);
       
//         setCompany("");
//         setColor("");
//         setShipping("");
//         setTimeout(() => {
//             setOk(!ok);
//         }, 300);

//   };

//    const loadCategories=()=>{
//     getCategories().then((res)=>{
//         console.log('API RESPONSE',res);
//         setCategories(res)
//     }).catch((error)=>{
//         console.error('Error Loading categories',error);
//     })
//    }
//    console.log('loadCategories',categories)


//     return(
//        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8
//        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
//         {/* SEARCH */}
//         <FormInput
//         type='search'
//         label='search product'
//         name='search'
//         size='input-sm'
//         defaultValue={search}
//         />
//        {/* CATEGORIES */}
//        <FormSelect
//        label='select category'
//        name='category'
//        value={category}
//        size='select-sm'
//        list={categories.map((cat) => ({ label: cat.name, value: cat.name }))}

//        />
//        {/* COMPANY */}
//        <FormSelect
//        label='select company'
//        name='company'
//        list={meta.companies}
//        size='select-sm'
//        defaultValue={company}
//        />
//        {/* ORDER */}
//        <FormSelect
//        label='sort by'
//        name='order'
//        list={['a-z','z-a','high','low']}
//        size='select-sm'
//        defaultValue={order}
//        />
//        {/* PRICE */}
//        <FormRange
//        name='price'
//        label='select price'
//        size='range-sm'
//        price={price}
//        />
//        {/* SHIPPING */}
//        <FormCheckBox
//        name='shipping'
//        label='free shipping'
       
//        size='checkbox-sm'
//        defaultValue={shipping}

//        />


//         <button type="submit" className="btn btn-primary btn-sm">
//             search

//         </button>
//         <Link to='/products' className="btn btn-accent btn-sm">
//         reset
//         </Link>

//        </Form>
//     )

// }
// export default Filters;

import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./Form";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";
import React, { useState, useEffect } from "react";
import { getProductsCount, getProductsByCount, getGridProducts, fetchProductsByFilter } from "../functions/products";
import { getCategories } from '../functions/category';
import { useSelector, useDispatch } from 'react-redux';
import {Checkbox} from 'antd';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const {  order } = params;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]); // Initialize as an empty array
  const [categoryIds, setCategoryIds] = useState([]);
  const [category,setCategory]=useState('')
  const [company, setCompany] = useState('');
  const [color, setColor] = useState('');
  const [shipping, setShipping] = useState('');
  let dispatch = useDispatch();
  const search = useSelector((state) => state.searchState);
  const { text } = search;
  const user = useSelector((state) => state.userState);
  const { token, email } = user;

  useEffect(()=>{
    loadCategories();
   },[token,email])
 
  const loadCategories=()=>{
    getCategories().then((res)=>{
      console.log('API RESPONSE',res);
      setCategories([{ name: 'All', value: '' }, ...res])
    }).catch((error)=>{
      console.error('Error Loading categories:',error);

    })

  }
  
  console.log('categories',categories)

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
        setProducts(res.data);
    });
};

  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if (!text) {
        loadAllProducts();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  useEffect(() => {
    fetchProducts({ price });
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: " " },
    });

    setCategoryIds([]);
    setPrice(value);
    setCompany("");
    setColor("");
    setShipping("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  const loadAllProducts = () => {
    const sort = "createdAt";
    const order = "desc";
    setLoading(true);
    getGridProducts(sort, order)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  };

  const handleCheck=(e)=>{
    dispatch({
        type:'SEARCH_QUERY',
        payload:{text:''},
    });
    setPrice([0, 0]);
  
    setCompany("");
    setColor("");
    setShipping("");

    let inTheState=[...categoryIds];
    let justChecked=e.target.value;
    let foundInTheState=inTheState.indexOf(justChecked);

    if(foundInTheState===-1){
        inTheState.push(justChecked);
    }else{
        inTheState.splice(foundInTheState,1);
    }
    setCategoryIds(inTheState);
    console.log(inTheState);
 fetchProducts({ category: inTheState });
  }

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
        value={text}
        defaultValue={text}
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        value={category}
        size='select-sm'
        onChange={handleCheck}
        list={categories.map((cat) => ({ label: cat.name, value: cat.name }))}
      />
      {/* COMPANY */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name='price'
        label='select price'
        size='range-sm'
        price={price}
        onChange={handleSlider}
      />
      {/* SHIPPING */}
      <FormCheckBox
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />

      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to='/products' className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
