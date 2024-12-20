const mongoose=require('mongoose')

const parentcategorySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        
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
      
        default:[]
    }
},{timestamps:true});

module.exports=mongoose.model('ParentCategory',parentcategorySchema);