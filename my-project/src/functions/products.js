import axios from 'axios'
import BASE_URL from '../config'

export const getProductsByCount=async (count)=>{
    
    try {
      const response = await axios.get(`${BASE_URL}/api/product/${count}`)
      console.log('response-->',response)
      return response.data; 
    } catch (error) {
      console.error('Error fetching products count:', error);
      throw error;
    }
}

// export const getProductsCount=async()=>{
//     await axios.get(`http://localhost:8001/api/productscounts`)
// }

export const getProductsCount = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/productscounts`);
      console.log('response-->',response)
      return response.data; 
    } catch (error) {
      console.error('Error fetching products count:', error);
      throw error;
    }
  };

export const getRelated=async (productId)=>{
    await axios.get(`${BASE_URL}/api/product/related/${productId}`);
}

// export const getProducts = async (slug) =>
//     await axios.get(`http://localhost:8001/api/product`,{
//         sort,
//         order,page
//     });

// export const getProducts = async (sort, order, page) =>
//     await axios.post(`http://localhost:8001/api/productss`, {
//         sort,
//         order,
//         page
//     });

    export const getGridProducts = async (sort, order, page) =>
      await axios.post(`${BASE_URL}/api/productsss`, {
          sort,
          order,
          page
      });


export const removeProduct=async (slug,authtoken,email)=>{
  await axios.post(`${BASE_URL}/api/product/remove/${slug}`,{email},{
    headers:{
      authtoken,
    }
  });
}

export const updateProduct=async (id,product,email,authtoken)=>{
  await axios.put(`${BASE_URL}/api/product/${id}`,{email,product,id},{
    headers:{
      authtoken,
    }
  });
}



// export const getProduct=async (slug)=>{
//   await axios.get(`http://localhost:8001/api/single-product/${slug}`);
// }

export const getProduct = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/single-product/${slug}`);
    return response; // This should return the complete response object, including data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Ensure errors are thrown for proper handling
  }
};

export const getRelatedProduct = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/product/related/${productId}`);
    return response; // This should return the complete response object, including data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Ensure errors are thrown for proper handling
  }
};

export const getProducts = async (sort,order,page) => {
  
  try {
    const response =  await axios.post(`${BASE_URL}/api/productss`, {
      sort,
      order,
      page
  });

  console.log('response//',response)

    return response; // This should return the complete response object, including data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Ensure errors are thrown for proper handling
  }
};

export const fetchProductsByFilter = async (arg) => {
  console.log('args---->',arg)
  try {
    const response = await axios.post(`${BASE_URL}/api/search/filters`,arg);
    return response; // This should return the complete response object, including data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Ensure errors are thrown for proper handling
  }
};

export const getProductsFilters=async()=>{
  try{
    const response=await axios.get(`${BASE_URL}/api/products/filters`);
    console.log('response',response)
    return response;


  }catch(error){
        console.error('Error fetching product filters',error);
        throw error;
  }
}


