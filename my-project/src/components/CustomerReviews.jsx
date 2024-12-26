import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { ConsoleSqlOutlined, EditOutlined } from '@ant-design/icons';
import SectionTitle from './SectionTitle';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import ReactStars from "react-rating-stars-component"
import BASE_URL from '../config';
day.extend(advancedFormat);



const CustomerReviews=()=>{
    const [reviews,setReviews]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);



    useEffect(()=>{
        fetchReviws()

    },[]);

    const fetchReviws=async()=>{
        try{

            const response=await axios.get(`${BASE_URL}/api/reviews`);
            setReviews(response.data);
            console.log('response',response)


        }catch(error){
            console.error('Error fetching reviews',error);

        }finally{
            setLoading(false);
        }
    }

    const deleteReview=async(productId,reviewId)=>{
        try{

            await axios.delete(`${BASE_URL}/api/products/${productId}/reviews/${reviewId}`);
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
            {
                reviews <1 ?(
                    <SectionTitle text='There is no review at the time'/>

                ):(
                    <h1>
                        Total Reviews:{reviews.length}

                    </h1>

                )
            }

        </div>
        <div className='over-flow-x-auto'>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Ratings</th>
                        <th>Review</th>
                        <th>Product</th>
                        <th>Submitted on</th>
                        <th className="text-center" colSpan={2}>Action</th>
                    </tr>
                </thead>

          
            <tbody>
                {reviews.map((review)=>{
                    const id=review._id;
                    // console.log('review',review.rating)
                    const date=day(review.createdAt).format(`hh:mm a-MMM Do, YYYY`);
                    return(
                        <tr key={id}>
                            <td>{review.user.name}</td>
                            <td className="flex items-center" >
                                <ReactStars
                                count={5}
                                value={review.rating}
                                edit={false}
                                size={20}
                                color2={'#ffd700'}
                                 color1={'#e4e5e9'} 

                                />
                              
                            </td>
                            <td>{ review.comment ?review.comment :'No comment'}</td>
                            <td>
                               <Link key={review.productId} to={`/products/${review.productId}`}>
                             {review.productName}
                               </Link>

                                </td>
                                <td>{date}</td>
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
export default CustomerReviews