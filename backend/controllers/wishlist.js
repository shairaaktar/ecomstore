const express = require('express');
const User=require('../models/user')
const Wishlist = require('../models/wishlist')
const Product=require('../models/product')



// exports.wishList=()=> async (req, res) => {
//   console.log('req body',req.body);
//   console.log('Request Headers',req.headers)
//   const { email,userId, productId } = req.body;
//   console.log('userId,productId',userId,productId)

//   if (!userId || !productId) {
//     return res.status(400).json({ message: 'User ID and Product ID are required' });
//   }

//   try {
//     // Find or create a wishlist for the user
//     let wishlist = await Wishlist.findOne({ userId });
//     if (!wishlist) {
//       wishlist = new Wishlist({ userId, products: [] });
//     }

//     // Check if the product is already in the wishlist
//     if (wishlist.products.includes(productId)) {
//       return res.status(400).json({ message: 'Product is already in wishlist' });
//     }

//     // Add product to the wishlist
//     wishlist.products.push(productId);
//     await wishlist.save();

//     res.status(200).json({ message: 'Product added to wishlist', wishlist });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };


exports.wishList = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request Headers:', req.headers);

  const {  userId, productId } = req.body.WishProduct;
  console.log('User ID, Product ID:', userId, productId);

  if (!userId || !productId) {
    return res.status(400).json({ message: 'User ID and Product ID are required' });
  }

  try {
    // Find or create a wishlist for the user
    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [] });
    }

    // Check if the product is already in the wishlist
    if (wishlist.products.includes(productId)) {
      return res.status(400).json({ message: 'Product is already in wishlist' });
    }

    // Add product to the wishlist
    wishlist.products.push(productId);
    await wishlist.save();

    res.status(200).json({ message: 'Product added to wishlist', wishlist });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


exports.fetchWishlistById= async(req,res)=>{
  const {userId}=req.params;

  if(!userId){
    return res.status(400).json({ message: 'User ID is required' });

  }

  try{
    const wishList=await Wishlist.findOne({userId});
    if(!wishList){
      return res.status(404).json({message:'Wishlist not found'})

    }

    const productDetails=await Product.find({_id:{$in:wishList.products}});

    const userDetails=await User.findById(userId);

    res.status(200).json({
      message: 'Wishlist details fetched successfully',
      wishlist: {
        user: userDetails,
        products: productDetails,
      },
    });


  }catch(error){
    console.error('Error fetching wishlist details:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }




}

exports.deleteWishlist= async(req,res)=>{
  const {userId,productId}=req.params;

  try{
    const wishlist=await Wishlist.findOne({userId});

    if(!wishlist){
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    const productIndex=wishlist.products.indexOf(productId);

    if(productIndex===-1){
      return res.status(404).json({ message: 'Product not found in wishlist' });
    }

    wishlist.products.splice(productIndex, 1);
    await wishlist.save();

    res.status(200).json({ message: 'Product removed from wishlist', products: wishlist.products });

  }catch(error){
    console.error('Error removing product from wishlist:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}