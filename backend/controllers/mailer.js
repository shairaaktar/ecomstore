// const nodemailer=require('nodemailer')
// const User=require('../models/user')





// exports.sendNotification=async(req,res)=>{

//     const transporter=nodemailer.createTransport({
//         service:'Gmail',
//         auth:{
//             user: process.env.EMAIL_USER, 
//             pass: process.env.EMAIL_PASS, 
//         }
//     })
  
//     const sendNotificationEmail=(to,subject,text)=>{
//         const mailOptions={
//             from: process.env.EMAIL_USER,
//             to: to,
//             subject: subject,
//             text: text,
    
//         }
//         transporter.sendMail(mailOptions,(error,info)=>{
//             if (error) {
//                 console.log(`Error: ${error}`);
//             } else {
//                 console.log(`Email sent: ${info.response}`);
//             }
//         })
//     }

    
//     try{

//         const {subject,message}=req.body;

//         const customers=await User.find({});

//         customers.forEach((customer)=>{
//             sendNotificationEmail(customer.email,subject,message);

//         });
//         res.status(200).json({ success: true, message: 'Notification emails sent successfully!' });   

//     }catch(error){
//         res.status(500).json({ success: false, message: error.message });
//     }

// }

// controllers/mailer.js
const nodemailer = require('nodemailer');

// Set up the transporter (make sure to add your email service and credentials)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to send the email
const sendNotificationEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
}

// The controller function that will be used in the route
const mailer = (req, res) => {
    const { subject, message } = req.body;

    // Assuming you have a list of customers' emails stored in your database
    const customers = [
        'customer1@example.com',
        'customer2@example.com',
        // Add more emails here
    ];

    customers.forEach((customerEmail) => {
        sendNotificationEmail(customerEmail, subject, message);
    });

    res.status(200).json({ success: true, message: 'Notification emails sent successfully!' });
};

module.exports = { mailer };
