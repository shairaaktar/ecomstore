const express=require('express')

const Feedback=require("../models/userfeedback");
const {authCheck} = require('../middlewares/auth');

const router=express.Router();

router.post('/:id/feedback',authCheck)
router.get('/:id/feedbacks',authCheck)

module.exports=router;