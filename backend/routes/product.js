const express=require('express');
const  router=express.Router();
const {authCheck,adminCheck}=require('../middlewares/auth')

const {createProduct,getAllProducts, getColors,getSingleProduct,getSingleProductBySlug,list,listRelated,getAllProductsCount, listAll,listGrid,update,read,fetchCertainInfo, searchFilters,getReviews,reviews,getAllReviews,deleteReview,getReviewsByUser,searchResults,getBestSellingProducts}=require('../controllers/product')
const {remove}=require('../controllers/product')

router.get('/products/filters',fetchCertainInfo)
router.post('/create-product',adminCheck,authCheck,createProduct)
router.get('/products',getAllProducts)
router.get('/productscounts',getAllProductsCount)
router.get('/products/:id',getSingleProduct);
// router.get('/products/:slug',getSingleProductBySlug);
// router.get('/products/count',productsCount);
router.get('/product/:count',listAll);
router.post('/productss',list);
router.post('/productsss',listGrid);
router.get('/product/related/:productId',listRelated)
router.post('/product/remove/:slug', authCheck,adminCheck,  remove)
router.put("/product/:id", authCheck,adminCheck,  update);
router.get('/single-product/:id',read)
router.post('/search/filters',searchFilters)
router.post('/:id/reviews',authCheck,reviews)
router.get('/:id/getreviews',getReviews)
router.get('/reviews',getAllReviews);
router.delete('/products/:productId/reviews/:reviewId',deleteReview)
router.get('/users/:userId/reviews',getReviewsByUser);
router.get('/products/search',searchResults);
router.post('/admin/best-selling-products',authCheck,adminCheck,getBestSellingProducts);
router.get("/colors",getColors)

module.exports=router