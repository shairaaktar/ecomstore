import React ,{useEffect,useState}from "react";
import { Link,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories,readCategory } from "../functions/category";


const Categories=()=>{
    const [categories,setCategories]=useState([])
    const [loading,setLoading]=useState([])

    useEffect(()=>{
        setLoading(true);
        getCategories()
        .then(response=>{
            console.log('response',response)
            setCategories(response);
            setLoading(false)

        })
        .catch(error=>{
          console.error('error fetching categories:',error);
          setLoading(false);

        })
    },[]);

    

    return(
       <div className="pt-24">
       
        <details open>
        <summary>Categories </summary>
        
       <div className="pt-12 grid  md:grid-cols-2 lg:grid-cols-6">
        {categories.map((categories)=>{
            console.log(categories);
            const id=categories._id;
            const slug=categories.slug
            return(
                <>
                <Link
                key={id} to={`/category/${slug}`}
                >
                    <h2 className="capitalize  tracking-wider">{categories.name}</h2>
                </Link>
                </>
            )
        })}
       </div>

        </details>
       


       </div>
    )

}

export default Categories;