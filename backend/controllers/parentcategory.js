const ParentCategory=require('../models/ParentCategory')
const Product=require('../models/product');
const slugify=require('slugify');

exports.create=async(req,res)=>{
    // const slug = slugify(req.body.name)

   
    const {parentcategoryData}=req.body
    console.log("name",parentcategoryData)
   
    try{
        const {name,slug,description,images}=parentcategoryData
        // const slug = slugify(name, { lower: true });

        const parentcategory=await new ParentCategory({name, slug,description,images}).save();
        console.log('ParentCategory',parentcategory)
        res.json(parentcategory);

    }catch(err){
        console.log(err)
        res.status(400).send('ParentCategory Creation Failed');

    }
};


exports.list=async (req,res)=>{
  
    const parentcategoryList=await ParentCategory.find({}).sort({createAt:-1}).exec();
    console.log('categoryList',parentcategoryList)
    res.json(parentcategoryList);
}

// exports.remove=async(req,res)=>{
//     try{
//         const deleted=await Category.findOneAndDelete({slug:req.params.slug});
//         res.json(deleted);

//     }catch(err){
//         console.log(err)
//         res.status(400).send('Create delete failed')

//     }
// }

// exports.read=async(req,res)=>{
//     const {page=1,limit=10}=req.query
//     console.log('page',page)
//     let category=await Category.findOne({slug:req.params.slug}).exec();

//     const skip = (page - 1) * limit;


//     const products=await Product.find({category})
//     .populate('category')
//     .skip(skip)
//       .limit(parseInt(limit))
//     .exec()

//     const productCount=products.length;
//     const totalProducts = await Product.countDocuments({ category }).exec();


//     res.json({
//         category,
//         products,
//         productCount,
//        totalProducts, 
//       currentPage: parseInt(page), 
//       totalPages: Math.ceil(totalProducts / limit),
//     });

// }

// exports.update=async(req,res)=>{
//     const {name}=req.body;
//     try{
//         const updated=await Category.findOneAndUpdate(
//             {slug:req.params.slug},
//             {name,slug:slugify(name)},
//             {new:true}
//         );
//         res.json(updated)

//     }catch(err){
//         res.status(400).send('category update failed');

//     }
// }