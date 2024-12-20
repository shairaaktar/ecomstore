// import {RouterProvider,createBrowserRouter} from 'react-router-dom'
// import { HomeLayout ,
//   About,
//   Cart,Checkout,
//   Error,Landing,Login,Orders,Products,Register,SingleProduct ,
//   RegisterComplete
  


// } from "./pages";
// import { ErrorElement } from './components';
// import { loader as landingLoader } from './pages/Landing';
// import { loader as singleProductLoader } from './pages/SingleProduct';
// import { loader as ProductLoader } from './pages/Products';
// import { handleRegister } from './pages/Register';
// import { handleRegisterComplete } from './pages/RegisterComplete';
// import { handleSubmitAction } from './pages/Login';
// import { googleLoginAction } from './pages/Login';

// import {store} from './store'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<HomeLayout/>,
//     errorElement:<Error/>,
//     children:[
//       {
//         index:true,
//         element:<Landing/>,
//         errorElement:<ErrorElement/>,
//         loader:landingLoader


//       },
//       {
//        path:'products',
//         element:<Products/>,
//         errorElement:<ErrorElement/>,
//          loader:ProductLoader
        

//       },
//       {
//         path:'products/:id',
//          element:<SingleProduct/>,
//          errorElement:<ErrorElement/>,
//          loader:singleProductLoader
 
         
 
//        },
//        {
//         path:'cart',
//          element:<Cart/>,
         
//        },
//        {
//         path:'orders',
//          element:<Orders/>,
         
 
//        },
//        {
//         path:'about',
//          element:<About/>,
         
 
//        },
//        {
//         path:'checkout',
//          element:<Checkout/>,
         
 
//        },
     
//     ]
//   },
//   // {
//   //   path:'/login',
//   //   element:<Login/>,
//   //   errorElement:<Error/>,
//   //   action:LoginAction(store),
//   // },
//   // {
//   //   path: '/login',
//   //   element: <Login />,
//   //   errorElement: <Error />,
//   //   action: async ({ request }) => {
//   //     const url = new URL(request.url);
//   //     if (url.searchParams.get('provider') === 'google') {
//   //       return googleLoginAction(store)();
//   //     }
//   //     return handleSubmitAction(store)({ request });
//   //   },
//   // },
//   {
//     path: '/login',
//     element: <Login />,
//     errorElement: <Error />,
//     action: handleSubmitAction(store),
//   },
//   {
//     path: '/login-google',
//     element: <Login />,
//     errorElement: <Error />,
//     action: googleLoginAction(store),
//   },
//   {
//     path:'/register',
//     element:<Register/>,
//     errorElement:<Error/>,
//     action:handleRegister
   
//   },
//   {
//     path:'/register/complete',
//     element:<RegisterComplete/>,
//     errorElement:<Error/>,
//    action:handleRegisterComplete
//   },



// ])

// const App=()=>{
//   return<RouterProvider router={router}/>

// }
// export default App;

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import {
//   HomeLayout,
//   About,
//   Cart,
//   Checkout,
//   Error,
//   Landing,
//   Login,
//   Orders,
//   Products,
//   Register,
//   SingleProduct,
//   RegisterComplete
// } from "./pages";
// import { ErrorElement } from './components';
// import { loader as landingLoader } from './pages/Landing';
// import { loader as singleProductLoader } from './pages/SingleProduct';
// import { loader as ProductLoader } from './pages/Products';
// import { handleRegister } from './pages/Register';
// import { handleRegisterComplete } from './pages/RegisterComplete';
// import { handleSubmitAction } from './pages/Login';
// import { store } from './store';
// import { useEffect } from 'react';

// import { auth } from './firebase';
// import { currentUser } from './functions/auth';
// import { useDispatch } from 'react-redux';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomeLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//         errorElement: <ErrorElement />,
//         loader: landingLoader
//       },
//       {
//         path: 'products',
//         element: <Products />,
//         errorElement: <ErrorElement />,
//         loader: ProductLoader
//       },
//       {
//         path: 'products/:id',
//         element: <SingleProduct />,
//         errorElement: <ErrorElement />,
//         loader: singleProductLoader
//       },
//       {
//         path: 'cart',
//         element: <Cart />
//       },
//       {
//         path: 'orders',
//         element: <Orders />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'checkout',
//         element: <Checkout />
//       }
//     ]
//   },
//   {
//     path: '/login',
//     element: <Login />,
//     errorElement: <Error />,
//     action: handleSubmitAction(store),
//   },
//   {
//     path: '/register',
//     element: <Register />,
//     errorElement: <Error />,
//     action: handleRegister
//   },
//   {
//     path: '/register/complete',
//     element: <RegisterComplete />,
//     errorElement: <Error />,
//     action: handleRegisterComplete
//   }
// ]);

// const App = () => {
//   const dispatch=useDispatch()
   
//   useEffect(()=>{
//     const unsubscribe=auth.onAuthStateChanged(async(user)=>{
//       if(user){
//         const idTokenResult=await user.getIdTokenResult()
//         console.log("user",user)
//       currentUser(idTokenResult.token)
//       .then((res)=>{
//         dispatch({
//           type:"LOGGED_IN_USER",
//           payload:{
//             name:res.data.name,
//             email:res.data.email,
//             token:idTokenResult.token,
//             role:res.data.role,
//             id:res.data._id,
//           }
//         })
//       }).catch((err)=>console.log(err))

//       }
//     });
//     return()=>unsubscribe()

//   },[])


//   return <RouterProvider router={router} />;
// };

// export default App;

// require('dotenv').config()
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
 import {
   HomeLayout,
   About,
   Cart,
   Checkout,
   Error,
   Landing,
   Login,
   Orders,
   Products,
   Register,
   SingleProduct,
   RegisterComplete,
   ProductCreatePage,
   AdminDashboard,
   AllOrders,
   AllProducts,
   Customers,
   CardPaymentPage,
   ProducUpdate,
   CategoryCreatePage,
   Shop,
   CategoryProducts,
   CategoryProductsPage,
 AdminNoficationForm,
 CategoryProductsList,
 ParentCatgeoryCreate,
 UserReviews,
 OrderStatus,
 SearchResults,
 UserOrders,
 UserDashboard,
 WishList,
 AdminDash,
 
 
  

 } from "./pages";
import {CategoryList,
  AdminDashboardNav,
  AdminCarousel,
  CustomerReviews,
  BestSellers, 
  AdminProductList,
  AdminProductCardGrid,
  OrderDetails,
  Invoice,
  MonthlySalesGraph,
  SalesByPie,
  EveryDaySales,
  TotalSalesByMonth,
  NewCustomersByMonth,
  NewCustomers,
  OrdersByDate,
  EveryDaysOrders
} from "./components"

import { themeSettings } from './theme'; 
// import HomeLayout from './pages/HomeLayout'
// import About from './pages/About'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
// import Error from './pages/Error'
// import Landing from './pages/Landing'
// import Login from './pages/Login';
// import Orders from './pages/Orders'
// import Products from './pages/Products';
// import Register from './pages/Register';
// import SingleProduct from './pages/SingleProduct';
// import RegisterComplete from './pages/RegisterComplete';
// import ProductCreatePage from './pages/ProductCreatePage'
// import AdminDashboard from './pages/admin/AdminDashboard'
// import AllOrders from './pages/admin/AllOrders'
// import Customers from './pages/admin/Customers'
// import AllProducts from './pages/admin/AllProducts';
//  import CardPaymentPage from './pages/CardPaymentPage';
import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';
// import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as ProductLoader } from './pages/Products';
import { loader as AllProductLoader } from './pages/admin/AllProducts';


// import { action as checkoutAction } from './components/CheckoutForm';

import { handleRegister } from './pages/Register';
import { handleRegisterComplete } from './pages/RegisterComplete';
import { handleSubmitAction } from './pages/Login';
import { store } from './store';
import { useEffect, useMemo } from 'react';
import { auth } from './firebase';
import { currentUser } from './functions/auth';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from './features/user/userSlice'; // Adjust the path based on your project structure
import { createTheme, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductLoader,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorElement />,
       
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        // loader: singleProductLoader,
      },
      {
        path: 'category/:slug',
        element: <CategoryProductsPage />,
        errorElement: <ErrorElement />,
        // loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
      {
        path: 'newcustomerbymonth',
        element: <NewCustomersByMonth />,
      },
      {
        path: 'admindash/newcustomer',
        element: <NewCustomers />,
      },
      {
        path: 'ordersbydate',
        element: <OrdersByDate />,
      },
      {
        path: 'admindash/everydaysorders',
        element: <EveryDaysOrders />,
      },
      {
        path: 'bestsellingproducts',
        element: <BestSellers />,
      },
      {
        path: 'everydaysales',
        element: <EveryDaySales />,
      },
      {
        path: 'monthysalesgraph',
        element: <MonthlySalesGraph />,
      },
      {
        path: 'monthysalesbypie',
        element: <SalesByPie />,
      },
      {
        path: 'totalsalesbymonth',
        element: <TotalSalesByMonth />,
      },
      {
        path: '/admin/dashboard/Nav',
        element: <AdminDashboardNav/>,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: '/invoice/:orderId',
        element: <Invoice />,
      },
      {
        path: '/orderDetails/:orderId',
        element: <OrderDetails />,
      },
      {
        path: '/orderStatus',
        element: <OrderStatus />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        // action:checkoutAction(store)
       
      },
      {
        path: '/createproducts',
        element: <ProductCreatePage />,
        
       
      },
      {
        path: '/createcategory',
        element: <CategoryCreatePage />,
        
       
      },
      {
        path: '/createparentcategory',
        element: <ParentCatgeoryCreate />,
        
       
      },
      {
        path: '/allcategories',
        element: <CategoryList />,
        
       
      },
      {
        path: '/admin/product/update/:id',
        element: <ProducUpdate />,
        
       
      },
      {
        path: 'admin/dashboard',
        element: < AdminDashboard />,
       
      },
      {
        path: '/dashboard',
        element: < UserDashboard />,
       
      },
      {
        path: '/admindash',
        element: < AdminDash />,
       
      },
      {
        path: 'allorders',
        element: < AllOrders />,
       
      },
      {
        path: '/allproducts',
        element: < AdminProductList />,
        loader: ProductLoader,
       
      },
      {
        path: '/allcustomers',
        element: < Customers />,
       
      },
      {
        path: '/search',
        element: < SearchResults />,
       
      },
      {
        path: '/managereviews',
        element: < CustomerReviews />,
       
      },
      {
        path: '/carousel',
        element: < AdminCarousel />,
       
      },
      {
        path: 'card-payment',
        element: < CardPaymentPage />,
       
       },
       {
        path: 'admin/Admin-offer',
        element: <AdminNoficationForm />,
       
       },
       {
        path: '/allcustomers/admin/UserReviews/:userId',
        element: <UserReviews />,
       
       },
       {
        path: '/users/:id/orders',
        element: <UserOrders />,
       
       },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: handleSubmitAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: handleRegister,
  },
  {
    path: '/register/complete',
    element: <RegisterComplete />,
    errorElement: <Error />,
    action: handleRegisterComplete,
  },
  
]);

const App = () => {
  const dispatch = useDispatch();
  // const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();
          console.log("user", user);
          currentUser(idTokenResult.token)
            .then((res) => {
              dispatch(
                setLoggedInUser({
                  name: res.data.name,
                  email: res.data.email,
                  token: idTokenResult.token,
                  role: res.data.role,
                  id: res.data._id,
                })
              );
            })
            .catch((err) => console.log(err));
        } catch (error) {
          console.error("Error fetching user token:", error);
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
   
      <RouterProvider router={router} />
    
  )
};

export default App;
