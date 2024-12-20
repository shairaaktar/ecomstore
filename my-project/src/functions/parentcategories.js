import axios from 'axios'

export const getParentCategories = async () => {
    try {
        const response = await axios.get('http://localhost:8001/api/parentcategories'
        );
        return response.data; // Assuming the data is directly returned
    } catch (error) {
        console.error('Error fetching parentcategories:', error);
        throw error; // Rethrow the error for the calling function to handle
    }
  };