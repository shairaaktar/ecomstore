// const Order=require('../models/order');


// exports.orders=async(req,res)=>{
//     let allOrders=await Order.find({})
//     .sort('-createdAt')
//     .exec()

//     res.json(allOrders)
// }
const Order = require('../models/order');
const mongoose=require('mongoose');

// exports.orders = async (req, res) => {
//     try {
//         let allOrders = await Order.find({})
//             .sort('-createdAt')
//             .exec();

//         res.json(allOrders);
//     } catch (err) {
//         res.status(500).json({ error: 'An error occurred while fetching orders' });
//     }
// };

exports.orders=async(req,res)=>{
    const { email,page,limit } = req.body;
    console.log('page,limit',page,limit)

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // try {
    //     const orders = await Order.find({ email });
    //     res.status(200).json(orders);
    // } catch (error) {
    //     console.error('Error fetching orders:', error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }

    try {

        const currentPage=page||1;
        const perPage=10;

         let allOrders = await Order.find({})
         .skip((currentPage-1)*perPage)
        .sort('-createdAt')
        .limit(perPage)
        .exec();
        
                 res.json(allOrders);
             } catch (err) {
                 res.status(500).json({ error: 'An error occurred while fetching orders' });
             }

}

exports.orderStatus=async (req,res)=>{
    const {orderId,orderStatus}=req.body;

    let updated=await Order.findByIdAndUpdate(
        orderId,
        {orderStatus},
        {new: true}

    ).exec()
    res.json(updated);
}

// exports.deleteOrders=async(req,res)=>{
//     const {id}=req.params
//     console.log('id',id)

//     try{
//         const deleted=await Order.findByIdAndDelete({
//             slug:req.params.slug,

//         }).exec();
//         res.json(deleted)

//     }catch(err){
//         console.log(err);
//         return res.status(400).send('Order deletion failed');

//     }
// }

exports.deleteOrders = async (req, res) => {
    const { id } = req.params;
    const {email}=req.body
  

    console.log('id',id)
    console.log('reqBody--->',req.body)

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ err: "Invalid order ID" });
    }

    try {
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ err: "Order not found" });
        }
        res.json(deletedOrder);
    } catch (error) {
        console.error("Error deleting order", error);
        res.status(500).json({ err: "Server error" });
    }
};

exports.OrdersCount=async(req,res)=>{
    
    try{
        const count=await Order.countDocuments({});
        console.log('ordersCount',count)
        res.json({totalOrders:count});

    }catch(err){
        console.error('Error fetching order count:',err);
        res.status(500).json({message:'Server error'});

    }
}