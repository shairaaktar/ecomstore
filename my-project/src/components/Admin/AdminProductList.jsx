import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGridProducts, getProductsCount, removeProduct } from "../../functions/products";
import SectionTitle from "../SectionTitle";
import { formattedPrice } from "../../utils";
import { Link } from "react-router-dom";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Pagination } from "antd";
import PaginationContainer from "../PaginationContainer";
day.extend(advancedFormat);

const PRODUCT_PER_PAGE = 3;

const AdminProductList=()=>{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [page,setPage]=useState(1);
    const [productsCount, setProductsCount] = useState(0);

    const user=useSelector((state)=>state.userState);

    console.log('User',user)

    useEffect(()=>{
        loadAllProducts()

    },[page])

    useEffect(()=>{
        fetchProductsCount()
    },[]);

    const loadAllProducts=()=>{
        const sort='createdAt';
        const order="desc"

        setLoading(true)

        getGridProducts(sort,order,page).then((res)=>{
            // setProducts(prevProducts=>[...prevProducts,...res.data.products]);
            setProducts(res.data.products);
            console.log('setProducts',res.data)
            setLoading(false);
        }).catch((error) => {
            console.error("Error loading products:", error);
            setLoading(false);
        });
    }

    const fetchProductsCount=()=>{
        getProductsCount().then((res) => {
            console.log('API RESPONSE',res);
            setProductsCount(res.total);
            console.log('Products Count', res.total);
 
        }).catch((error) => {
            console.error("Error fetching products count:", error);
        });
    }

    const handleRemove=(slug)=>{
        let answer=window.confirm('Delete?')
        if(answer){
            removeProduct(slug,user.token,user.email)
            .then(res=>{
                loadAllProducts();
                toast.success(`${res.data.title} is deleted`);
             })
             .catch(err => {
               
                console.log(err)
            })
        }
    }


    return(
        <>
        
             
        <div className="text-md breadcrumbs bg-primary mt-10 mb-5 pt-10 pb-10 pl-2">
            <ul>
                <li>
                    <Link to='/admindash'>Admin Dashboard</Link>
                </li>
                <li>
                    <Link to='/allproducts'>
                    Products
                    </Link>
                </li>
            </ul>

        </div>
           

        <div className="mt-8">

            <div className="mb-4 capitalize">
                {products <1?(
                    <SectionTitle text='No Products'/>
                ):(
                    <h1>
                        Total Products:{productsCount}
                    </h1>
                )}

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Date</th>
                            <th className="text-center" colSpan={3}>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {products.map((product)=>{
                            const id=product._id;
                            console.log('product',product)

                            const {images,title,slug,category,createdAt,quantity,sold,price}=product
                            const Price=formattedPrice(price)
                            const date=day(createdAt).format(`hh:mm a-MMM Do, YYYY`);

                            return(
                              
                               
                                <tr key={id}>
                                    <td>
                                        {
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
                                        }
                                    </td>
                                    <td>{title}</td>
                                    <td>{quantity<0 ?(
                                            <p >Out of stock</p>
                                        ):(
                                            <p>In stock</p>

                                        )}</td>

                                        <td>{Price}</td>
                                        <td>{category.name}</td>
                                         <td>{date}</td>

                                         <td className="text-center">
                                    <Link
                                     key={id} to={`/products/${id}` }
                                       
                                        
                                    >
                                        view
                                    </Link>
                                </td>
                                         <td className="text-center">
                                    <Link
                                      
                                            to={`/admin/product/update/${id}`}
                                    >
                                      <EditOutlined/>
                                      <p>Edit</p>
                                    </Link>
                                </td>
    
                                {/* Delete Button */}
                                <td className="text-center">
                                    {/* <button
                                        className="btn btn-primary"
                                        onClick={() => handleRemove(slug)}
                                    >
                                        Delete
                                    </button> */}
                                    <DeleteOutlined onClick={() => { handleRemove(slug) }}/>
                                        <p>Delete</p>
                                </td>

                                    

                                </tr>
                               
                              
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <PaginationContainer
            current={page}
            total={productsCount}
            pageSize={PRODUCT_PER_PAGE}
            onChange={(value)=>setPage(value)}
            />
       
        </div>
        </>
    )
}

export default AdminProductList