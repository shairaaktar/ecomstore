const mongoose=require('mongoose');


const userfeedbackSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    comment:{
        type:String,
        
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    }
    

},{timestamps:true})

const Feedback=mongoose.model('Feedback',userfeedbackSchema);
module.exports=Feedback;