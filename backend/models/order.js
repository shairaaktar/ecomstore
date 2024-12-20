const mongoose=require('mongoose');
const Product=require('../models/product')

const orderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true

    },
    chargeTotal:{
        type:Number,
        require:true
    },
    orderTotal:{
        type:String,
        required:true
    },
    cartItems:[{
       productID:{type:String,required:true},
       title:{type:String,required:true},
       company:{type:String},
       price:{type:Number,required:true},
       productColor:{type:String},
       productSize:{type:Number},
       image:{type:String,required:true},
       amount:{type:Number,required:true},
       cartID:{type:String,required:true},


    }],
    numItemsInCart:{
        type:Number,
        required:true
    },
    paymentIntent:{},
    paymentIntentId:{type:String},
   

    orderStatus:{
        type:String,
        default:'Not Processed',
        enum:[
            "Not Processed",
            "Cash On Delivery",
            "processing",
            "Dispatched",
            "Cancelled",
            "Completed",

        ],

    },
    user:{
        type:String,
        required:true
    },
    orderNumber: {  // Added order number field
        type: String,
        required: true,
        default: () => generateOrderNumber(),
        unique: true,
      },

},{timestamps:true});

// orderSchema.pre('save', function (next) {
//     if (!this.orderNumber) {
//       this.orderNumber = `ORD-${uuidv4()}`; // Generate a unique order number using uuidv4
//     }
//     next();
//   });

function generateOrderNumber() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }

const Order=mongoose.model('Order',orderSchema);

module.exports=Order;
