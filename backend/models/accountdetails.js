const mongoose=require('mongoose');

const accountdetailsSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true,

    },
    name:{
        type:String,
       

    },
    address:{
        type:String, 

    },
    number:{
        type:Number,
       

    }
},{timestamps:true});

module.exports=mongoose.model('Account',accountdetailsSchema);