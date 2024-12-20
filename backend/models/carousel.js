const mongoose=require('mongoose');

const carouselSchema=new mongoose.Schema({
    imageUrl:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
});


const Carousel=mongoose.model('Carousel',carouselSchema);
module.exports=Carousel

