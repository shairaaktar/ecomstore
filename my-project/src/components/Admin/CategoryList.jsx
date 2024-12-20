import React,{useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector } from "react-redux";
import { getCategories,removeCategory,readCategory } from '../../functions/category'
import SectionTitle from '../SectionTitle';
import { toast } from 'react-toastify';

const CategoryList=()=>{
    const {slug}=useParams()
    const [categories,setCategories]=useState([])
    const [category,setCategory]=useState([])
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const user=useSelector((state)=>state.userState);
    console.log('user',user)
    const {token,email}=user


    // useEffect(()=>{
    //     setLoading(true)
    //     getCategories(token).then(e=>{
    //         setCategories();
    //         setLoading(false);
    //     })

    //     console.log('categotird',categories)

    // },[token]);

    useEffect(() => {
        setLoading(true);
        getCategories()
            .then(response => {
                console.log('responsse',response)
                setCategories(response); // Set the fetched categories data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });

        
    }, []);

    useEffect(()=>{
        setLoading(true);
        readCategory(slug)
        .then(response=>{
            console.log('category details:',response)
            setCategory(response.category);
            setProducts(response.products);
            setLoading(false)

        }).catch(error=>{
            console.error('Error fetchinh category details',error);
            toast.error('failed to load category details');
            setLoading(false);


        })
    },[slug]);


    const handleRemove=(slug)=>{
        let answer=window.confirm('Delete?')
        if(answer){
            removeCategory(slug,token,email)
            .then(res=>{
                toast.success(`${res.name} is deleted`);
            })
            .catch(err=>{
                console.log(err)
            })

        }
    }

    const handleEdit=(slug)=>{
        
    }


    return (
        // <div className="mt-8">
        //     <div className="mb-4 capitalize">
        //         {categories.length <1 ?(
        //             <SectionTitle text='please create a Category'/>
        //         ):(<h1>
        //             total Category : {categories.length}
        //         </h1>)}
        //     </div>
           
        //    <div className="overflow-x-auto">
        //     <table className="table tabel-zebra">
        //         <thead>
        //             <tr>
        //                 <th>Images</th>
        //                 <th>Name</th>
        //                 <th>Slug</th>
        //                 <th>Description</th>
                         
                       
        //                 <th  colSpan={2}>Action</th>
                      
                       
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {categories.map((categories)=>{
        //                  console.log('categories-->',categories);
        //                 const id=categories._id;
        //                 const slug=categories.slug;
        //                 const images=categories.images
        //                 const name=categories.name
                       
        //                  console.log('id',id)
        //                  const num=categories.productCount
                       
    
                      
                        
        //                 return (
        //                     <>
        //                     {/* <Link
        //                     key={id} to={`/category/${slug}`}

        //                     > */}
        //                        <tr key={id}>
        //                        <td>{images.map((image)=>(
        //                             <div key={image.public_id}className='mb-2'>
        //                                 <img
        //                                 src={image.url}
        //                                 alt={name}
                                        
        //                                  className="w-16 h-16 object-cover rounded-md"
        //                                 />
        //                             </div>
        //                         ))}</td>
        //                          <td>{categories.name}</td>
        //                          <td>{categories.slug}</td>
        //                          <td>{categories.description}</td>
                                 
                               
                                
        //                     {/* </Link> */}
                          
        //                     <tr key={id}> 
                           
                            
        //                    <td>{categories.productCount}</td>
        //                    <td 
        //                     className='text-center'
                                  

        //                           >
        //                             <button className="btn btn-primary"   onClick={()=>handleEdit(categories.slug)}>
        //                                 Edit

        //                             </button>
                                   

        //                           </td>

        //                     <td 
        //                     className='text-center'
                                  

        //                           >
        //                             <button className="btn btn-primary"   onClick={()=>handleRemove(categories.slug)}>
        //                                 Delete

        //                             </button>
                                   

        //                           </td>
                                 
                           
        //                           </tr>
    
    
        //                           </tr>
        //                     </>
        //                 )

        //             })}
        //         </tbody>
    
        //     </table>
    
        //    </div>
           
          
    
    
    
        // </div>
        <div className="mt-8">
        <div className="mb-4 capitalize">
            {categories.length < 1 ? (
                <SectionTitle text="please create a Category" />
            ) : (
                <h1>total Category: {categories.length}</h1>
            )}
        </div>
    
        <div className="overflow-x-auto">
            <table className="table table">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        <th>Product Count</th>
                        <th className="text-center" colSpan={2}>Action</th> {/* Spanning 2 columns */}
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => {
                        const { _id: id, slug, images, name, description, productCount } = category;
    
                        return (
                            <tr key={id}>
                                {/* Images column */}
                                <td>
                                    {images.map((image) => (
                                        <div key={image.public_id} className="mb-2">
                                            <img
                                                src={image.url}
                                                alt={name}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                        </div>
                                    ))}
                                </td>
    
                                {/* Name column */}
                                <td><Link to={`/category/${slug}`}>
                                {name}
                                </Link></td>
    
                                {/* Slug column */}
                                <td>{slug}</td>
    
                                {/* Description column */}
                                <td >{description || "---"}</td>
    
                                {/* Product Count column */}
                                <td>{productCount}</td>
    
                                {/* Edit Button */}
                                {/* <td className="text-center">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(slug)}
                                    >
                                        Edit
                                    </button>
                                </td> */}
    
                                {/* Delete Button */}
                                <td className="text-center">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleRemove(slug)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    
       
        
        )




}

export default CategoryList;