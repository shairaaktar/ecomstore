const Order=require('../models/order')
const User=require('../models/user')
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Product=require('../models/product')
const { v4: uuidv4 } = require('uuid');

// exports.createOrderWithPaymentIntent = async (req, res) => {
//     const { paymentIntentId, orderDetails } = req.body;
//     const user = await User.findOne({ email: req.user.email }).exec();

//     if (!user) {
//         return res.status(400).json({ error: 'User not found' });
//     }

//     try {
//         // Confirm the payment intent
//         const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);

//         if (paymentIntent.status !== 'succeeded') {
//             return res.status(400).json({ error: 'Payment not successful' });
//         }

//         // Create the order in the database
//         const order = new Order({
//             user: user._id,
//             items: orderDetails.items,
//             totalAmount: orderDetails.totalAmount,
//             paymentIntentId: paymentIntent.id,
//             paymentStatus: paymentIntent.status,
//         });

//         await order.save();
//         res.status(201).json({ message: 'Order created successfully', order });

//     } catch (error) {
//         console.error('Error creating order with payment intent:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// controllers/orderController.js


// exports.createOrder= async (req, res) => {
//     const { items, totalAmount } = req.body;
//     const user = await User.findOne({ email: req.user.email }).exec();

//     if (!user) {
//         return res.status(400).json({ error: 'User not found' });
//     }

//     try {
//         // Create PaymentIntent
//         const amountInCents = Math.round(totalAmount * 100);
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amountInCents,
//             currency: 'usd',
//         });

//         // Create Order
//         const order = new Order({
//             user: user._id,
//             items,
//             totalAmount,
//             paymentIntentId: paymentIntent.id,
//         });

//         await order.save();
//         res.status(201).json({ message: 'Order created successfully',orderId:order._id, order });

//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// exports.createPaymentIntent = async (req, res) => {
//     const { orderId } = req.body;
//     const user = await User.findOne({ email: req.user.email }).exec();
//     const order = await Order.findById(orderId).exec();

//     if (!user || !order) {
//         return res.status(400).json({ error: 'User or Order not found' });
//     }

//     try {
//         const paymentIntent = await stripe.paymentIntents.retrieve(order.paymentIntentId);
//         res.status(200).json({ clientSecret: paymentIntent.client_secret });

//     } catch (error) {
//         console.error('Error retrieving payment intent:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// controllers/orderController.j
exports.createPaymentIntent = async (req, res) => {
    const { orderId } = req.body;
    const order = await Order.findById(orderId).exec();
  
    if (!order) {
      return res.status(400).json({ error: 'Order not found' });
    }
  
    try {
      const amountInCents = Math.round(order.totalAmount * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
      });
  
      order.paymentIntentId = paymentIntent.id;
      await order.save();
  
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

 // Assuming the Order model is in the ../models/Order path

 async function generateUniqueOrderNumber() {
    let orderNumber;
    let isUnique = false;
  
    while (!isUnique) {
      orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random 5-10 character alphanumeric string
      const existingOrder = await Order.findOne({ orderNumber }); // Check if it already exists
      if (!existingOrder) {
        isUnique = true;
      }
    }
  
    return orderNumber;
  }

exports.createOrder = async (req, res) => {
    console.log('req.body---->',req.body);
    const { name, address,number, chargeTotal, orderTotal, cartItems, numItemsInCart, userId, paymentIntent } = req.body;

    console.log('Name, address,number, chargeTotal, orderTotal, cartItems, numItemsInCart:', name, address,number, chargeTotal, orderTotal, cartItems, numItemsInCart);
    console.log('UserId:', userId);
    // const orderNumber = `ORD-${uuidv4()}`;

    const orderNumber = await generateUniqueOrderNumber();

    const newOrder = new Order({
        user: userId,
        name,
        address,
        number,
        chargeTotal,
        orderTotal,
        cartItems,
        numItemsInCart,
        paymentIntent: paymentIntent || null, // Optional paymentIntent
        orderNumber
    });

    try {
        const savedOrder = await newOrder.save();
        await decrementProductQuantity(cartItems)
       
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

  // controllers/orderController.js
// exports.confirmOrder = async (req, res) => {
//     const { orderId, paymentIntentId } = req.body;
//     const order = await Order.findById(orderId).exec();
  
//     if (!order) {
//       return res.status(400).json({ error: 'Order not found' });
//     }
  
//     if (order.paymentIntentId !== paymentIntentId) {
//       return res.status(400).json({ error: 'Payment intent ID mismatch' });
//     }
  
//     try {
//       order.status = 'confirmed'; // Update order status as needed
//       await order.save();
  
//       res.status(200).json({ message: 'Order confirmed successfully' });
//     } catch (error) {
//       console.error('Error confirming order:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
  

//  exports.createOrder=async(req,res)=>{

//     //  const {paymentIntent}=req.body.stripeResponse;
   
//      const {name,address,chargeTotal,orderTotal,cartItems,numItemsInCart}=req.body;

//      console.log('Name','address','chargeTotal,ordertotal,cartItema,numItemsIncart',name,address,chargeTotal,orderTotal,cartItems,numItemsInCart)
//      const userId=req.body.userId;
//      console.log('UserId',userId)
//      const newOrder=new Order({
//          user:userId,
//          name,
//          address,
//          chargeTotal,
//          orderTotal,
//          cartItems,
//          numItemsInCart,
//          paymentIntent
       
//      });
//      try{
//          const savedOrder=await newOrder.save();
//          res.status(201).json(savedOrder);
//      }catch(error){
//          res.status(400).json({message:error.message})
//      }

//  }

 //exports.createOrder = async (req, res) => {
//   const { name, address, chargeTotal, orderTotal, cartItems, numItemsInCart, userId, paymentMethod } = req.body;
//   const user = await User.findOne({ _id: userId }).exec();

//   if (!user) {
//       return res.status(400).json({ error: 'User not found' });
//   }

//   try {
//       let order;

//       if (paymentMethod === 'Cash') {
//           // Create order directly for Cash payment
//           order = new Order({
//               // user: userId,
//               // items: cartItems,
//               // totalAmount: orderTotal,
//               user:userId,
//                       name,
//                       address,
//                       chargeTotal,
//                        orderTotal,
//                        cartItems,
//                        numItemsInCart,
//               paymentMethod,
//           });

//           await order.save();
//       } else if (paymentMethod === 'Card') {
//           // Create PaymentIntent with Stripe for Card payment
//           const paymentIntent = await stripe.paymentIntents.create({
//               amount: Math.round(orderTotal * 100), // Amount in cents
//               currency: 'usd',
             
//           });

//           // Create order with PaymentIntent ID
//           order = new Order({
//               // user: userId,
//               // items: cartItems,
//               // totalAmount: orderTotal,
//               user:userId,
//                       name,
//                       address,
//                       chargeTotal,
//                       orderTotal,
//                       cartItems,
//                        numItemsInCart,
//               paymentMethod,
//               paymentIntentId: paymentIntent.id,
//           });

//           await order.save();
//       }

//       res.status(201).json({ message: 'Order created successfully', order });
//   } catch (error) {
//       console.error('Error creating order:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// };
// // Endpoint to confirm payment for an order
// exports.confirmOrderPayment = async (req, res) => {
//   const { orderId, paymentIntentId } = req.body;

//   try {
//       // Find the order by orderId
//       const order = await Order.findById(orderId);

//       if (!order) {
//           return res.status(404).json({ error: 'Order not found' });
//       }

//       // Verify if the paymentIntentId matches the order's paymentIntentId
//       if (order.paymentIntentId !== paymentIntentId) {
//           return res.status(400).json({ error: 'Invalid paymentIntentId' });
//       }

//       // Update order status or perform any necessary actions
//       // Example: order.status = 'paid';
//       // Example: Send confirmation email, update inventory, etc.

//       // Respond with success
//       res.status(200).json({ message: 'Payment confirmed and order processed successfully', order });
//   } catch (error) {
//       console.error('Error confirming order payment:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// };

exports.createOrderWithCard = async (req, res) => {
    console.log('req.body------>',req.body)
  const { name, address,number, chargeTotal, orderTotal, cartItems, numItemsInCart, userId,email } = req.body.data;
  console.log('name ,address,number',name,address)
  
  try {
      // Create payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(orderTotal * 100), // Stripe expects the amount in cents
          currency: 'usd',
      });

      const orderNumber = await generateUniqueOrderNumber();

      // Create order in database
      const order = new Order({
          user: userId,
          name,
          address,
          number,
          chargeTotal,
          orderTotal,
          cartItems,
          numItemsInCart,
          paymentIntent,
          paymentIntentId: paymentIntent.id,
          orderNumber
         
      });

      const savedOrder = await order.save();

      await decrementProductQuantity(cartItems);

      res.status(201).json({
          message: 'Order created successfully!',
          order: savedOrder,
          clientSecret: paymentIntent.client_secret,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: 'Failed to create order',
          error: error.message,
      });
  }
};

// const decrementProductQuantity=async (products)=>{
//     const bulkOps=products.map(({productId,count})=>({
//       updateOne:{
//         filter:{_id:productId},
//         update:{$inc:{quantity:-count}},
//       }
      
//     }))
//     await Product.bulkWrite(bulkOps,{})
//   }

const decrementProductQuantity=async(cartItems)=>{
    try{
        for(let item of cartItems){
            const product=await Product.findById(item.productID);
            if(product){
                product.quantity -=item.amount;
                product.sold+=item.amount;

                if(product.quantity<0){
                    product.quantity=0;
                }
                await product.save();
            }
        }

    }catch(error){
        console.error('Error in decrementing product quantity',error);
        throw error;
    }
};


exports.getUserOrders= async(req,res)=>{
    const {page,limit}=req.body
    console.log('page,limit',page,limit)

    const currentPage=page||1;
    const perPage=10;
    
    let user=await User.findOne({email:req.user.email}).exec();
    console.log('order user information',user)

 

   let userOrders=await Order.find({user:user._id})
   .skip((currentPage-1)*perPage)
   .sort('-createdAt')
   .limit(perPage)
   .exec();

   console.log('UserOrders--->',userOrders)

   res.json(userOrders);

}
exports.getUserOrdersById= async(req,res)=>{

    const userId=req.params.id
    const {page,limit}=req.body
    console.log('page,limit',page,limit)

    const currentPage=page||1;
    const perPage=10;
    
    let user=await User.findOne({_id:userId}).exec();
    console.log('order user information',user)

 

   let userOrders=await Order.find({user:user._id})
   .skip((currentPage-1)*perPage)
   .sort('-createdAt')
   .limit(perPage)
   .exec();

   console.log('UserOrders--->',userOrders)

   res.json(userOrders);

}

exports.OrdersCount=async(req,res)=>{
    const {email}=req.user;
    let user=await User.findOne({email:email}).exec();
    console.log('user--->',user)

    try{
        const ordersCount=await Order.countDocuments({user:user._id});
        console.log('ordersCount-->',ordersCount)
        res.status(200).json({totalOrders:ordersCount});

    }catch(error){
        console.error('Error fetching orders count:',error);
        res.status(500).json({error:'Internal server error'});
    }

    
}

exports.updateOrderPaymentStatus = async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
      // Fetch the payment intent from Stripe to confirm the status
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

      if (paymentIntent.status === 'succeeded') {
          // Update the order status to 'Completed'
          await Order.findOneAndUpdate(
              { paymentIntentId },
              { paymentStatus: 'Completed' },
              { new: true }
          );
          res.status(200).json({ message: 'Payment successful and order updated.' });
      } else {
          res.status(400).json({ message: 'Payment not successful.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: 'Failed to update payment status',
          error: error.message,
      });
  }
};

exports.orderDetailsByOrderNumber= async(req,res)=>{
    try{
        const orderDetails=await Order.findOne({orderNumber:req.params.orderId});

        if(!orderDetails){
            return res.status(404).json({ message: "Order not found" });

        }

        res.status(200).json(orderDetails);

    }catch(err){
        res.status(500).json({ message: "Failed to fetch order details" });
    }

}


exports.getOrdersForToday=async(req,res)=>{

    try{

        const {date}=req.query;
        console.log('date',date)

        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD." });
        }


        const startOfDay=new Date(`${date}T00:00:00Z`);
        const endOfDay = new Date(`${date}T23:59:59Z`);

        console.log("startOfDay:", startOfDay);
        console.log("endOfDay:", endOfDay);
    
        // startOfDay.setHours(0,0,0,0);

        // const endOfDay=new Date();
        // endOfDay.setDate(23,59,59,999);


        // const orders=await Order.find({
        //     createdAt:{
        //         $gte:startOfDay,
        //         $lt:endOfDay,
        //     },
        //     orderStatus:"Completed",
        // }).populate("products.product","name price")
        // .populate("orderDetails");

        // const totalSale=orders.reduce((sum,order)=>sum+order.chargeTotal,0);

        const dailyOrders=await Order.aggregate([
            {
                $match:{
                    createdAt: {
                    $gte:startOfDay,
                    $lte:endOfDay,
                },
                orderStatus:"Completed"
            },
            },

            {
                $group:{
                    _id:null,
                    totalSales:{$sum:"$chargeTotal"},
                    orderCount:{$sum:1},

                }
            }
        ]);

        console.log("dailyOrders",dailyOrders);


        const result=dailyOrders.length>0
        ?{
            date:date,
            totalSales:dailyOrders[0].totalSales,
            orderCount:dailyOrders[0].orderCount,

        }
        :{date:date,totalSales:0,orderCount:0};

        res.status(200).json(result);

        // return {
        //     orders,totalSale
        // }
     
       

    }catch(error){
        console.error('Error fetching orders for today:', error);
    throw new Error('Could not fetch orders for today');
    }
}





// exports.getAverageDailySales=async(req,res)=>{
//     try{

//         const startDate=new Date()

//     }catch(error){
//         console.error('Error fetching average daily sales:', error);
//     throw new Error('Could not calculate average daily sales');
//     }
// }

// exports.getDailyOrdersForCurrentMonth=async(req,res)=>{

//     try{
//         const startOfMonth=new Date();
//        // console.log('startofmOnth',startOfMonth)
//         startOfMonth.setUTCDate(1);
//         startOfMonth.setUTCHours(0,0,0,0);
//         console.log('startofMonth',startOfMonth)

//         const endOfMonth=new Date(startOfMonth);
//         // console.log('endOfMonth',endOfMonth)
//         endOfMonth.setUTCMonth(startOfMonth.getUTCMonth()+1);
//         endOfMonth.setUTCDate(0);
//         endOfMonth.setUTCHours(23,59,59,999);
//         console.log('endofMonth',endOfMonth)


//         const dailyOrders=await Order.aggregate([{
//             $match:{
//                 createdAt:{
//                     $gte: startOfMonth, // Greater than or equal to the start of the current month
//             $lte: endOfMonth,
//                 }
//             }

//         },{
//             $project:{
//                 day: { $dayOfMonth: "$createdAt" }, // Extract the day from createdAt
//           chargeTotal: 1,
//             }
//         },
//         {
//             $group:{
//                 _id: "$day", // Group by the day of the month
//                 totalSales: { $sum: "$chargeTotal" }, // Sum of chargeTotal for each day
//                 orderCount: { $sum: 1 },
//             }
//         },
//         {
//             $sort:{
//                 _id:1
//             },
//         }
//     ]);

//     console.log('dailyOrders',dailyOrders)

//     const daysInMonth=[];

//     for(let  day=1; day<=endOfMonth.getDate(); day++){
//         daysInMonth.push({
//             day,
//             totalSales:0,
//             orderCount:0,
//         })
//     }

//     // const formattedResults = dailyOrders.map((order) => ({
//     //     day: order._id,
//     //     totalSales: order.totalSales,
//     //     orderCount: order.orderCount,
//     //   }));


//     const formattedResults=daysInMonth.map((dayObj)=>{
//         const match=dailyOrders.find((order)=>order._id===dayObj.day);
//         return match ?{
//             day:match._id,
//             totalSales:match.totalSales,
//             orderCount:match.orderCount,
//         }
//         :dayObj
//     })
  
//      res.status(200).json(formattedResults)

//     }catch(error){
//         console.error('Error fetching daily orders for the current month:', error);
//         throw new Error('Could not fetch daily orders for the current month');
//     }

// }


// exports.getDailyOrdersForCurrentMonth = async (req, res) => {
//     try {

//       const {month}=req.query;

//       console.log('month',month)

//       if (!month || !/^\d{4}-\d{2}$/.test(month)) {
//         return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
//       }
    

//     const startOfMonth = new Date(`${month}-01T00:00:00Z`);

// // startOfMonth.setUTCDate(1); // First day of the current month
// // startOfMonth.setUTCHours(0, 0, 0, 0);

// // const endOfMonth = new Date(startOfMonth); // Clone startOfMonth
// // endOfMonth.setUTCMonth(startOfMonth.getUTCMonth() + 1); // Move to the next month
// const endOfMonth = new Date(new Date(startOfMonth).setUTCMonth(startOfMonth.getUTCMonth() + 1));
// endOfMonth.setUTCDate(0); // Set date to the last day of the previous month
// endOfMonth.setUTCHours(23, 59, 59, 999);

// console.log("startOfMonth:", startOfMonth);
// console.log("endOfMonth:", endOfMonth);
// console.log("endOfMonth.getDate():", endOfMonth.getUTCDate());


// const daysInMonth = [];
// const daysCount=endOfMonth.getUTCDate()
// for (let day = 1; day <=daysCount ; day++) {
//     const date=new Date(startOfMonth);
//     date.setUTCDate(day)
//     daysInMonth.push({
//         day,
//         date:date.toISOString(),
//         formattedDate:date.toLocaleDateString("en-US",{
//             month:'short',
//             day:"numeric",
//         }),
//         totalSales: 0,
//         orderCount: 0,
//     });
// }
// console.log("daysInMonth:", daysInMonth);

  
//       // Fetch aggregate data for daily orders
//       const dailyOrders = await Order.aggregate([
//         {
//           $match: {
//             createdAt: {
//               $gte: startOfMonth, // Start of the current month
//               $lte: endOfMonth,   // End of the current month
//             },
//             orderStatus:"Completed",
//           },
//         },
//         {
//           $project: {
//             day: { $dayOfMonth: "$createdAt" }, // Extract the day from createdAt
//             chargeTotal: 1,
//           },
//         },
//         {
//           $group: {
//             _id: "$day", // Group by the day of the month
//             totalSales: { $sum: "$chargeTotal" }, // Sum of chargeTotal for each day
//             orderCount: { $sum: 1 }, // Count of orders for each day
//           },
//         },
//         {
//           $sort: {
//             _id: 1, // Sort by day
//           },
//         },
//       ]);
  
//       console.log("dailyOrders:", dailyOrders);
  
     

   

  
//       // Map the aggregated data to fill in the gaps for days with no sales
//       const formattedResults = daysInMonth.map((dayObj) => {
//         const match = dailyOrders.find((order) => parseInt(order._id )=== dayObj.day);
        
//         if (match) {
//             console.log(`Match found for day ${dayObj.day}:`, match);
//           } else {
//             console.log(`No match for day ${dayObj.day}`);
//           }

//         return match
//           ? {
//               day: match._id,
              
//               date:dayObj.formattedDate,
//               totalSales: match.totalSales,
//               orderCount: match.orderCount,
//             }
//           : dayObj; // Use default day object if no data
//       });

//       console.log('formatted',formattedResults)

//       const dayWithSales=formattedResults.filter(
//         (day)=>day.totalSales>0 || day.orderCount>0
//       )


//       const totalSalesForMonth=formattedResults.reduce(
//         (sum,day)=>sum + (day.totalSales ||0),
//         0
//       );
  
      
//       res.status(200).json(dayWithSales);
//     } catch (error) {
//       console.error("Error fetching daily orders for the current month:", error);
//       res
//         .status(500)
//         .json({ error: "Could not fetch daily orders for the current month" });
//     }
//   };


exports.getDailyOrdersForCurrentMonth = async (req, res) => {
  try {
      const { month } = req.query;
      console.log('month',month)

      // Validate the month parameter
      if (!month || !/^\d{4}-\d{2}$/.test(month)) {
          return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
      }

      // Calculate start and end dates for the selected month
      const startOfMonth = new Date(`${month}-01T00:00:00Z`);
      console.log('startOfMonth',startOfMonth)
      const endOfMonth = new Date(new Date(startOfMonth).setUTCMonth(startOfMonth.getUTCMonth() + 1));
      endOfMonth.setUTCDate(0); // Set to the last day of the chosen month
      endOfMonth.setUTCHours(23, 59, 59, 999);

      console.log("startOfMonth:", startOfMonth);
      console.log("endOfMonth:", endOfMonth);

      // Generate a default array of all days in the selected month
      const daysInMonth = [];
      const daysCount = endOfMonth.getUTCDate();
      for (let day = 1; day <= daysCount; day++) {
          const date = new Date(startOfMonth);
          date.setUTCDate(day);
          daysInMonth.push({
              day,
              date: date.toISOString(),
              formattedDate: date.toLocaleDateString("en-US", {
                  month: 'short',
                  day: "numeric",
              }),
              totalSales: 0,
              orderCount: 0,
          });
      }

      console.log("daysInMonth:", daysInMonth);

      // Fetch aggregate data for daily orders
      const dailyOrders = await Order.aggregate([
          {
              $match: {
                  createdAt: {
                      $gte: startOfMonth,
                      $lte: endOfMonth,
                  },
                  orderStatus: "Completed",
              },
          },
          {
              $project: {
                  day: { $dayOfMonth: "$createdAt" },
                  chargeTotal: 1,
              },
          },
          {
              $group: {
                  _id: "$day",
                  totalSales: { $sum: "$chargeTotal" },
                  orderCount: { $sum: 1 },
              },
          },
          {
              $sort: { _id: 1 },
          },
      ]);

      console.log("dailyOrders:", dailyOrders);

      // Map the aggregated data to fill in the gaps for days with no sales
      const formattedResults = daysInMonth.map((dayObj) => {
          const match = dailyOrders.find((order) => parseInt(order._id) === dayObj.day);
          return match
              ? {
                    day: match._id,
                    date: dayObj.formattedDate,
                    totalSales: match.totalSales,
                    orderCount: match.orderCount,
                }
              : dayObj; // Use default day object if no data
      });

      console.log("formattedResults:", formattedResults);

      // Filter to include only days with sales
      const dayWithSales = formattedResults.filter(
          (day) => day.totalSales > 0 || day.orderCount > 0
      );

      const totalSalesForMonth = formattedResults.reduce(
          (sum, day) => sum + (day.totalSales || 0),
          0
      );

      console.log("Total Sales for Month:", totalSalesForMonth);

      res.status(200).json(dayWithSales);
  } catch (error) {
      console.error("Error fetching daily orders for the selected month:", error);
      res.status(500).json({ error: "Could not fetch daily orders for the selected month" });
  }
};



exports.getTotalSalesForCurrentMonth = async (req, res) => {
  try {
      const { month } = req.query;
      console.log('month',month)

      // Validate the month parameter
      if (!month || !/^\d{4}-\d{2}$/.test(month)) {
          return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
      }

      // Calculate start and end dates for the selected month
      const startOfMonth = new Date(`${month}-01T00:00:00Z`);
      console.log('startOfMonth',startOfMonth)
      const endOfMonth = new Date(new Date(startOfMonth).setUTCMonth(startOfMonth.getUTCMonth() + 1));
      endOfMonth.setUTCDate(0); // Set to the last day of the chosen month
      endOfMonth.setUTCHours(23, 59, 59, 999);

      console.log("startOfMonth:", startOfMonth);
      console.log("endOfMonth:", endOfMonth);

      // Generate a default array of all days in the selected month
      const daysInMonth = [];
      const daysCount = endOfMonth.getUTCDate();
      for (let day = 1; day <= daysCount; day++) {
          const date = new Date(startOfMonth);
          date.setUTCDate(day);
          daysInMonth.push({
              day,
              date: date.toISOString(),
              formattedDate: date.toLocaleDateString("en-US", {
                  month: 'short',
                  day: "numeric",
              }),
              totalSales: 0,
              orderCount: 0,
          });
      }

      console.log("daysInMonth:", daysInMonth);

      // Fetch aggregate data for daily orders
      const dailyOrders = await Order.aggregate([
          {
              $match: {
                  createdAt: {
                      $gte: startOfMonth,
                      $lte: endOfMonth,
                  },
                  orderStatus: "Completed",
              },
          },
          {
              $project: {
                  day: { $dayOfMonth: "$createdAt" },
                  chargeTotal: 1,
              },
          },
          {
              $group: {
                  _id: "$day",
                  totalSales: { $sum: "$chargeTotal" },
                  orderCount: { $sum: 1 },
              },
          },
          {
              $sort: { _id: 1 },
          },
      ]);

      console.log("dailyOrders:", dailyOrders);

      // Map the aggregated data to fill in the gaps for days with no sales
      const formattedResults = daysInMonth.map((dayObj) => {
          const match = dailyOrders.find((order) => parseInt(order._id) === dayObj.day);
          return match
              ? {
                    day: match._id,
                    date: dayObj.formattedDate,
                    totalSales: match.totalSales,
                    orderCount: match.orderCount,
                }
              : dayObj; // Use default day object if no data
      });

      console.log("formattedResults:", formattedResults);

      // Filter to include only days with sales
      const dayWithSales = formattedResults.filter(
          (day) => day.totalSales > 0 || day.orderCount > 0
      );

      const totalSalesForMonth = formattedResults.reduce(
          (sum, day) => sum + (day.totalSales || 0),
          0
      );

      console.log("Total Sales for Month:", totalSalesForMonth);

      res.status(200).json(totalSalesForMonth);
  } catch (error) {
      console.error("Error fetching daily orders for the selected month:", error);
      res.status(500).json({ error: "Could not fetch daily orders for the selected month" });
  }
};


  exports.getSalesByCategory=async(req,res)=>{
    try{
      const {month}=req.query;

      if (!month || !/^\d{4}-\d{2}$/.test(month)) {
        return res.status(400).json({ error: "Invalid month format. Use YYYY-MM." });
      }


      const startDate=new Date(`${month}-01T00:00:00Z`);
      //const endDate=new Date(`${month}-31`);
      const endDate = new Date(new Date(startDate).setUTCMonth(startDate.getUTCMonth() + 1)); // Start of the next month
      


      const salesData=await Order.aggregate([
        {$match:{
          orderStatus:"Completed",
          createdAt:{$gte:startDate,$lte:endDate},
        }},
        {$unwind:"$cartItems"},

        {
          $addFields:{
            "cartItems.productID":{
              $toObjectId:"$cartItems.productID"
            }
          }

        },

        {
          $lookup:{
            from:"products",
            localField:"cartItems.productID",
            foreignField:"_id",
            as:"productDetails"

          },

        },
        { $unwind:"$productDetails"},
        {
          $lookup: {
            from: "categories", // Assuming the categories collection is called 'categories'
            localField: "productDetails.category", // category ID in products
            foreignField: "_id", // category ID in categories collection
            as: "categoryDetails",
          },

        },

        { $unwind: { path: "$categoryDetails", preserveNullAndEmptyArrays: true } },





        
          {
            $group:{
              // _id:"$productDetails.category",
              _id: "$categoryDetails.name",

              totalSales:{$sum:{
                $multiply:["$cartItems.price","$cartItems.amount"]
              }},
              totalProductsSold:{$sum:"$cartItems.amount"}

            },
          },
          {
            $project:{
              category:"$_id",
              totalSales:1,
              totalProductsSold:1,
              _id:0,


            }
          },
          {$sort:{
            totalSales:-1
          }}
        
       
      ])

      console.log("Completed Sales Data by Category:", salesData);
      res.status(200).json(salesData);

    }catch(error){
      console.error("Error fetching completed sales data by category:", error);
        throw error;

    }
  }
  

//   exports.getTodaysOrders=async(req,res)=>{
//     try{

//         const today=new Date();
//         const startOfDay=new Date(today.setHours(0,0,0,0));
//         const endOfDay=new Date(today.setHours(23,59,59,999));

//         const todaysOrders=await Order.find({
//             createdAt:{
//                 $gte:startOfDay,
//                 $lte:endOfDay,
//             }
//         })
//         console.log('todaysOrder',todaysOrders)

//         const totalOrders=todaysOrders.length;

//         res.status(200).json({
//             success:true,
//             todaysOrders,
//             data:todaysOrders,
//         });

//     }catch(error){
//         console.error("Error fetching today's orders:", error);
//         res.status(500).json({
//             success: false,
//             error: "Could not fetch today's orders",
//         });
//     }

//   }


exports.getOrdersByDate=async(req,res)=>{
    try{

        const {date}=req.query;
        console.log("date",date)

        if(!date){
            return res.status(400).json({
                success: false,
        error: "Date parameter is required.",
            })
        }

        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) {
          return res.status(400).json({
            success: false,
            error: "Invalid date format.",
          });
        }

        const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));
    
        const ordersByDate = await Order.find({
          createdAt: {
            $gte: startOfDay,
            $lte: endOfDay,
          },
        });

      
        const totalOrders = ordersByDate.length;

        res.status(200).json({
            success: true,
            totalOrders,
            orders: ordersByDate,
          });


    }catch(error){

        console.error("Error fetching orders by date:", error);
    res.status(500).json({
      success: false,
      error: "Could not fetch orders by date.",
    });

    }
}

exports.getOrdersNumberByDate=async(req,res)=>{
    try{

        const {date}=req.query;
        console.log("date",date)

        if(!date){
            return res.status(400).json({
                success: false,
        error: "Date parameter is required.",
            })
        }

        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) {
          return res.status(400).json({
            success: false,
            error: "Invalid date format.",
          });
        }

        const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));
    
        const ordersByDate = await Order.find({
          createdAt: {
            $gte: startOfDay,
            $lte: endOfDay,
          },
        });

      
        const totalOrders = ordersByDate.length;

        res.status(200).json({
            success: true,
            totalOrders,
            orders: ordersByDate,
          });


    }catch(error){

        console.error("Error fetching orders by date:", error);
    res.status(500).json({
      success: false,
      error: "Could not fetch orders by date.",
    });

    }
}