// const express=require('express');

// const router=express.Router();

// const {createOrUpdateUser, currentUser}=require('../controllers/user')
// const authCheck=require('../middlewares/auth')

// router.post('/create-or-update-user',authCheck,createOrUpdateUser);
// // router.post('/current-user',currentUser);

// module.exports=router;

const express = require('express');
const router = express.Router();
const { createOrUpdateUser, currentUser,getAllUsers, usersCount,getNewCustomersByMonth } = require('../controllers/user');
const {authCheck, adminCheck} = require('../middlewares/auth');

// Ensure authCheck is a function
router.post('/create-or-update-user', authCheck, createOrUpdateUser);
router.post('/current-user', authCheck, currentUser);
router.post('/all-users',getAllUsers,authCheck,adminCheck)
router.get('/admin/users/count',usersCount)
router.get('/new-customers',getNewCustomersByMonth)

module.exports = router;

