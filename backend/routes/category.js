const express=require('express');
const router=express.Router();

const {authCheck,adminCheck} =require('../middlewares/auth');

const {create,list,remove,read,update,fetured}=require('../controllers/category')

router.post('/category',authCheck,adminCheck,create)

router.get('/categories',list)
router.post('/category/:slug',authCheck,adminCheck,remove);
router.post('/category/update/:slug',authCheck,adminCheck,update);
router.get('/category/read/:slug',read)
router.get('/products/:categoryId',fetured)

module.exports=router;
