// const express=require('express');
// const  router=express.Router();
// const {authCheck}=require('../middlewares/auth')
// const {getUserOrders,createOrder,createPaymentIntent,confirmOrder}=require('../controllers/order')
// // const {createOrderWithPaymentIntent}=require('../controllers/order')

// router.post('/orders',authCheck,createOrder)
// // router.post('/create-order',authCheck,createOrderWithCard)
// router.get('/user/orders',authCheck,getUserOrders);
// router.post('/create-payment-intent',authCheck,createPaymentIntent);
// router.post('/orders/confirm',authCheck,confirmOrder);
// // router.post('/create-order-with-payment-intent', authCheck, createOrderWithPaymentIntent);

// module.exports=router;

// routes/order.js

const express = require('express');
const router = express.Router();
const { createOrder ,
    getUserOrders,
    createOrderWithCard,
    updateOrderPaymentStatus,
    OrdersCount,
    getUserOrdersById,
    orderDetailsByOrderNumber,
    getDailyOrdersForCurrentMonth,
    getOrdersForToday,
    getSalesByCategory,
    getTotalSalesForCurrentMonth,
    getOrdersByDate,
    getOrdersNumberByDate
    } = require('../controllers/order');
const { authCheck } = require('../middlewares/auth');

router.post('/orders',authCheck, createOrder);
router.post('/card-orders',authCheck,createOrderWithCard);
router.post('/orders/update-payment-status', authCheck, updateOrderPaymentStatus);
 router.post('/user/orders',authCheck,getUserOrders);
 router.get('/user/orders/count',authCheck,OrdersCount)
 router.get('/user/:id/orders',getUserOrdersById);
 router.get('/orders/:orderId',orderDetailsByOrderNumber)
 router.post('/daily-sales',getOrdersForToday)
 router.post('/monthly-sales',getDailyOrdersForCurrentMonth)
 router.get('/sales-by-category',getSalesByCategory)
 router.post('/total-sales-month',authCheck,getTotalSalesForCurrentMonth)
 router.post('/todays-orders',authCheck,getOrdersByDate)
 router.post('/todays-orders-number',authCheck,getOrdersNumberByDate)

// router.post('/confirm-payment', confirmOrderPayment);

module.exports = router;
