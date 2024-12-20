// const User=require('../models/user');

// exports.createOrUpdateUser=async(req,res)=>{
//     const {name ,email}=req.user;

//     const user=await UserActivation.findOneAndUpdate({email:email},{name:email.split('@')[0]},{new:true})

//     if(user){
//         console.log('Updated user',user)
//         res.json(user)
        
//     }else{

//         const newUser=await new User({
//             email,
//             name:email.split('@')[0],
//         }).save();
//         console.log('Created',newUser);
//         res.json(newUser);
//     }

// }

// exports.currentUser=async(req,res)=>{


// }


const Product = require('../models/product');
const User = require('../models/user');
const Order=require('../models/order')

exports.createOrUpdateUser = async (req, res) => {
    const { name, email } = req.user;

    try {
        const user = await User.findOneAndUpdate(
            { email: email },
            { name: email.split('@')[0] },
            { new: true }
        );

        if (user) {
            console.log('Updated user', user);
            res.json(user);
        } else {
            const newUser = await new User({
                email,
                name: email.split('@')[0],
            }).save();
            console.log('Created', newUser);
            res.json(newUser);
        }
    } catch (error) {
        console.error('Error in createOrUpdateUser:', error);
        res.status(500).send('Server error');
    }
};

exports.currentUser = async (req, res) => {
    const user=await User.findOne({email:req.user.email}).exec()
    res.json(user)
   
};

exports.getAllUsers=async(req,res)=>{
   try{

    const users=await  User.find().select('name email role')

    console.log("user",users);

    const usersWithDetails=await Promise.all(
        users.map(async(user)=>{
            const userOrders=await Order.find({user:user._id})
            .select('orderTotal orderStatus createdAt')
            .sort({createdAt:-1});

            // console.log('userOrders',userOrders)

            const lastOrderDate=userOrders.length>0 ?userOrders[0].createdAt:null;

            const userReviews=await Product.find({'reviews.user':user._id})
            .select('title reviews')
            .populate({
                path:'reviews',
                match:{user:user._id},
            });

            return {
                ...user.toObject(),
                orders:userOrders,
                lastOrderDate,
                reviews:userReviews
            }
        })
    )

    let total=await User.countDocuments().exec();

    res.status(200).json({users:usersWithDetails})

   }catch(error){


    console.error('Error retrieving products:',error);
    res.status(500).json({error:'Internal Server Error'});
   }


}

exports.usersCount=async(req,res)=>{
    try{
        const count=await User.countDocuments({})
        res.json({totalUsers:count});

    }catch(error){
        console.error('Error fetching order count:',err);
        res.status(500).json({message:'Server error'});
    }
}


exports.getNewCustomersByMonth=async(req,res)=>{
    try{

        const startofMonth=new Date(new Date().setDate(1));
        const startofNextMonth=new Date(new Date().setMonth(startofMonth.getMonth()+1,1));


        const newCustomers=await User.find({
            createdAt:{
                $gte:startofMonth,
                $lt:startofNextMonth
            }

        }).sort({createdAt:-1})

        res.json(newCustomers);

    }catch(error){
        console.error('Error fetching new customers:', error);
        res.status(500).json({ error: 'Failed to fetch new customers for the current month' });
    }
}