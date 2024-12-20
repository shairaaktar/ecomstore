// routes/payment.js

// const express = require('express');
// const router = express.Router();
// const { createPaymentIntent } = require('../controllers/stripe');

// router.post('/:orderId/payment-intent', createPaymentIntent);

// module.exports = router

const express = require('express');
const { createPaymentIntent } = require('../controllers/stripe');
const { authCheck } = require('../middlewares/auth');


const router = express.Router();

router.post('/create-payment-intent', authCheck, createPaymentIntent);

module.exports = router;

