import axios from 'axios'
import BASE_URL from '../config';

export const getParentCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/parentcategories`
        );
        return response.data; // Assuming the data is directly returned
    } catch (error) {
        console.error('Error fetching parentcategories:', error);
        throw error; // Rethrow the error for the calling function to handle
    }
  };