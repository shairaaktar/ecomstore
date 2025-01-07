// import React from "react";
// import Resizer from 'react-image-file-resizer';
// import axios from "axios";
// import { useSelector } from "react-redux";
// import {Avatar, Badge,Space} from 'antd';



// const FileUpload=({values,setValues})=>{
//     const user=useSelector((state)=>state.userState);
//     console.log('user',user)
//     const{token}=user;
//     console.log('token',token)

//     const FileUploaderAndResize=(e)=>{
//         console.log(e.target.files);
//         let files=e.target.files;
//         // let allUploadedFiles=values.images;
//         let allUploadedFiles = values.images

//         console.log('AllUploadedFiles',allUploadedFiles)
//         if(files){
//             for(let i=0;i<files.length;i++){
//                 Resizer.imageFileResizer(files[i],720,720,'JPEG',100,0,(uri)=>{
//                     console.log(uri)
//                      axios.post(
//                       'http://localhost:8001/api/uploadImages',
//                       {image:uri},
//                       {headers:{
//                         authtoken:token 
//                       }}
//                      ).then((res)=>{
//                          console.log('IMAGE UPLOAD RES DATA',res);
//                          allUploadedFiles.push(res.data);
//                          setValues({...values,images:allUploadedFiles});

//                      })
//                      .catch(err=>{
//                          console.log('cloudinary Upload Err',err);
//                      })
//                 },"base64")
                
//             }
//         }
//     }

//     const handleImageRemove=(public_id)=>{
//         axios.post(
//             'http://localhost:8001/api/rem',
//             {public_id},
//             { 
//                 headers:{
//                     authtoken:token
//                 }

//             }

//         ).then(res=>{
//             const {images}=values
//             let filteredImages=images.filter((item)=>{
//                 return item.public_id!=public_id
//             });
//             setValues({...values,images:filteredImages});

//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

//     return(
//         <>
//          <div className="row">
//             {values.images && values.images.map((image)=>(
//                 <Badge count="X">
//                     <Avatar key={image.public_id} src={image.url} size={60}
//                 shape="square" className="ml-3"
//                 />
//                 </Badge>
               
//                 // <Space size={100}>
//                 //     <Badge
//                 //     count={"x"}
//                 //     key={image.public_id}
//                 //     onClick={()=>handleImageRemove(image.public_id)}
//                 //     style={{cursor:"pointer"}}
//                 //     >
//                 //         <Avatar
//                 //         src={image.url}
//                 //         shape="square"
//                 //         size={100}
//                 //         className="ml-3"
//                 //         />
                       
//                 //     </Badge>
//                 // </Space>
//             ))}

//         </div> 
//         <div className="row">
//             <label className="btn btn-primary btn-raised btn-raised mt-3">
//                 Choose image Files
//                 <input
//                 type="file"
               
//                 multiple
//                 hidden
//                  accept="images/*"
//                 onChange={FileUploaderAndResize}
//                 />

//             </label>

//         </div>
//         </>
//     )

// }

// export default FileUpload

// import React from "react";
// import Resizer from 'react-image-file-resizer';
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { Avatar, Badge } from 'antd';

// const FileUpload = ({ values, setValues,setLoading }) => {
//   const user = useSelector((state) => state.userState);
//   const { token } = user;

//   const fileUploadAndResize = (e) => {
//     let files = e.target.files;
//     console.log("files",files)
//     let allUploadedFiles = values.images;
//     console.log('allUploadedFiles',allUploadedFiles)

//     if (files) {
//      setLoading(true)
//       for (let i = 0; i < files.length; i++) {
//         Resizer.imageFileResizer(
//           files[i],
//           720,
//           720,
//           'JPEG',
//           100,
//           0,
//           async (uri) => {
//             console.log("uri",uri)
//             axios.post(
//                 'http://localhost:8001/api/uploadImages',
//                 { image: uri },
//                 {
//                   headers: {
//                     authtoken: token,
//                   },
//                 }
//               ).then((res) => {
//                 console.log("IMAGE UPLOAD RES DATA", res);
//                 setLoading(false);
//                 allUploadedFiles.push(res.data);

//                 setValues({ ...values, images: allUploadedFiles });
//             })
//             .catch(err => {
//                 setLoading(false)
//                 console.log('cloudinary Upload Err', err);
//             });



//     }, 'base64');
             
//       }
//     }
//   };

//   const handleImageRemove = async (public_id) => {
//     try {
//       await axios.post(
//         'http://localhost:8001/api/removeImages',
//         { public_id },
//         {
//           headers: {
//             authtoken: token,
//           },
//         }
//       );
//       const filteredImages = values.images.filter((item) => item.public_id !== public_id);
//       setValues((prevValues) => ({
//         ...prevValues,
//         images: filteredImages,
//       }));
//     } catch (err) {
//       console.log('Cloudinary Remove Error', err);
//     }
//   };

//   return (
//     <>
//        <div className="row">
//         {values.images && values.images.map((image) => (
//           <Badge
//             count="X"
//             key={image.public_id}
//             onClick={() => handleImageRemove(image.public_id)}
//             style={{ cursor: "pointer" }}
//           >
//             <Avatar
//               src={image.url}
//               size={60}
//               shape="square"
//               className="ml-3"
//             />
//           </Badge>
//         ))}
//       </div> 
//       <div className="row">
//         <label className="btn btn-primary btn-raised mt-3">
//           Choose Image Files
//           <input
//             type="file"
//             multiple
//             hidden
//             // accept="image/*"
//             onChange={fileUploadAndResize}
//           />
//         </label>
//       </div>
//     </>
//   );
// };

// export default FileUpload;

import React from "react";
import Resizer from 'react-image-file-resizer';
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Badge } from 'antd';
import BASE_URL from "../config";

const FileUpload = ({ values, setValues ,setLoading}) => {
  const user = useSelector((state) => state.userState);
  const { token } = user;

  const uploadImages=async (uri, retries=3)=>{
    try{
      const res=await axios.post(
        `${BASE_URL}/api/uploadImages`,
        {image:uri},
        {
          headers:{
            authtoken:token,
          },
          timeout:60000
        }
      );
      return res.data;

    }catch(err){
      if(retries>0){
        console.warn('Retrying upload.....',retries);
        return uploadImages(uri, retries-1);
      }else{
        throw err;
      }
    
    }
  }

  const FileUploaderAndResize = (e) => {
    let files = e.target.files;
    let allUploadedFiles = values.images || []; // Ensure it's always an array
  
    if (files) {
      setLoading(true);
      let uploadPromises = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
  
        // Resize the image
        const uploadPromise = new Promise((resolve, reject) => {
          Resizer.imageFileResizer(
            file,
            720,
            720,
            'JPEG',
            80,
            0,
            async (uri) => {
              try {
                const res = await axios.post(
                  `${BASE_URL}/api/uploadImages`,
                  { image: uri },
                  {
                    headers: {
                      authtoken: user ? user.token : "",
                    },
                    timeout: 120000, // Increase timeout to 120 seconds
                  }
                );
                console.log("IMAGE UPLOAD RES DATA", res);
                allUploadedFiles.push(res.data);
                resolve(res.data);
              } catch (err) {
                console.log('Cloudinary Upload Error', err);
                reject(err);
              }
            },
            'base64'
          );
        });
  
        uploadPromises.push(uploadPromise);
      }
  
      // Handle all uploads
      Promise.all(uploadPromises)
        .then(() => {
          setValues({ ...values, images: allUploadedFiles });
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error uploading images', err);
          setLoading(false);
        });
    }
  };
  

//   const FileUploaderAndResize = (e) => {
//     //console.log(e.target.files);
//     let files = e.target.files;
//     let allUploadedFiles = values.images;
//     if (files) {
//         setLoading(true);
//         for (let i = 0; i < files.length; i++) {
//             Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri) => {

//                 axios.post(
//                     // `${process.env.REACT_APP_API}/uploadimages`,
//                     'http://localhost:8001/api/uploadImages',
//                     { image: uri },
//                     {
//                         headers: {
//                             authtoken: user ? user.token : "",
//                         },
//                     }
//                 )
//                     .then((res) => {
//                         console.log("IMAGE UPLOAD RES DATA", res);
//                         setLoading(false);
//                         allUploadedFiles.push(res.data);

//                         setValues({ ...values, images: allUploadedFiles });
//                     })
//                     .catch(err => {
//                         setLoading(false)
//                         console.log('cloudinary Upload Err', err);
//                     });



//             }, 'base64');

//         }
//     }
// };

  // const fileUploaderAndResize = (e) => {
  //   let files = e.target.files;
  //    let allUploadedFiles = values.images // Ensure it's always an array
  //  console.log('allUploadedFile',allUploadedFiles)
  //   if (files) {
  //     setLoading(true);
  //     let uploadPromises=[];
  //     for (let i = 0; i < files.length; i++) {
  //       const fileUploadPromise=new Promise((resolve, reject)=>{
  //         Resizer.imageFileResizer(
  //           files[i],
  //           720,
  //           720,
  //           'JPEG',
  //           80,
  //           0,
  //           async (uri) => {
  //             try {
  //               const res = await uploadImages(uri);
  //               // axios.post(
  //               //   'http://localhost:8001/api/uploadImages',
  //               //   { image: uri },
  //               //   {
  //               //     headers: {
  //               //       authtoken: token,
  //               //     },
  //               //   }
  //               // );
  //               console.log('IMAGE UPLOAD RES DATA', res);
  //               allUploadedFiles = [...allUploadedFiles, res];
  //               console.log('allUplpadedFile',allUploadedFiles)
  //               resolve(res);
                
  //             } catch (err) {
  //               console.log('Cloudinary Upload Error', err);
  //               reject(err);
  //             }
  //           },
  //           "base64"
  //         );

  //       })
  //        uploadPromises.push(fileUploadPromise);
       
  //     }
  //     Promise.all(uploadPromises)
  //     .then(()=>{
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         images: allUploadedFiles,
  //       }));
        
  //       console.log('IMAGE UPLOAD RES DATA', res);
  //       setLoading(false);


  //     })
  //     .catch(()=>{
  //       setLoading(false);
  //     })
  //   }
  // };

  const handleImageRemove = async (public_id) => {
    try {
      await axios.post(
        `${BASE_URL}/api/removeImages`,
        { public_id },
        {
          headers: {
            authtoken: token,
          },
        }
      );
      const filteredImages = values.images.filter((item) => item.public_id !== public_id);
      setValues((prevValues) => ({
        ...prevValues,
        images: filteredImages,
      }));
    } catch (err) {
      console.log('Cloudinary Remove Error', err);
    }
  };

  return (
    <>
      <div className="row">
        {values.images && values.images.map((image) => (
          <Badge
            count="X"
            key={image.public_id}
            onClick={() => handleImageRemove(image.public_id)}
            style={{ cursor: "pointer" }}
          >
            <Avatar
              src={image.url}
              size={60}
              shape="square"
              className="ml-3"
            />
          </Badge>
        ))}
      </div>
      <div className="row">
        <label className="btn btn-primary btn-raised mt-3">
          Image
          <input
            type="file"
            multiple
            hidden
            accept="image/*"
            onChange={FileUploaderAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
