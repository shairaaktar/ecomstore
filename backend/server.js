// const express=require('express')
// const mongoose=require('mongoose')
// const morgan=require('morgan')
// const bodyParser=require('body-parser')
// const cors=require('cors')
// require('dotenv').config()

// const {readdirSync}=require('fs')

// const app=express()

// app.use(morgan('dev'));
// app.use(bodyParser.json({limit:"2mb"}));
// app.use(cors());


// mongoose.set('strictQuery',false);

// mongoose.connect(process.env.DATABASE,{

// }).then(()=>console.log('Connected to Database!'))
// .catch(err=>console.error('Mongodb Connection failed!'));

// const port=8001;

// app.listen(port,()=>console.log(`Server is running on port ${port}`))

// // readdirSync('./routes').map((routeFile)=>{
// //     const routes=require(`./routes/${routeFile}`);
// //     app.use('/api',routes);
// // });
// readdirSync("./routes").map((r)=>app.use("/api",require("./routes/"+r)));



const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fs=require('fs')
const path = require('path');
const Product=require('./models/product')
const http=require('http');
const {Server}=require('socket.io');
const admin=require('./firebase')
const User=require("./models/user")
const Order=require("./models/order")





const { readdirSync } = require('fs');
const { Session } = require('inspector');


const app = express();
const server=http.createServer(app);



app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use('/media',express.static(path.join(__dirname,'media')));

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE || 'mongodb://localhost:27017/comfy-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to Database!'))
    // .catch(err => console.error('Mongodb Connection failed!'));

const port = 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`));


// Dynamically load routes from the routes directory
readdirSync("./routes").map((r) =>{
    console.log(`Loading route: /api/${r}`);
    app.use("/api", require("./routes/" + r));
    
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
});


const connectedUsers={};

// io.use(async(socket,next)=>{
//     const token=socket.handshake.auth.token;
//     console.log('token',token)

//     // if(!token){
//     //     return next (new Error('Authentication error:No token provided'));
//     // }

//     try{
//         const firebaseUser=await admin.auth().verifyIdToken(token);
//         console.log('Socket Auth:Firebase User:',firebaseUser);


//         socket.userId=firebaseUser.uid;

//         const dbUser = await User.findOne({ email: firebaseUser.email }).exec();

//         console.log('dbUser',dbUser)
//         if (!dbUser) {
//             return next(new Error('Authentication error: User not found in database'));
//         }

//         // // If role-based access control is needed
//         // if (dbUser.role !== 'admin') {
//         //     return next(new Error('Authorization error: Admin access denied'));
//         // }

//         socket.dbUser=dbUser;

//         next();



//     }catch(err){
//         console.error('Socket authentication error:',err);
//         return next (new Error('Authentication or  authorization error'));
//     }
    
// });



// io.on('connection', (socket) => {
//     const userId = socket.userId;

//     console.log('userId',userId)
//     connectedUsers[userId] = socket; // Store user socket connection

//     console.log(`User ${userId} connected`);

//     // Listen for disconnection
//     socket.on('disconnect', () => {
//         console.log(`User ${userId} disconnected`);
//         delete connectedUsers[userId]; // Remove user from in-memory store
//     });
// });


// io.use(async (socket, next) => {
//     const token = socket.handshake.auth.token;

//     console.log('token',token)

//     //  if (!token) {
//     //     return next(new Error('Authentication error: No token provided'));
//     //  }

//     try {
//         const firebaseUser = await admin.auth().verifyIdToken(token)
//         .then((decodedToken)=>{
//             socket.user=decodedToken;
//             next();
//     })
//     .catch((error)=>{
//         next(new Error('Authentication error: Invalid token'));
//     })
        
//         console.log('Socket Auth: Firebase User:', firebaseUser);

//         socket.userId = firebaseUser.uid;
//         const dbUser = await User.findOne({ email: firebaseUser.email }).exec();
//         console.log('dbUser',dbUser)

//         if (!dbUser) {
//             return next(new Error('Authentication error: User not found in database'));
//         }

//         socket.dbUser = dbUser;
//         next();
//     } catch (err) {
//         console.error('Socket authentication error:', err);
//         return next(new Error('Authentication error: Invalid token'));
//     }
// });


// io.use(async (socket, next) => {
//     const token = socket.handshake.auth.token;

//     console.log('token:', token); // Log the incoming token

//     // Check if the token is provided
//     if (!token) {
//         return next(new Error('Authentication error: No token provided'));
//     }

//     try {
//         // Verify the token and get the decoded user information
//         const decodedToken = await admin.auth().verifyIdToken(token);
//         socket.user = decodedToken; // Assign the decoded token to the socket object
//         console.log('Socket Auth: Firebase User:', decodedToken);

//         // Find the user in the database using the email from the decoded token
//         const dbUser = await User.findOne({ email: decodedToken.email }).exec();
//         console.log('dbUser:', dbUser);

//         // Check if the user exists in the database
//         if (!dbUser) {
//             return next(new Error('Authentication error: User not found in database'));
//         }

//         // Assign the database user to the socket object
//         socket.dbUser = dbUser;

//         // Call the next middleware
//         next();
//     } catch (err) {
//         console.error('Socket authentication error:', err);
//         return next(new Error('Authentication error: Invalid token'));
//     }
// });

io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;

    console.log('token:', token); // Log the incoming token

    if (!token) {
        return next(new Error('Authentication error: No token provided'));
    }

    try {
        // Verify the token and get the decoded user information
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log('Decoded Token:', decodedToken); // Log decoded token to check its contents
        
        const userId=decodedToken.uid

        const session=await Session.findById(userId)

        if (!session) {
            return next(new Error('Session ID unknown'));
        }
        // Set user details on the socket
        socket.user = decodedToken; // This should contain the uid and other claims
        socket.userId = decodedToken.uid; // Ensure uid is being set here
        console.log('Socket User ID:', socket.userId); // Log the user ID

        // Find the user in the database using the email from the decoded token
        const dbUser = await User.findOne({ email: decodedToken.email }).exec();
        console.log('dbUser:', dbUser); // Log the found database user

        if (!dbUser) {
            return next(new Error('Authentication error: User not found in database'));
        }

        // Assign the database user to the socket object
        socket.dbUser = dbUser;

        // Call the next middleware
        next();
    } catch (err) {
        console.error('Socket authentication error:', err);
        return next(new Error('Authentication error: Invalid token'));
    }
});



// io.on('connection', (socket) => {
//     const userId = socket.userId;

//     console.log('userId', userId);
//     connectedUsers[userId] = socket; // Store user socket connection
//     console.log(`User ${userId} connected`);

//     socket.on('disconnect', () => {
//         console.log(`User ${userId} disconnected`);
//         delete connectedUsers[userId]; // Remove user from in-memory store
//     });
// });


// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


//  mongoose.connection.on('connected', async () => {
//      console.log('Connected to MongoDB');
  
//      // Construct the path to the mockData.json file
//      const dataPath=path.join(__dirname,'data','MOCK_DATA.json');
//      let mockData=JSON.parse(fs.readFileSync(dataPath,'utf-8'));
//      try {
//     mockData = mockData.filter(item => item.slug);  //Filter out items with null slug
//     let existingSlugs = await Product.find().distinct('slug').exec();
//     mockData = mockData.filter(item => !existingSlugs.includes(item.slug));

//        // Insert the mock data into the database
//        await Product.insertMany(mockData);
//        console.log('Mock data inserted successfully!');
//      } catch (error) {
//        console.error('Error inserting mock data:', error);
//      } finally {
//       //  Close the database connection
//        mongoose.connection.close();
//      }
//    });

// // mongoose.connection.on('connected', async () => {
// //     console.log('Connected to MongoDB');
  
// //     const dataPath = path.join(__dirname, 'data', 'MOCK_DATA.json');
// //     let mockData=JSON.parse(fs.readFileSync(dataPath,'utf-8'));
  
// //     try {
      
  
// //       // Ensure no null slugs and unique slugs
// //       mockData = mockData.filter(item => item.slug); // Filter out items with null slug
// //       let existingSlugs = await Product.find().distinct('slug').exec();
// //       mockData = mockData.filter(item => !existingSlugs.includes(item.slug));
  
// //       await Product.insertMany(mockData);
// //       console.log('Mock data inserted successfully!');
// //     } catch (error) {
// //       console.error('Error inserting mock data:', error);
// //     } finally {
// //       mongoose.connection.close();
// //     }
// //   });


// const updateOrderStatus=(orderId,userId,newStatus)=>{
//     io.to(userId).emit('orderStatusUpdated',{orderId,orderStatus:newStatus});
// }

const updateOrderStatus = (orderId, userId, newStatus) => {
    if (connectedUsers[userId]) {
        connectedUsers[userId].emit('orderStatusUpdated', { orderId, orderStatus: newStatus });
    }
};


app.post('/api/order-status', async (req, res) => {
    const { orderId, orderStatus } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        console.log('opdatedOrder',updatedOrder)

        // Emit update to specific user
        const userId = updatedOrder.user;

        io.to(userId).emit('orderStatusUpdated',{orderId, orderStatus: updateOrderStatus.orderStatus})
        
        res.json({ message: 'Order status updated', updateOrderStatus });
        console.log('userId',userId)
        
        // Assuming order has a userId field
        // if (connectedUsers[userId]) {
        //     connectedUsers[userId].emit('orderStatusUpdated', { orderId, orderStatus });
        // }
       

        // updateOrderStatus(orderId, userId, orderStatus);


        // res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



io.on('connection', (socket) => {
    const userId = socket.userId;

    console.log('userId', userId);
    connectedUsers[userId] = socket; // Store user socket connection
    console.log(`User ${userId} connected`);

    socket.on('disconnect', () => {
        console.log(`User ${userId} disconnected`);
        delete connectedUsers[userId]; // Remove user from in-memory store
    });
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});