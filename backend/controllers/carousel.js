const { fstat } = require('fs');
const Carousel=require('../models/carousel');
const path=require('path');
const fs=require('fs')



exports.getCarouselImages=async(req,res)=>{
    try{
        const images=await Carousel.find({});
        res.json(images);

    }catch(error){
        res.status(500).json({error:'Failed to fetch images'})

    }
};

// exports.uploadCarouselImages=async (req,res)=>{
//     try{
//         const {imageUrl}=req.body;
//         const newImage=new Carousel({imageUrl});
//         await newImage.save();
//         res.status(201).json(newImage);

//     }catch(error){
//         res.status(500).json({error:'Failed to upload image'})
//     }
// };
exports.uploadCarouselImages=async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:"no file uploaded"});

        }
        const imageUrl=path.join('media',req.file.filename);
        const newImage=new Carousel({imageUrl});
        await newImage.save();

        res.status(201).json(newImage);
    }catch(error){
        res.status(500).json({error:'Failed to upload image'});
    }
};


exports.deleteCarouselImage=async(req,res)=>{
    const {id}=req.params;

    try{

        const image=await Carousel.findByIdAndDelete(id);
        if(!image){
            return res.status(404).json({message:"Image not found"});
        }

        if(image.imageUrl){
            // const imagePath=image.imageUrl.startsWith('media/') ? image.imageUrl.replace('media/',''):image.imageUrl;
            // // const filePath=path.join(__dirname,'../media',imagePath);

           
            // if (image.imageUrl.startsWith('media/')) {
            //     filePath = path.join(__dirname, '../', image.imageUrl);
            // } else {
            //     filePath = path.join(__dirname, '../media', image.imageUrl);
            // }

            const filePath = path.join(__dirname, '../', image.imageUrl); 
            
            console.log('Attempting to delete file at:', filePath);




          

            if(fs.existsSync(filePath)){
                fs.unlink(filePath,(err)=>{
                    if(err){
                        console.error('File deletion error:', err);
                        return res.status(500).json({ message: 'Error deleting file' });
                    }
                     return res.status(200).json({ message: 'Image and file deleted successfully' });
                })
            }else{
                console.error(`File not found at: ${filePath}`);
                return res.status(404).json({ message: 'File not found' });
            }
        }else{
             return res.status(200).json({ message: 'Image deleted successfully, no file found to delete' });
        }


        // await Carousel.findByIdAndDelete(req.params.id);
        // res.status(200).json({message:"Image deleted successfully"});

        // const filePath=path.join(__dirname,image.imageUrl.replace(/\\/g,'/'));
        // const filePath = path.join(__dirname, '../media', image.imageUrl.replace(/\\/g, '/'));
        // console.log('Attempting to delete file at:', filePath);

    //     const imagePath = image.imageUrl.startsWith('media/') ? image.imageUrl.replace('media/', '') : image.imageUrl;
    //     const filePath = path.join(__dirname, '../media', imagePath);
    //     console.log('Attempting to delete file at:', filePath);


    //     if (!fs.existsSync(filePath)) {
    //         console.error(`File not found at: ${filePath}`);
    //         return res.status(404).json({ message: 'File not found' });
    //     }


    //     fs.unlink(filePath, async(err)=>{
    //         if(err){
    //             console.error('File deletion error:', err);
    //             return res.status(500).json({message:'Error deleting file'});
    //         }

    //       await   Carousel.deleteOne({_id:id},(err)=>{
    //             if (err) {
    //                 return res.status(500).json({ message: 'Error deleting image record' });
    //               }
    //               res.status(200).json({ message: 'Image deleted successfully' });
    //         })
    //     })

     }catch(error){
        console.error('Error deleting image:', error);
        res.status(500).json({ error: 'Failed to delete image' });

     }


};