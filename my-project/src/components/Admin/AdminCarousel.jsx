// import React,{useState,useEffect} from "react";
// import axios from 'axios'
// import {toast} from 'react-toastify';


// const AdminCarousel=()=>{
//     const [images,setImages]=useState([]);
//     const [file,setFile]=useState(null);

//     useEffect(()=>{
//         fetchCarouselImages();

//     },[])

//     const fetchCarouselImages=async()=>{
//         try{
//             const response=await axios.get('/api/admin/carousel-images');
//             setImages(response.data);

//         }catch(error){
//             toast.error('Failed to fetch carousel images');

//         }
//     }

//     const handleImageUpload=async()=>{
//         if(!file){
//             toast.error('Please select an image');
//             return;
//         }

//         const formData=new FormData();

//         formData.append('image',file);

//         try{

//             const response=await axios.post('/api/admin/upload-carousel-images',formData,{
//                 headers:{'Content-Type':'multipart/form-data'},

//             });

//             setImages([...images,response.data])
//             setFile(null);
//             toast.success('Image uploaded successfully');
//         }catch(error){
//             toast.error('Failed to upload image');
//         }
//     }

//     const handleDeleteImage=async (id)=>{
//         try{
//             await axios.delete(`/api/admin/carousel-images/${id}`);
//             setImages(images.filter((img)=>img._id !==id));
//             toast.success('Image deleted successfully');

//         }catch(error){
//             toast.error('Failed to delete image')
//         }
//     };


//     return(
//         <div className="admin-carousel">
//             <h2>Manage carousel Images</h2>

//             <div className="upload-section">
//                 <input
//                 type="file" 
//                 accept="image/*"
//                 onChange={(e)=>setFile(e.target.files[0])}
//                 className="input"
//                 />
//                 <button onClick={handleImageUpload} className="btn btn-primary">
//                     Upload Image
//                 </button>
                
//             </div>
//             <div className="images-list">
//                 {images.map((image)=>(
//                     <div key={image._id} className="image-item">
//                         <img
//                         src={`/${image.imageUrl}`} alt="carousel" className="w-40 h-40 object-cover"
//                         />
//                         <button
//                             onClick={() => handleDeleteImage(image._id)}
//                             className="btn btn-danger mt-2"
//                         >
//                             Delete
//                         </button>
//                         </div>

//                 ))}

//             </div>

//         </div>
//     )



// }

// export default AdminCarousel;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AdminCarousel = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetchCarouselImages();
//   }, []);

//   const fetchCarouselImages = async () => {
//     try {
//       const response = await axios.get("/api/admin/carousel-images");
//       setImages(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch carousel images");
//     }
//   };

//   const handleImageUpload = async () => {
//     if (!file) {
//       toast.error("Please select an image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await axios.post("/api/admin/upload-carousel-images", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setImages([...images, response.data]);
//       setFile(null);
//       toast.success("Image uploaded successfully");
//     } catch (error) {
//       toast.error("Failed to upload image");
//     }
//   };

//   const handleDeleteImage = async (id) => {
//     try {
//       await axios.delete(`/api/admin/carousel-images/${id}`);
//       setImages(images.filter((img) => img._id !== id));
//       toast.success("Image deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete image");
//     }
//   };

//   return (
//     <div className="admin-carousel">
//       <h2>Manage Carousel Images</h2>

//       <div className="upload-section">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="input"
//         />
//         <button onClick={handleImageUpload} className="btn btn-primary">
//           Upload Image
//         </button>
//       </div>

//       <div className="images-list">
//         {images.length === 0 ? (
//           <p>No images found</p>
//         ) : (
//           images.map((image) => (
//             <div key={image._id} className="image-item">
//               <img
//                 src={`/${image.imageUrl}`}
//                 alt="carousel"
//                 className="w-40 h-40 object-cover"
//               />
//               <button
//                 onClick={() => handleDeleteImage(image._id)}
//                 className="btn btn-danger mt-2"
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminCarousel;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import SectionTitle from "../SectionTitle";

// const AdminCarousel = () => {
//   const [images, setImages] = useState([]); // Ensure images is initialized as an empty array
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetchCarouselImages();
//   }, []);

//   const fetchCarouselImages = async () => {
//     try {
//       const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
//       setImages(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
//       console.log("Fetched images: ", response.data);
//     } catch (error) {
//       toast.error("Failed to fetch carousel images");
//     }
//   };

//   const handleImageUpload = async () => {
//     if (!file) {
//       toast.error("Please select an image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await axios.post("http://localhost:8001/api/admin/upload-carousel-images", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setImages((prevImages) => [...prevImages, response.data]);
//       setFile(null);
//       toast.success("Image uploaded successfully");
//     } catch (error) {
//       toast.error("Failed to upload image");
//     }
//   };

//   const handleDeleteImage = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8001/api/admin/carousel-images/${id}`);
//     //   setImages((prevImages) => prevImages.filter((img) => img._id !== id));
//     setImages(images.filter((img) => img._id !== id));
//       toast.success("Image deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete image");
//     }
//   };

//   return (
//     <div className="admin-carousel">
//      <SectionTitle text="Carousel"/>

//       <div className="upload-section mt-12 mb-12">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="input"
//         />
//         <button onClick={handleImageUpload} className="btn btn-primary">
//           Upload Image
//         </button>
//       </div>

//       <div className="flex mt-6 ">
//         {Array.isArray(images) && images.length === 0 ? (
//           <p>No images found</p>
//         ) : (
//           Array.isArray(images) &&
//            images.map((image) => {
//             const formattedImageUrl = image.imageUrl.replace(/\\/g, '/');
//           console.log(`Image URL: http://localhost:8001/${formattedImageUrl}`);
        
//       return(
//             <div key={image._id} className="image-item">
//               <img
//                 // src={`/${image.imageUrl}`}
//                 // src={`/media/${image.imageUrl}`}
//                 // src={`/${image.imageUrl.replace(/\\/g, '/')}`}
//                 src={`http://localhost:8001/${formattedImageUrl}`}

//                 alt="carousel"
//                 className="w-40 h-40 object-cover mr-6"
//               />
//               <button
//                 onClick={() => handleDeleteImage(image._id)}
//                 className="btn btn-danger mt-2"
//               >
//                 Delete
//               </button>
//             </div>
//       )
// })
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminCarousel;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "../SectionTitle";

const AdminCarousel = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  useEffect(() => {
    // Start autoplay only if there are images available
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // 3 seconds

      return () => clearInterval(interval); // Clear interval on cleanup
    }
  }, [images]); // Re-run autoplay when `images` changes

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/admin/carousel-images");
      setImages(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
    } catch (error) {
      toast.error("Failed to fetch carousel images");
    }
  };

  const handleImageUpload = async () => {
    if (!file) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:8001/api/admin/upload-carousel-images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setImages((prevImages) => [...prevImages, response.data]);
      setFile(null);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Failed to upload image");
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/admin/carousel-images/${id}`);
      setImages(images.filter((img) => img._id !== id));
      toast.success("Image deleted successfully");
    } catch (error) {
      toast.error("Failed to delete image");
    }
  };

  return (
    <div className="admin-carousel">
      <SectionTitle text="Carousel" />

      <div className="upload-section mt-12 mb-12">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="input"
        />
        <button onClick={handleImageUpload} className="btn btn-primary">
          Upload Image
        </button>
      </div>

      <div className="carousel-container relative w-full max-w-2xl mx-auto">
        {images.length > 0 && (
          <div className="carousel-inner relative w-full overflow-hidden">
            <div
              className="carousel-images flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {images.map((image) => {
                const formattedImageUrl = image.imageUrl.replace(/\\/g, '/');
                return (
                  <div key={image._id} className="carousel-item w-full flex-shrink-0">
                    <img
                      src={`http://localhost:8001/${formattedImageUrl}`}
                      alt="carousel"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2"
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
                )
              }
            >
              Prev
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2"
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
                )
              }
            >
              Next
            </button>
          </div>
        )}

        {images.length === 0 && <p>No images found</p>}
      </div>
    </div>
  );
};

export default AdminCarousel;
