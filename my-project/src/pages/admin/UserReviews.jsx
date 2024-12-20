import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { SectionTitle } from '../../components';
import ReactStars from "react-rating-stars-component"
import { DeleteOutline } from '@mui/icons-material';

const UserReviews=()=>{
    const {userId}=useParams();
    const [reviews,setReviews]=useState([]);
    const [loading,setLoading]=useState(true);

    console.log('userId',userId)

    useEffect(()=>{
        fetchUserReviews();

    },[userId])


   
    const fetchUserReviews=async()=>{
        try{

            const response=await axios.get(`http://localhost:8001/api/users/${userId}/reviews`);
            setReviews(response.data);
            console.log('response',response.data)

        }catch(error){
            console.error('Error fetching user reviews',error);

        }finally{
            setLoading(false);
        }
    }

    const deleteReview=async(productId,reviewId)=>{
        try{

            await axios.delete(`http://localhost:8001/api/products/${productId}/reviews/${reviewId}`);
            setReviews((prevReviews)=>prevReviews.filter((review)=>review._id!==reviewId));
            alert('Review deleted successfully');

        }catch(error){
            console.error('Error deleting review',error);
            alert('Failed to delte review');
        }
    }


    if(loading) return <div>Loading...</div>

    return(
      <>
      <div className='mt-8'>
        <div className='mb-4 capitalize'>
            { reviews<1 ?(
                <SectionTitle text='No review posted by this user'/>

            ):(
                <h1>
                    Total reviews 
                </h1>

            )

            }

        </div>
        <div className='over-flow-x-auto'>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Comment</th>
                        <th>Rating</th>
                        <th>Review date</th>
                        <th>Product</th>
                        <th className="text-center" colSpan={1}>Action</th>
                    </tr>
                </thead>
                <tbody>
               
           
            
                 {reviews.map((item,index)=>{
                   const {product,review,user}=item;
                   const {title,price,id}=product;
                   const {rating, comment,createdAt}=review;
                   console.log('product',product)
                   console.log('review',review)
                   console.log('user',user)

                   return(
                    <tr key={index}>
                        <td>
                            {user.name}
                        </td>
                        <td>{review.comment ? review.comment :'No comment'}</td>
                        <td>
                            <ReactStars
                             count={5}
                             value={review.rating}
                             edit={false} // Set to false to disable user editing
                             size={20} // Adjust the size of the stars
                             color2={'#ffd700'} // Color for filled stars
                             color1={'#e4e5e9'} // Color for empty stars
                            />
                        </td>
                        <td>{review.createdAt}</td>
                        <td>
                            <Link  to={`../../products/${id}`}>
                            {product.title}
                            </Link>
                        </td>
                        <td className='text-center'>
                                   <DeleteOutline onClick={()=>{deleteReview(review.productId,id)}}/>
                                    <p>Delete</p>

                                </td>

                    </tr>
                   )
})} 

            
       
                </tbody>

            </table>

        </div>

      </div>
      </>
    )


}

export default UserReviews