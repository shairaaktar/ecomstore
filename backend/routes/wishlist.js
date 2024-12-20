const express = require('express');
const router = express.Router();

const {authCheck, adminCheck} = require('../middlewares/auth');
const {wishList,fetchWishlistById,deleteWishlist}=require('../controllers/wishlist')

router.post('/wishlist',authCheck,wishList)
router.post('/wishlist/:userId',fetchWishlistById)
router.delete('/:userId/:productId',authCheck,deleteWishlist)


module.exports = router;