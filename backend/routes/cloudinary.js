 const express=require('express');
 const router=express.Router();


 const {authCheck}=require("../middlewares/auth");
 const {upload ,remove}=require("../controllers/cloudinary");
 

 router.post('/uploadImages',authCheck,upload)
 router.post('/removeImages',authCheck,remove)

 module.exports=router