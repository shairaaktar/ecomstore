const express=require('express')
const router=express.Router();

const {authCheck,adminCheck}=require('../middlewares/auth')

const {orders,orderStatus,deleteOrders,OrdersCount}=require('../controllers/admin');


router.post('/admin/orders',authCheck,adminCheck,orders)
router.post('/admin/order-status',authCheck,adminCheck,orderStatus);
router.post('/admin/orders/:id',authCheck,adminCheck,deleteOrders);
router.get('/admin/orders/count',authCheck,OrdersCount)

module.exports=router;