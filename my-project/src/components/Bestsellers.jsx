import React, { useEffect, useState } from 'react'
import { getProductsByCount,getProductsCount } from '../functions/products'
import Pagination from './Pagination'
import axios from 'axios';
import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import { formattedPrice } from '../utils';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat);
import BASE_URL from '../config';
import { Link } from 'react-router-dom';

const PRODUCT_PER_PAGE=3;



const BestSeller=()=>{
    const [bestsellingProducts,setBestsellingProducts]=useState([]);

    const user=useSelector((state)=>state.userState)
    console.log('user-->',user)

    const {token,email}=user
    // console.log('token',token)

    useEffect(()=>{
      loadBestsellingProducts()

    },[token,email])

    const loadBestsellingProducts=()=>{
        axios.post(`${BASE_URL}/api/admin/best-selling-products`,{email},{
            headers:{

                Authorization:`Bearer ${token}`,
                authtoken:token,

            }
        }).then((response)=>{
            setBestsellingProducts(response.data);
            console.log('response',response);

        }).catch((error)=>{
            console.error('Error fetching orders', error);
        })
    }

    return(
        <>
        <div className="text-md breadcrumbs bg-primary mt-10 mb-5 pt-10 pb-10 pl-2">
                    <ul>
                        <li>
                            <Link to='/admindash'>Admin Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/bestsellingproducts'>
                            Best Selling Products
                            </Link>
                        </li>
                    </ul>
        
                </div>
        <div className='mt-8'>
            <div className='mb-4 capitalize'>
                {bestsellingProducts <1 ?(
                      <SectionTitle text='No Products Sold yet'/>
                ):(
                    
                      <h1>
                        Total Products:10
                      </h1>
                )}

            </div>
            <div className='overflow-x-auto'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Date</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bestsellingProducts.map((product)=>{
                            const id=product._id;
                            console.log('product',product)

                            const {images,category,createdAt,quantity,sold,price}=product
                            const Price=formattedPrice(price)
                            const date=day(createdAt).format(`hh:mm a-MMM Do, YYYY`);

                            return(
                                <tr key={id}>
                                    <td>{
                                       images && images.length>0 ?(
                                        <img
                                        src={images[0].url}
                                        alt={`${product.title} image`}
                                        // style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        className="w-16 h-16 object-cover rounded-md"
                                        />

                                       ):(
                                        <span> No Image Available</span>
                                       )
                                        }</td>
                                        <td>{quantity<0 ?(
                                            <p >Out of stock</p>
                                        ):(
                                            <p>In stock</p>

                                        )}</td>
                                        <td>{Price}</td>
                                        <td>{category.name}</td>
                                        <td>{sold}</td>
                                        <td>{date}</td>
                                        <td>
                                        <button className="btn btn-primary"  >
                                        Edit

                                    </button>

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

export default BestSeller