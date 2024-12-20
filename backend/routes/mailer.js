// const express=require('express');
// const router=express.Router();

// const {mailer}=require('../controllers/mailer')

// router.post('/send-offer-notification',mailer)

// module.exports=router;

const express = require('express');
const router = express.Router();

const { mailer } = require('../controllers/mailer'); // Correctly import the mailer function

router.post('/send-offer-notification', mailer); // Use the mailer function as a callback

module.exports = router;
