// import React from 'react';
// import {useNavigation} from "react-router-dom";
// import {useSelector ,useDispatch} from 'react-redux'
// import {SearchOutlined} from '@ant-design/icons';


// const Search=()=>{
//   const dispatch=useDispatch();
//   // const {search}=useSelector((state)=>({...state}));
//   // const {text}=search;

//   const search = useSelector((state) => state.searchState);
//   const { text } = search;

//   const navigate=useNavigation()

//   const handleChange=(e)=>{
//     dispatch({
//       type:'SEARCH_QUERY',
//       payload:{text:e.target.value},
//     })

//   }

//   const handleSubmit=(e)=>{

//   }
//   return(
//     // <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
//     //     <input
//     //     onChange={handleChange}
//     //     type='search'
//     //     value={text}
//     //     className='from-control mr-sm-2'
//     //     placeholder='Search'
//     //     />
//     //     <SearchOutlined onClick={handleSubmit} style={{cursor:"pointer"}}/>

//     // </form>
//     <label className="input input-bordered flex items-center gap-0.5">
//   <input
//         onChange={handleChange}
//         type='search'
//         value={text}
//         className='from-control mr-sm-2'
//         placeholder='Search'
//         />
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//       clipRule="evenodd" />
//   </svg>
// </label>
//   )
// };

// export default Search

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { fetchProductsByFilter, getGridProducts } from '../functions/products';
import { useSprings } from '@react-spring/web'

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchState);
  const { text } = search;
  console.log('text',text)
  const [products,setProducts]=useState([])
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    });
  };

  const loadAllProducts=()=>{
    const sort="createdAt";
    const order="desc"

    setLoading(true);

    getGridProducts(sort ,order,page).then((res)=>{
      setProducts(prevProducts=>{
        const newProducts=res.data.products.filter(
          (newProduct)=>!prevProducts.some((prevProducts)=>prevProduct._id===newProduct._id)
        );
        return[...prevProducts,...newProducts];
      })
      setLoading(false);
    }).catch((error)=>{
      console.error("Error loading products:", error);
        setLoading(false);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic
    // navigate(`/products/${text}`)

    if(text.trim()){
      navigate(`/products`)
      fetchProducts({query:text});
       if(!text){
        loadAllProducts()
        
       }
    }
  };

  const fetchProducts=(arg)=>{
    fetchProductsByFilter(arg).then((res)=>{
      setProducts(res.data);
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
      <label className="input border-none rounded-none flex items-center gap-0.5">
        <input
          onChange={handleChange}
          type="search"
          value={text}
          className="form-control mr-sm-2 border-none rounded-none !ring-0 !outline-none !shadow-none"
          placeholder="Search"
          style={{ width: '150px',padding:'0px',marginTop:'2px',paddingTop:'-4px' ,borderRadius: '0px' }} // Adjust the width as needed
        />
        <SearchOutlined onClick={handleSubmit} style={{ cursor: 'pointer' }} />
      </label>
    </form>
  );
};

export default Search;
