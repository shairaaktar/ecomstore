const express = require('express');
const router = express.Router();
const { createOrUpdateAccountInfo,currentUser } = require('../controllers/accountdetails');
const {authCheck}=require('../middlewares/auth')


// Ensure authCheck is a function
router.post('/create-or-update-account',authCheck, createOrUpdateAccountInfo);
router.get('/get-account-details',authCheck,currentUser)


module.exports = router;