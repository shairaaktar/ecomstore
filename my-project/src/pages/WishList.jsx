// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {SectionTitle} from '../components'
// import axios from "axios";

// const WishList=()=>{

//     const [wishList ,setWishlist]=useState({products:[]})

//     const [productsCount,setProductsCount]=useState(0)

//     const [error,setError]=useState(null)
//     const user=useSelector((state)=>state.userState);

//     const {token,email,id}=user
//     console.log('id',id)

//     useEffect(()=>{
//         fetchUserWishList();

//     },[token,email])

//     const fetchUserWishList=()=>{
//         axios.post(`http://localhost:8001/api/wishlist/${id}`,{
//             email
//         },{
//             headers:{
//                 Authorization:`Bearer ${token}`,
//                 authtoken:token
//             }
//         }).then((response)=>{
//             setWishlist(response.data);
//             console.log('response',response.data)

//         })
//         .catch((error)=>{
//             console.error('Error fetching wishlist',error)

//         })
//     }

//     return(
//         <div className="mt-8">
//             <div className="mb-4 capitalize">
//             {Array.isArray(wishList.products) && wishList.products.length > 0 ? (
//     <h1 className="text-2xl font-semibold">
//       Total Products: {wishList.products.length}
//     </h1>
//   ) : (
//     <SectionTitle text={"There is no product in the wishlist at the moment"} />
//   )}
//             </div>

//         </div>
//     )

// }
//  export default WishList;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SectionTitle } from "../components";
import axios from "axios";
import { formattedPrice } from "../utils";
import { Link } from "react-router-dom";
import BASE_URL from "../config";

const WishList = () => {
  const [wishList, setWishlist] = useState({ products: [] });
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.userState);

  const { token, email, id } = user;
  console.log("id", id);

  useEffect(() => {
    if (token && email) {
      fetchUserWishList();
    }
  }, [token, email]);

  const fetchUserWishList = () => {
    axios
      .post(
        `${BASE_URL}/api/wishlist/${id}`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            authtoken: token,
          },
        }
      )
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data.wishlist && Array.isArray(response.data.wishlist.products)) {
          setWishlist(response.data.wishlist); // Extract the wishlist object
        } else {
          setWishlist({ products: [] }); // Default structure
        }
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
        setWishlist({ products: [] }); // Fallback on error
        setError("Failed to fetch wishlist");
      });
  };

  

  return (
    <div className="mt-5">
        <div className="text-md breadcrumbs">
            <ul>
                <li>
                    <Link to='/'/>
                    Home

                </li>
                <li >
                    <Link to='/dashboard'>
                    Dashboard
                    </Link>

                </li>
               
            </ul>

        </div>
      <div className="mb-4 capitalize">
        {Array.isArray(wishList.products) && wishList.products.length > 0 ? (
        //   <h1 className="text-2xl font-semibold">
        //     Total Products: {wishList.products.length}
        //   </h1>
        <SectionTitle text={" Wishlist"}/>
        ) : (
          <SectionTitle text={"There is no product in the wishlist at the moment"} />
        )}
      </div>

      <div className="flex justify-center items-center ">
        <div
        //  className="overflow-x-auto "
        className="overflow-x-auto w-full mt-5"
         >
            {wishList?.products?.length >0?(
               <table className="table border-collapse shadow-2xl rounded-lg border transform transition-transform duration-300 ">
                <thead >
                    <tr >
                        <th>Products</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th colSpan={2} className="text-center">
                            Actions

                        </th>

                    </tr>
                </thead>
                <tbody>
                    {wishList.products.map((product)=>{
                        const {
                            title,
                            price,
                            quantity,
                            _id,
                            images = [],
                          } = product;
                          const Price = formattedPrice(price);

                          return(
                            <tr key={_id}>
                                <td>
                                    {images.length>0 &&(
                                        <img
                                        src={images[0].url}
                                        alt={null}
                                        className="w-40 h-40 object-cover rounded-md"
                                        />
                                    )}

                                </td>
                                <td>
                                    <p>{title}</p>
                                    <p>
                                    <button className="text-blue-500 hover:underline">
                            <Link to={`/products/${_id}`}>View Product</Link>
                          </button>
                                    </p>
                                </td>
                                <td>{Price}</td>
                                <td>
                                {quantity <= 0 ? (
                          <p className="text-red-500">Out of Stock</p>
                        ) : (
                          <p className="text-green-500">In Stock</p>
                        )} 
                                </td>
                                <td>
                        <button className="btn btn-primary">Add to Cart</button>
                      </td>
                            </tr>
                          )
                    })}
                </tbody>

               </table>

            ):(
                <div> No items in your wishlist at the moment</div>
            )}

        </div>

      </div>
    </div>
  );
};

export default WishList;
