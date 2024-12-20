const express=require('express');
const {getCarouselImages,uploadCarouselImages,deleteCarouselImage}=require('../controllers/carousel')
const upload=require('../middlewares/multerConfig')
const router=express.Router();


router.get('/admin/carousel-images',getCarouselImages)
router.post('/admin/upload-carousel-images',upload.single('image'),uploadCarouselImages)
router.delete('/admin/carousel-images/:id',deleteCarouselImage);

module.exports=router;