import axios from 'axios'

export const createCategory=async(category,authtoken,email)=>{
  await axios.post(`http://localhost:8001/api/category`,{category,email},{
    headers:{
         authtoken,
    }
  })
}

// export const getCategories=async(authtoken)=>{
//   await axios.get(`http://localhost:8001/api/categories`,{
//     headers:{
//       authtoken
//     }
//   })
// }

export const getCategories = async () => {
  try {
      const response = await axios.get('http://localhost:8001/api/categories'
      );
      return response.data; // Assuming the data is directly returned
  } catch (error) {
      console.error('Error fetching categories:', error);
      throw error; // Rethrow the error for the calling function to handle
  }
};

export const removeCategory = async (slug,token,email) => {
  try {
      const response = await axios.post(`http://localhost:8001/api/category/${slug}`, {email},{
          headers: {
              Authorization: `Bearer ${token}`,
              authtoken:token
          },
      });
      return response.data; // Assuming the data is directly returned
  } catch (error) {
      console.error('Error fetching categories:', error);
      throw error; // Rethrow the error for the calling function to handle
  }
};

export const updateCategory = async (slug,token,email) => {
  try {
      const response = await axios.post(`http://localhost:8001/api/category/update/${slug}`, {email},{
          headers: {
              Authorization: `Bearer ${token}`,
              authtoken:token
          },
      });
      return response.data; // Assuming the data is directly returned
  } catch (error) {
      console.error('Error updating categories:', error);
      throw error; // Rethrow the error for the calling function to handle
  }
};

export const readCategory = async (slug,page=1,limit=10) => {
  try {
      const response = await axios.get(`http://localhost:8001/api/category/read/${slug}`,{
        params:{page,limit}
      });
      return response.data; // Assuming the data is directly returned
  } catch (error) {
      console.error('Error fetching categories:', error);
      throw error; // Rethrow the error for the calling function to handle
  }
};

// export const removeCategory=async (slug, authtoken,email)=>{
//   await axios.post(`http://localhost:8001/api/category/${slug}`,{email},{
//     headers:{
//       authtoken,
//     }
//   })
// }