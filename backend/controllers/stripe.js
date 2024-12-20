// controllers/payment.js

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.createPaymentIntent = async (req, res) => {
//     const { orderId } = req.body;

//     try {
//         // Fetch the order details from the database using orderId
//         const order = await Order.findById(orderId);
//         if (!order) {
//             return res.status(404).json({ error: 'Order not found' });
//         }

//         // Create a PaymentIntent with the order amount and currency
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: Math.round(order.totalAmount * 100), // Convert to cents
//             currency: 'usd',
//             metadata: { orderId: order._id.toString() },
//         });

//         res.status(200).json({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//         console.error('Error creating payment intent:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

const stripe = require('stripe')(process.env.STRIPE_SECRET);

// exports.createPaymentIntent = async (req, res) => {
//     const { orderTotal } = req.body;

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: Math.round(orderTotal * 100), // Stripe expects the amount in cents
//             currency: 'usd',
//         });

//         res.status(200).json({
//             clientSecret: paymentIntent.client_secret,
//             cartTotal: orderTotal,
//             payable: orderTotal,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Failed to create payment intent',
//             error: error.message,
//         });
//     }
// };
exports.createPaymentIntent= async (req, res) => {
    const { orderTotal } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(orderTotal * 100), // Stripe expects the amount in cents
            currency: 'usd',
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            cartTotal: orderTotal,
            payable: orderTotal,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to create payment intent',
            error: error.message,
        });
    }
}
