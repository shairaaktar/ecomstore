const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema


const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    comment:{
        type:String,
      
    },

    rating:{
        type:Number,
       
        min:1,
        max:5,
    }


},{timestamps:true})


const sizeChartSchema=new mongoose.Schema({
    columns:{
        type:[String],
        required:true,

    },
    rows:[{
        type:Map,
        of:String,

    }],

},{_id:false});




const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        text:true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
   
    description:{
        type:String
    },
    highlights:{
        type:[String],
        default:[],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    category:{
        type:ObjectId,
        ref:"Category",
        default:null
        
    },
    quantity:{
        type:Number,
        default:0
    },
    sold:{
        type:Number,
        default:0
    },
    images:{
        type:Array,
        required:true,
        default:[]
    },
    price:{
        type:Number,
        required:true,
    },
    discountPrice:{
        type:Number,
        default:null,
        validate:{
            validator:function(value){
                return value===null || value <this.price;
            },
            message:'Discount price must be lowe than the regular price',
        },

    },
    discountPercentage:{
        type:Number,
        default:null,

    },
    discountStartDate:{
        type:Date,
        default:null,

    },
    discountEndDate:{
        type:Date,
        default:null,

    },
    shipping:{
        type:Boolean,
        default:false,

    },
    colors:{
        type:[String],
        default:null
        
    },
    sizes:{
        type:[String],
       
    },
    publishedAt:{
        type:Date,
        default:Date.now,
    },
    sizeChart:sizeChartSchema,
    reviews:[reviewSchema],
    averageRating:{
        type:Number,
        default:0,
    }


},{timestamps:true});

productSchema.methods.calculateAverageRating=function(){
    if(this.reviews.length===0){
        this.averageRating=0;
    }else{
        const sum=this.reviews.reduce((total,review)=>total+review.rating,0);
        this.averageRating=sum/this.reviews.length;
    }
}


const Product=mongoose.model('Product',productSchema);


module.exports=Product;