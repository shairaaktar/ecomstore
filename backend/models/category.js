const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema


const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        
    },
    ParentCatgeory:{
        type:ObjectId,
        ref:"ParentCategory",
        default:null
        
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true,

    },
    description:{
        type:String
    },
    images:{
        type:Array,
        required:true,
        default:[]
    }
},{timestamps:true});

module.exports=mongoose.model('Category',categorySchema);