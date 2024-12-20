// const admin=require('../firebase')

// exports.authCheck=async(req,res,next)=>{
//     try{
//         const firebaseUser=await admin
//         .auth()
//         .verifyIdToken(req.headers.authtoken);
//         console.log('Firebase User In Authentication',firebaseUser)
//         req.user=firebaseUser;
//         console.log('User',req.user)
//         next();

//     }catch(err){
//         res.status(401).json({
//             err:"Invalid or expired token",
//     })

//     }
// }

// const admin = require('firebase-admin');
// const serviceAccount = require('../config/fbServiceAccountKey.json.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const authCheck = async (req, res, next) => {
//     try {
//         const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);
//         req.user = firebaseUser;
//         next();
//     } catch (error) {
//         res.status(401).json({
//             err: 'Invalid or expired token',
//         });
//     }
// };

// module.exports = authCheck;
const admin=require('../firebase')
const User=require("../models/user")

// exports.authCheck= async(req,res,next)=>{
   

//      try{
//          const firebaseUser=await  admin
//          .auth()
//          .verifyIdToken(req.headers.authtoken);
//           console.log('Firebase User In Authentication ',firebaseUser)
//          req.user=firebaseUser;
//           console.log('User',req.user)
//          next();

//      }catch(err){
//          res.status(401).json({
//              err:"Invalid or expired token",
//          })
//      }
   
// }

exports.authCheck = async (req, res, next) => {
    try {
        const token = req.headers.authtoken;
        if (!token) {
            return res.status(401).json({ err: "No token provided" });
        }

        const firebaseUser = await admin.auth().verifyIdToken(token);
        console.log('Firebase User In Authentication:', firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (err) {
        console.error('Error in authCheck:', err);
        res.status(401).json({ err: "Invalid or expired token" });
    }
};

exports.adminCheck=async (req,res,next)=>{
     

    console.log('Req User',req.body)
     const {email}=req.body;
    // const {email}=req.user
    console.log('email',email)


    

    const adminUser=await User.findOne({email}).exec()


    console.log('adminUser-->',adminUser)

    if(adminUser.role !='admin'){
        res.status(403).json({
            err:'admin resource Access denied'

        })
    }else{
        next()
    }

    
}