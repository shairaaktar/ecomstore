const Order = require('../models/order');

const Product = require('../models/product');
const slugify=require('slugify')


// const calculateDiscountPercentage=(price,discountPrice)=>{
//   if(!price || !discountPrice || discountPrice>=price)
//     return null;
//   return ((price-discountPrice)/price)*100;
// }


const calculateDiscountPercentage = (price, discountPrice) => {
  if (!price || !discountPrice || discountPrice >= price) {
    return null;
  }
  const discountPercentage = ((price - discountPrice) / price) * 100;
  console.log('discountPercentage',discountPercentage)
  return parseFloat(discountPercentage.toFixed(0)); // Rounds to one decimal place
};



// const applyDiscountIfNeeded=(product)=>{
//   const now=new Date();

//   if(product.discountStartDate && product.discountEndDate){
//     if(now>=product.discountStartDate && now <=product.discountEndDate){
//       product.price=product.discountPrice;
//       console.log('product.price',product.price)
//       product.discountPercentage=calculateDiscountPercentage(product.price,product.discountPrice);
//       console.log('product.discountPercentage',product.discountPercentage)
//     }else{
    
//       product.discountPercentage=null;
//     }

//   }
// }


const applyDiscountIfNeeded = (product) => {
  const now = new Date();

  console.log('Current Date:', now);
  console.log('Discount Start Date:', product.discountStartDate);
  console.log('Discount End Date:', product.discountEndDate);

  if (product.discountStartDate && product.discountEndDate) {
    if (now >= product.discountStartDate && now <= product.discountEndDate) {
      
      product.discountPercentage = calculateDiscountPercentage(product.price, product.discountPrice);
      console.log('Applied Discount Price:', product.price);
      console.log('Calculated Discount Percentage:', product.discountPercentage);
    } else if (now < product.discountStartDate) {
      // Set future discount values
      product.discountPercentage = calculateDiscountPercentage(product.price, product.discountPrice);
      console.log('Future Discount Percentage:', product.discountPercentage);
    } else {
      console.log('Discount period not active.');
      product.discountPercentage = null; // Explicitly setting to null if not in discount period
    }
  } else {
    console.log('Discount dates are not set.');
  }
};


exports.createProduct = async (req, res) => {
  const slug = slugify(req.body.title);
  const
   { title,
     company, 
     description,
     highlights, 
     featured, 
     category,
      images,
       price,
        shipping,
         colors,
         quantity ,
         sizes,
         sizeChart,
         discountPrice,
         discountsSchedule
        } = req.body;

        console.log('req.body',req.body)

  console.log('Request Body',req.body)

  const processedSizeChart={
    columns:sizeChart.columns || [],
    rows:sizeChart.rows.map(row=>new Map(Object.entries(row)))
  }

  const newProduct = new Product({
    title,
    slug,
    company,
    description,
    highlights,
    featured,
    category,
    images,
    price:Number(price),
    discountPrice:Number(discountPrice)||null,
    discountStartDate:discountsSchedule.startDate? new Date(discountsSchedule.startDate):null,
    discountEndDate:discountsSchedule.endDate?new Date(discountsSchedule.endDate):null,
    quantity,
    shipping,
    colors,
    sizes,
    sizeChart:processedSizeChart
  })

  try {
    applyDiscountIfNeeded(newProduct);
    const savedProduct = await newProduct.save();
    console.log('savedProduct',savedProduct)
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// exports.update=async(req,res)=>{
//   try{
  
   
//     const {product}=req.body;

//     console.log('product',product)

//      let productData=await Product.findByIdAndUpdate({_id:req.params.id});

//      console.log('productData',productData)

//     if(!productData){
//       return res.status(404).json({error:"Product not found"});
//     }

//     Object.assign(productData,product);

//     applyDiscountIfNeeded(productData);

//     await productData.save();

//     console.log('newproductData',productData)
//     res.status(200).json(productData);
    

//   }catch(error){
//     console.error("Error updating product:",error);
//     res.status(500).json({error:"Product update failed."});
//   }
// }


exports.update = async (req, res) => {
  try {
    const { product } = req.body;

    console.log('products',product)

    // Update the product directly using the update object
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      product,
      { new: true } // return the updated document and run validators
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Apply discount if needed
    applyDiscountIfNeeded(updatedProduct);

    await updatedProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Product update failed." });
  }
};


exports.getAllProducts=async(req,res)=>{
   try{

    const products=await Product.find();
    // const total=products.length;
    let total = await Product.countDocuments()
    .populate('category','name')
    .exec();
    console.log('total',total)



    console.log('Products',products)

    res.status(200).json(products);

   }catch(error){
    console.error('Error retrieving products:',error);
    res.status(500).json({error:'Internal Server Error'});
   }
}

exports.getSingleProduct=async(req,res,next)=>{
  try{
    const product=await Product.findById(req.params.id);
    if(product==null){
      return res.status(404).json({message:'Product not found'});
    }
    res.product=product;
    res.json(res.product);
    next();

  }catch(err){
    return res.status(500).json({message:err.message});
  }
}

exports.listAll=async (req,res)=>{
  let products=await Product.find({})
  .limit(parseInt(req.params.count))
  .populate('category')
  .sort([['createdAt','desc']])
  .populate('category','name')
  .exec();
res.json(products);
}

// exports.productsCount=async (req,res)=>{
//   let total=await Product.find().estimatedDocumentCount().exec();
//   console.log(total);
//   res.json(total);

// }

// exports.productsCount = async (req, res) => {
//   try {
//       let count = await Product.estimatedDocumentCount().exec();
//       console.log(count);
//       res.json(count);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "An error occurred while counting products" });
//   }
// }

// exports.productsCount = async (req, res) => {
//   try {
//       let total = await Product.estimatedDocumentCount().exec();
//       console.log('Total products:', total);
//       res.json(total);
//   } catch (err) {
//       console.error('Error counting products:', err);
//       res.status(500).json({ error: 'An error occurred while counting products' });
//   }
// };

// exports.productsCount = async (req, res) => {
//   try {
//       let total = await Product.aggregate([{ $count: "total" }]);
//       console.log('Total products:', total[0].total);
//       res.json(total[0].total);
//   } catch (err) {
//       console.error('Error counting products:', err);
//       res.status(500).json({ error: 'An error occurred while counting products' });
//   }
// };

// exports.productsCount = async (req, res) => {
//   try {
//       let total = await Product.countDocuments().exec();
//       console.log('Total products:', total);
//       res.json(total);
//   } catch (err) {
//       console.error('Error counting products:', err);
//       res.status(500).json({ error: 'An error occurred while counting products' });
//   }
// };

// exports.productsCount = async (req, res) => {
//   try {
//       let products = await Product.find().exec();
//       let total = products.length;
//       console.log('Total products:', total);
//       res.json(total);
//   } catch (err) {
//       console.error('Error counting products:', err);
//       res.status(500).json({ error: 'An error occurred while counting products' });
//   }
// };


exports.getAllProductsCount=async(req,res)=>{
  try{

   const products=await Product.find();
   // const total=products.length;
   let total = await Product.countDocuments().exec();
   console.log('total',total)



   console.log('Products',products)

   res.status(200).json({total});

  }catch(error){
   console.error('Error retrieving products:',error);
   res.status(500).json({error:'Internal Server Error'});
  }
}


exports.list=async (req,res)=>{
  console.table(req.body);
  try{
  
    const {sort ='createdAt', order='desc', page=1}=req.body;
    console.log('sort',sort)
    const currentPage=page || 1;
    const perPage=10;

    const totalProducts = await Product.countDocuments({});


    const  products=await Product.find({})
    .skip((currentPage-1)*perPage)
    .sort([[sort,order]])
    .populate('category','name')
    .limit(perPage)
    .exec()
  
    res.json({
      products,
      totalProducts
    })
   
  }catch(err){
    console.log(err)
  }
}

exports.listGrid=async (req,res)=>{
  console.table(req.body);
  try{
  
    const {sort , order, page}=req.body;
    const currentPage=page || 1;
    const perPage=10;

    const totalProducts=await Product.countDocuments({});

    const  products=await Product.find({})
    .skip((currentPage-1)*perPage)
    .sort([[sort,order]])
    .limit(perPage)
    .populate('category','name')
    .exec();
  
    res.json({
      products,
      totalProducts
    })
   
  }catch(err){
    console.log(err)
  }
}

exports.listRelated=async (req,res)=>{
  const product=await Product.findById(req.params.productId).exec();

  const related=await Product.find({
    _id:{$ne:product._id},
    category:product.category,
  })
  .limit(3)
  .populate('category')
  .exec()
res.json(related)
}

// exports.list = async (req, res) => {
//   // console.table(req.body);
//   try {
//       // createdAt/updatedAt, desc/asc, 3
//       const { sort, order, page } = req.body;
//       const currentPage = page || 1;
//       const perPage = 3; // 3

//       const products = await Product.find({})
//           .skip((currentPage - 1) * perPage)
//           .populate("category")
//           .populate("subs")
//           .sort([[sort, order]])
//           .limit(perPage)
//           .exec();

//       res.json(products);
//   } catch (err) {
//       console.log(err);
//   }
// };


exports.remove=async (req,res)=>{
  const {email}=req.body
  try{
    const deleted=await Product.findOneAndDelete({
             slug:req.params.slug,
    }).exec();
    res.json(deleted);

  }catch(err){
    console.log(err);
    return res.status(400).send("product Deleted Failed");

  }
}

exports.searchResults=async(req,res)=>{
  try{
    const query = req.query.query || '';
    const products = await Product.find({
      $text: { $search: query }, // Assuming you have a text index on your product fields
    });
    res.json(products);

  }catch(error){
    res.status(500).json({ message: 'Error fetching search results' });
  }

}

exports.read=async (req,res)=>{
  const product=await Product.findOne({_id:req.params.id})
  .exec();
  console.log('read',product)
  res.json(product);
};

// exports.update=async(req,res)=>{
//   try{
//     if(req.body.title){
//        req.body.slug=slugify(req.body.title);
//     }
//     const updated=await Product.findOneAndUpdate({slug:req.params.slug},req.body,{
//       new:true
//     }).exec();
//     res.json(updated);
//   }catch(err){
//     console.log('Product Update Error',err)
//     res.status(400).json({
//       err:err.message,
//     })

//   }
// }


// exports.update=async(req,res)=>{
//   try{
//     console.log('req.body',req.body)

//     const {title,slug,price,discountPrice,images,sizeChart,discountsSchedule,colors,sizes}=req.body;

//     if(title){
//       req.body.slug=slugify(title);
//       console.log('req.body.slug',req.body.slug)
//     }
    


//     if(price && discountPrice && discountPrice<price){
//       const discountPercentage=((price-discountPrice)/price)*100;
//       req.body.discountPercentage=discountPercentage.toFixed(0);
//       console.log('req.body.discountPercentage',req.body.discountPercentage)

//     }else{
//       req.body.discountPercentage=null;
//     }

//     if(colors){
//       req.body.colors=colors.split(",").map((color)=>color.trim());
//       console.log('req.body.colors',req.body.colors)
//     }
//     if(sizes){
//       req.body.sizes=sizes.split(",").map((size)=>size.trim());
//       console.log('req.body.sizes',req.body.sizes)
//     }

//     if(sizeChart && sizeChart.columns && sizeChart.rows){
//       req.body.sizeChart={
//         columns:sizeChart.columns,
//         rows:sizeChart.rows,
//       }
//       console.log('req.body.sizeChart',req.body.sizeChart)
//     }

//     if(discountsSchedule){
//       req.body.discountsSchedule={
//         startDate:discountsSchedule.startDate ? new Date(discountsSchedule.startDate):null,
//         endDate:discountsSchedule.endDate ? new Date(discountsSchedule.endDate) :null,
//       }
//       console.log('req.body.discountsSchedule',req.body.discountsSchedule)
//     }

//     const updated=await Product.findOneAndUpdate({slug:req.params.slug},req.body,{
//       new:true,
//     }).exec();

//     console.log('updated',updated)

//     res.json(updated);

//   }catch(err){
//     console.log("Product update Error",err);
//     res.status(400).json({
//       error:err.message,
//     });

//   }
// }


// exports.update = async (req, res) => {
//   try {
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }

//     // Convert discountPrice to a number
//     if (req.body.discountPrice) {
//       req.body.discountPrice = Number(req.body.discountPrice);
//     }

//     // Handle discountsSchedule
//     if (req.body.discountsSchedule) {
//       req.body.discountStartDate = req.body.discountsSchedule.startDate;
//       req.body.discountEndDate = req.body.discountsSchedule.endDate;
//       delete req.body.discountsSchedule; // Remove the nested field
//     }

//     // Update the product
//     const updated = await Product.findOneAndUpdate(
//       { slug: req.params.slug },
//       req.body,
//       { new: true }
//     ).exec();

//     res.json(updated);
//   } catch (err) {
//     console.log('Product Update Error', err);
//     res.status(400).json({
//       err: err.message,
//     });
//   }
// };


// exports.update = async (req, res) => {
//   try {
//     // Log the request body to ensure it's correct
//     console.log("Request body:", req.body);

//     // If the title is provided, update the slug
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }

//     // Convert discountPrice to a number if provided
//     if (req.body.discountPrice) {
//       req.body.discountPrice = Number(req.body.discountPrice);
//     }

//     // Handle discountsSchedule if provided
//     if (req.body.discountsSchedule) {
//       req.body.discountStartDate = req.body.discountsSchedule.startDate;
//       req.body.discountEndDate = req.body.discountsSchedule.endDate;
//       delete req.body.discountsSchedule; // Remove the nested object from req.body
//     }

//     // Explicitly update nested fields using $set
//     const updated = await Product.findOneAndUpdate(
//       { slug: req.params.slug },
//       {
//         $set: req.body, // This ensures all fields in req.body are set, including nested objects
//       },
//       { new: true }
//     ).exec();

//     if (!updated) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json(updated);
//   } catch (err) {
//     console.error("Product Update Error", err);
//     res.status(400).json({
//       err: err.message,
//     });
//   }
// };


exports.fetchCertainInfo=async(req,res)=>{
  try{
    const companies=await Product.distinct('company');
    console.log('companies-->',companies)
    const colors=await Product.distinct('colors');

    res.json({companies,colors});
  }catch(err){
    console.error(err);
    res.status(500).json({error:'Server error'});
  }
}

const handleQuery=async(req,res,query)=>{
  console.log('query',query)
  const products=await Product.find({$text:{$search:query}})
  .populate('category','_id name')
  .exec();
  res.json(products);
}

const handlePrice=async(req,res,price)=>{
  console.log('price??',price)
  try{
   const products=await Product.find({
    price:{
      $gte:price[0],
      $lte:price[1],
    }
   })
   .populate('category',"_id name")
   .exec();
   res.json(products)

  }catch(err){
    console.log(err)

  }
}
const handleCategory=async (req,res,category)=>{
  console.log('category',category)
  try{
    let products=await Product.find({category})
    .populate('category','_id name')
    .exec();
  res.json(products)

  }catch(err){
    console.log(err)
  }
}

const handleShipping=async(req,res,shipping)=>{
  const isShipping=shipping.toLowerCase()=== "yes"?true:false;

  const products=await Product.find({shipping:isShipping})
  .populate('category','_id name')
  .exec();
  res.json(products);
}

const handleColor=async (req,res,color)=>{
  console.log('color',color)
  const products=await Product.find({colors:color})
  .populate('category','_id name')
  .exec();
  res.json(products);
}

const handleCompany=async(req,res,company)=>{
  console.log('comapny',company)
  const products=await Product.find({company})
  .populate('category','_id name')
  .exec();
res.json(products);
}

exports.searchFilters=async(req,res)=>{
  const {query,price,category,shipping,company,color}=req.body;
  console.log('query',query)
  console.log('price',price)

  if(query){
    console.log('query',query)
    await handleQuery(req,res,query)
  }

  if(price!==undefined){
    console.log('price--->',price)
    await handlePrice(req,res,price);
  }

  if(category){
    console.log('category--->',category)
    await handleCategory(req,res,category);
  }

  if(shipping){
    console.log('shipping-->',shipping)
    await handleShipping(req,res,shipping);
  }

  if(color){
    console.log('color--->',color)
    await handleColor(req,res,color)
  }
  if(company){
    console.log('company-->',company)
    await handleCompany(req,res,company);
  }

}


exports.reviews=async(req,res)=>{
  console.log('req.body',req.body)
  const {rating,comment,id}=req.body.feedback;
  // console.log('rating, comment,id',rating,comment,id)
  const productId=req.params.id;

  try{

    const product=await Product.findById(productId);

    if(!product){
      return res.status(404).json({message:'Product not found'});
    }

  //   if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
  //     return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
  // }

  // if (!comment || comment.trim() === '') {
  //     return res.status(400).json({ message: 'Comment is required' });
  // }

  if ((!rating && !comment) || (isNaN(rating) && !comment.trim())) {
    return res.status(400).json({ message: 'Please provide either a rating or a comment.' });
}

// Validate the rating if provided
if (rating && (isNaN(rating) || rating < 1 || rating > 5)) {
    return res.status(400).json({ message: 'Rating must be a number between 1 and 5 if provided.' });
}



    const newReview={
      user:id,
      // comment,
      // rating:Number(rating),
    };

    if (rating) {
      newReview.rating = Number(rating);
  }

  // Add comment to the review if provided
  if (comment && comment.trim()) {
      newReview.comment = comment.trim();
  }

    product.reviews.push(newReview);

    // product.calculateAverageRating();

    if (rating) {
      product.calculateAverageRating();
  }

    await product.save();

    res.status(201).json({message:'Review added'});

  }catch(error){
    res.status(500).json({message:error.message});
  }

}

exports.getReviews=async(req,res)=>{
  const productId=req.params.id;

  try{
    const product=await Product.findById(productId).populate('reviews.user','name');
    if(!product){
      return res.status(404).json({message:'Product not found'});

    }
    res.json(product.reviews);
  }catch(error){
    res.status(500).json({message:error.message});
  }
}

exports.getAllReviews=async(req,res)=>{
  try{

    const products=await Product.find().populate('reviews.user','name');

    // console.log('products',products)

    const allReviews=products
    .filter(product=>product.reviews.length>0)
   
    
    .reduce((reviews,product)=>{

      const productReviewsandProductId=product.reviews.map((review)=>({
        ...review.toObject(),
        productId:product._id,
        productName:product.title,
        productSlug:product.slug
      }))
      return [...reviews,...productReviewsandProductId];

    },[]).sort((a,b)=>new Date (b.createdAt)-new Date(a.createdAt))

    console.log('allReviews',allReviews)

 res.json(allReviews);

  }catch(error){
    res.status(500).json({message:error.message});

  }
};

exports.deleteReview=async(req,res)=>{
  const {productId,reviewId}=req.params;
  console.log('productId,reviewId',productId,reviewId)

  try{

    const product=await Product.findById(productId);

    if(!product){
      return res.status(404).json({message:'Product not found'});
    }

    product.reviews=product.reviews.filter((review)=>review._id.toString()!==reviewId);


    if(product.reviews.length>0){
      product.calculateAverageRating()
    }else{
      product.averageRating=0;
    }

    await product.save();

    res.status(200).json({message:'Review deleted successfully'});

  }catch(error){
    res.status(500).json({message:error.message});
  }
}

exports.getReviewsByUser=async(req,res)=>{
  const userId=req.params.userId;

  console.log('userId',userId)

  try{

    // const products=await Product.find().populate('reviews.user','name');
    const products=await Product.find({'reviews.user':userId}).populate('reviews.user','name email');
    console.log(' Fetched Products with Reviews',products)

    // const userReviews=products.reduce((reviews,product)=>{
    //   const userSpecificReviews=product.reviews.filter((review)=>review.user.toString()===userId);
    //   return [...reviews,...userSpecificReviews];

    // },[]

    // ).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));

    const userReviews = products.reduce((reviews, product) => {
      // Log the reviews for each product
      console.log(`Product ID: ${product._id}, Reviews:`, product.reviews);

      // Filter reviews where the user matches the userId (ObjectId comparison)
      const userSpecificReviews = product.reviews.filter((review) => {
        console.log(`Review User ID: ${review.user}, Checking against: ${userId}`);
        return review.user._id.toString() === userId;
      }).map(review=>({
        product:{
          id:product._id,
          title:product.title,
          slug: product.slug,
          price: product.price,
          images: product.images,

        },
        review:{
          comment: review.comment,
          rating: review.rating,
          createdAt: review.createdAt,
        },
        user:{
          id:review.user._id,
          name:review.user.name,
          email:review.user.email,
        }
      }))

      return [...reviews, ...userSpecificReviews];
    }, []).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    console.log('userReviews',userReviews)

    if(userReviews.length===0){
      return res.status(404).json({ message: 'No reviews found for this user' });
    }

    res.json(userReviews);

  }catch(error){
    res.status(500).json({message:error.message});

  }
}


exports.getBestSellingProducts=async (req,res)=>{
  try{

    const bestSellingProducts=await Product.find()
    .sort({sold:-1})
    .populate('category','name')
    .limit(10)
    .exec();

    console.log('bestselling',bestSellingProducts)
    

    res.json(bestSellingProducts);

  }catch(error){
    console.error("Error fetching best-selling products:", error);
    throw new Error('Failed to fetch best-selling products');
    res.status(500).json({message:error.message});

  }
}
