const express=require('express');
const router=express.Router();

const {authCheck,adminCheck} =require('../middlewares/auth');

const {create,list}=require('../controllers/parentcategory')

router.post('/parent-category',authCheck,adminCheck,create)

router.get('/parentcategories',list)
// router.post('/category/:slug',authCheck,adminCheck,remove);
// router.post('/category/update/:slug',authCheck,adminCheck,update);
// router.get('/category/read/:slug',read)

 module.exports=router;