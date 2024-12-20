const multer=require('multer')

const path=require('path')
const fs=require('fs')

const uploadDirectory=path.join(__dirname,'../media');
if(!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory,{recursive:true});
}

const fileTypes=/jpeg|jpg|png|gif/;

const fileFilter=(req,file,cb)=>{
    const extname=fileTypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype=fileTypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    }else{
        cb(new Error('Only image files are allowed!'),false);
    }
}



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadDirectory);
    },
    filename:(req,file,cb)=>{
       cb(null,'image-' + Date.now() +path.extname(file.originalname)) ;
    },
});

const upload=multer({
    storage:storage,
    // fileFilter:(req,file,cb)=>{
    //     const fileTypes=/jpeg|jpg|pmg/;
    //     const extname=fileTypes.text(path.extname(file.originalname).toLowerCase());
    //     const mimetype=fileTypes.text(file.mimetype);

    //     if(extname &&mimetype){
    //         return cb(null,true);
    //     }else{
    //         cb('Error: Images Only!');
    //     }
    // }
    fileFilter:fileFilter,
    limits:{fileSize:1024 * 1024 *5},
});

module.exports=upload;