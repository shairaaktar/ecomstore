# 🛒 E-Commerce Platform (MERN Stack)

A full-stack e-commerce application with focusing on secure authentication, RESTful API design, and integrated payment processing.

🔗 **Live Demo**: https://ecomstore-my-project.onrender.com

---

## ✨ Key Features

### Authentication & Authorization
- Firebase Authentication for user management
- Backend token verification using Firebase Admin SDK
- Protected routes with custom authorization middleware
- Role-based access control (RBAC) for admin operations

### E-Commerce Functionality
- Product catalog with detailed views
- Shopping cart with persistent storage
- Order creation and tracking
- Admin dashboard for product/order management
- Image uploads via Cloudinary integration

### Search, Filtering & Pagination
- Advanced filtering (price range, category, color, shipping)
- Keyword-based product search
- Server-side pagination for optimized data retrieval

### Payments
- Stripe payment gateway integration
- Secure checkout flow
- Order confirmation after payment verification

## Product Reviews & Ratings

- Authenticated users can submit product reviews and ratings
- Enforced one-review-per-user-per-product constraint
- Reviews are linked to user accounts
- Average product ratings are updated automatically
- Admin-only review moderation

---

## 🛠️ Tech Stack

**Backend**: Node.js, Express.js, MongoDB, Mongoose  
**Authentication**: Firebase Authentication + Firebase Admin SDK  
**Frontend**: React, Redux, Tailwind CSS, DaisyUI  
**Tools & Services**: Stripe API, Cloudinary, Git, Postman, Render

---

## 🧠 System Highlights

- RESTful API design following MVC architecture
- Backend-driven business logic with separation of concerns
- Dynamic query construction for filtering and search
- Server-side pagination for scalability
- Production deployment with environment-based configuration

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - User login with Firebase token verification

### Products
- `GET /api/products` - Get products with filtering, search, pagination
- `GET /api/products/:id` - Get single product details
- `PATCH /api/create-product` - create product (Admin only)

### Orders
- `POST /api/orders` - Create order from cart
- `GET /api/user/orders` - Get user's order history

### Payments
- `POST /api/create-payment-intent` - Process Stripe payment

---

## ⚙️ Local Setup

### Backend
```bash
cd backend
npm install
# Configure .env file (see below)
npm run dev
```

### Frontend
```bash
cd my-project
npm install
npm start
```

---

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
STRIPE_SECRET_KEY=sk_test_...
FIREBASE_ADMIN_SDK=path/to/serviceAccountKey.json
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=8001
```

### Frontend (.env)
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_API_URL=http://localhost:5173
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
```

---









