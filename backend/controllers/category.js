const Category=require('../models/category');
const Product=require('../models/product');
const slugify=require('slugify');

exports.create=async(req,res)=>{
    // const slug = slugify(req.body.name)

   
    const {categoryData}=req.body
    console.log("name",categoryData)
   
    try{
        const {name,slug,description,images}=categoryData
        // const slug = slugify(name, { lower: true });

        const category=await new Category({name, slug,description,images}).save();
        console.log('catgeory',category)
        res.json(category);

    }catch(err){
        console.log(err)
        res.status(400).send('category Creation Failed');

    }
};


// exports.list=async (req,res)=>{
  
//     const categoryList=await Category.find({}).sort({createAt:-1}).exec();
//     console.log('categoryList',categoryList)
//     res.json(categoryList);
// }


exports.list = async (req, res) => {
    try {
        const categories = await Category.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "category",
                    as: "products",
                },
            },
            {
                $project: {
                    name: 1,
                    slug: 1,
                    description: 1,
                    images: 1,
                    productCount: { $size: "$products" }, // Count of products in each category
                },
            },
            { $sort: { createdAt: -1 } },
        ]);

        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories with product counts:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
};

exports.remove=async(req,res)=>{
    try{
        const deleted=await Category.findOneAndDelete({slug:req.params.slug});
        res.json(deleted);

    }catch(err){
        console.log(err)
        res.status(400).send('Create delete failed')

    }
}

exports.read=async(req,res)=>{
    const {page=1,limit=10}=req.query
    console.log('page',page)
    let category=await Category.findOne({slug:req.params.slug}).exec();

    const skip = (page - 1) * limit;


    const products=await Product.find({category})
    .populate('category')
    .skip(skip)
      .limit(parseInt(limit))
    .exec()

    const productCount=products.length;
    const totalProducts = await Product.countDocuments({ category }).exec();


    res.json({
        category,
        products,
        productCount,
       totalProducts, 
      currentPage: parseInt(page), 
      totalPages: Math.ceil(totalProducts / limit),
    });

}

exports.update=async(req,res)=>{
    const {name}=req.body;
    try{
        const updated=await Category.findOneAndUpdate(
            {slug:req.params.slug},
            {name,slug:slugify(name)},
            {new:true}
        );
        res.json(updated)

    }catch(err){
        res.status(400).send('category update failed');

    }
}