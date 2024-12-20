// import { FormInput, SubmitBtn } from "../components";
// import { Form,Link,redirect,useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { customFetch } from "../utils";
// import { toast } from "react-toastify";
// import { auth } from "../firebase";
// import { loginUser } from "../features/user/userSlice";
// import { store } from "../store";
// import { createOrUpdateUser } from "../functions/auth";
// import { googleAuthProvider } from "../firebase";


// export const handleSubmitAction=(store)=>async({request})=>{
//   const formData=await request.formData();
//   const email=formData.get('identifier');
//   const password=formData.get('password');

//   if (!email || !password) {
//     toast.error("Email and password are required");
//     return null;
// }


//   if (password.length < 6) {
//     toast.error("Password must be at least 6 characters");
//     return null;
// }

// try {
//     const result = await auth.signInWithEmailAndPassword(email, password);
//     const user = result.user;
//     const idTokenResult = await user.getIdTokenResult();

//     const res = await createOrUpdateUser(idTokenResult.token);
//     store.dispatch({
//         type: "LOGGED_IN_USER",
//         payload: {
//             name: res.data.name,
//             email: res.data.email,
//             token: idTokenResult.token,
//             role: res.data.role,
//             id: res.data._id,
//         }
//     });

//     if (res.data.role === 'admin') {
//         return redirect('/admin/dashboard');
//     } else {
//         return redirect('/');
//     }
// } catch (error) {
//     console.error(error);
//     toast.error(error.message);
//     return null;
// }



// }

// // export const googleLoginAction = (store) => async () => {
// //   try {
// //       const result = await auth.signInWithPopup(googleAuthProvider);
// //       const user = result.user;
// //       const idTokenResult = await user.getIdTokenResult();

// //       const res = await createOrUpdateUser(idTokenResult.token);
// //       store.dispatch({
// //           type: "LOGGED_IN_USER",
// //           payload: {
// //               name: res.data.name,
// //               email: res.data.email,
// //               token: idTokenResult.token,
// //               role: res.data.role,
// //               id: res.data._id,
// //           }
// //       });

// //       if (res.data.role === 'admin') {
// //           return redirect('/admin/dashboard');
// //       } else {
// //           return redirect('/');
// //       }
// //   } catch (error) {
// //       console.error(error);
// //       toast.error(error.message);
// //       return null;
// //   }
// // };

// export const googleLoginAction = (store) => async () => {
//   try {
//       const result = await auth.signInWithPopup(googleAuthProvider);
//       const user = result.user;
//       const idTokenResult = await user.getIdTokenResult();

//       const res = await createOrUpdateUser(idTokenResult.token);
//       store.dispatch({
//           type: "LOGGED_IN_USER",
//           payload: {
//               name: res.data.name,
//               email: res.data.email,
//               token: idTokenResult.token,
//               role: res.data.role,
//               id: res.data._id,
//           }
//       });

//       if (res.data.role === 'admin') {
//           return redirect('/admin/dashboard');
//       } else {
//           return redirect('/');
//       }
//   } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//       return null;
//   }
// };

// const Login=()=>{
    

//     // return(
//     //    <section className="h-screen grid place-items-center">
//     //     <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col
//     //     gap-y-4 ">
//     //         <h4 className="text-center text-3xl font-bold">
//     //             Login
//     //         </h4>
//     //         <FormInput type="email" label="email" name="identifier" defaultValue="exmaple@exmaple.com"
//     //         />
//     //         <FormInput type="password" label="password" name="password" defaultValue="secret"/>
//     //         <div className="mt-4">
//     //             <SubmitBtn text='login'/>
//     //             </div>
//     //             <button type="button" className="btn btn-secondary btn-block">guest user</button>
//     //           <p className="text-center">
//     //             Not a member yet?{' '}
//     //             <Link to='/register'
//     //             className="ml-2 link link-hover link-primary capitalize"
//     //             >
//     //             register
//     //             </Link>

//     //           </p>
          
//     //     </Form>

//     //    </section>
//     // )
//     return (
//       // <section className="h-screen grid place-items-center">
//       //     <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" action="/login">
//       //         <h4 className="text-center text-3xl font-bold">
//       //             Login
//       //         </h4>
//       //         <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
//       //         <FormInput type="password" label="password" name="password" defaultValue="secret" />
//       //         <div className="mt-4">
//       //             <SubmitBtn text='login' />
//       //         </div>
//       //         <input type="hidden" name="provider" value="google" />
//       //         <button type="submit" className="btn btn-secondary btn-block">Login with Google</button>
//       //         <p className="text-center">
//       //             Not a member yet?{' '}
//       //             <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
//       //                 register
//       //             </Link>
//       //         </p>
//       //     </Form>
//       //      <Form method="post" action="/login">
//       //         <input type="hidden" name="provider" value="google" />
//       //         <button type="submit" className="btn btn-primary mt-4 w-full">
//       //             Login with Google
//       //         </button>
//       //     </Form> 
//       // </section>

//   //     <section className="h-screen grid place-items-center">
//   //     <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" action="/login">
//   //         <h4 className="text-center text-3xl font-bold">
//   //             Login
//   //         </h4>
//   //         <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
//   //         <FormInput type="password" label="password" name="password" defaultValue="secret" />
//   //         <div className="mt-4">
//   //             <SubmitBtn text='login' />
//   //         </div>
//   //          <input type="hidden" name="provider" value="google" />
//   //         <button type="button" className="btn btn-secondary btn-block">guest user</button>
//   //         <p className="text-center">
//   //             Not a member yet?{' '}
//   //             <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
//   //                 register
//   //             </Link>
//   //         </p>
//   //     </Form>
//   //     <Form method="post" action="/login">
//   //         <input type="hidden" name="provider" value="google" />
//   //         <button type="submit" className="btn btn-primary mt-4 w-full">
//   //             Login with Google
//   //         </button>
//   //     </Form>
//   // </section>
//   <section className="h-screen grid place-items-center">
//   <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" action="/login">
//       <h4 className="text-center text-3xl font-bold">
//           Login
//       </h4>
//       <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
//       <FormInput type="password" label="password" name="password" defaultValue="secret" />
//       <div className="mt-4">
//           <SubmitBtn text='login' />
//       </div>
//       {/* <button type="button" className="btn btn-secondary btn-block">guest user</button> */}
//       {/* <Form method="post" action="/login-google">
//       <button type="submit" className="btn btn-primary mt-4 w-full">
//           Login with Google
//       </button>
//   </Form> */}
//       <p className="text-center">
//           Not a member yet?{' '}
//           <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
//               register
//           </Link>
//       </p>
//   </Form>
//    <Form method="post" action="/login-google">
//       <button type="submit" className="btn btn-primary mt-4 w-full">
//           Login with Google
//       </button>
//   </Form> 
// </section>


//   );
// }

// export default Login;

// // src/pages/Login.js
// // import React from 'react';
// // import { Form, Link } from "react-router-dom";
// // import { FormInput, SubmitBtn } from "../components";

// // const Login = () => {
// //     return (
// //         <section className="h-screen grid place-items-center">
// //             <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
// //                 <h4 className="text-center text-3xl font-bold">
// //                     Login
// //                 </h4>
// //                 <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
// //                 <FormInput type="password" label="password" name="password" defaultValue="secret" />
// //                 <div className="mt-4">
// //                     <SubmitBtn text='login' />
// //                 </div>
// //                 <button type="button" className="btn btn-secondary btn-block">guest user</button>
// //                 <p className="text-center">
// //                     Not a member yet?{' '}
// //                     <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
// //                         register
// //                     </Link>
// //                 </p>
// //             </Form>
// //             <Form method="post" action="/login">
// //                 <input type="hidden" name="provider" value="google" />
// //                 <button type="submit" className="btn btn-primary mt-4 w-full">
// //                     Login with Google
// //                 </button>
// //             </Form>
// //         </section>
// //     );
// // }

// // export default Login;

// import React from 'react';
// import { Form, Link } from "react-router-dom";
// import { FormInput, SubmitBtn } from "../components";
// import { toast } from "react-toastify";
// import { auth, googleAuthProvider } from "../firebase";
// import { createOrUpdateUser } from "../functions/auth";
// import { store } from "../store";
// import { redirect } from "react-router-dom";


// export const handleSubmitAction = (store) => async ({ request }) => {
//   const formData = await request.formData();
//   const email = formData.get('identifier');
//   const password = formData.get('password');
//   const provider = formData.get('provider');

//   if (!email || !password) {
//       toast.error("Email and password are required");
//       return null;
//   }

//   if (password.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return null;
//   }

//   if (provider === 'email') {
//       try {
//           const result = await auth.signInWithEmailAndPassword(email, password);
//           const user = result.user;
//           const idTokenResult = await user.getIdTokenResult();

//           const res = await createOrUpdateUser(idTokenResult.token);
//           store.dispatch({
//               type: "LOGGED_IN_USER",
//               payload: {
//                   name: res.data.name,
//                   email: res.data.email,
//                   token: idTokenResult.token,
//                   role: res.data.role,
//                   id: res.data._id,
//               }
//           });

//           if (res.data.role === 'admin') {
//               return redirect('/admin/dashboard');
//           } else {
//               return redirect('/');
//           }
//       } catch (error) {
//           console.error(error);
//           toast.error(error.message);
//           return null;
//       }
//   } else if (provider === 'google') {
//       try {
//           const result = await auth.signInWithPopup(googleAuthProvider);
//           const user = result.user;
//           const idTokenResult = await user.getIdTokenResult();

//           const res = await createOrUpdateUser(idTokenResult.token);
//           store.dispatch({
//               type: "LOGGED_IN_USER",
//               payload: {
//                   name: res.data.name,
//                   email: res.data.email,
//                   token: idTokenResult.token,
//                   role: res.data.role,
//                   id: res.data._id,
//               }
//           });

//           if (res.data.role === 'admin') {
//               return redirect('/admin/dashboard');
//           } else {
//               return redirect('/');
//           }
//       } catch (error) {
//           console.error(error);
//           toast.error(error.message);
//           return null;
//       }
//   }
// }

// const Login = () => {
//     const handleButtonClick = (provider) => {
//         document.getElementById('provider').value = provider;
//     };

//     return (
//         <section className="h-screen grid place-items-center">
//             <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" action="/login">
//                 <h4 className="text-center text-3xl font-bold">
//                     Login
//                 </h4>
//                 <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
//                 <FormInput type="password" label="password" name="password" defaultValue="secret" />
//                 <input type="hidden" id="provider" name="provider" value="email" />
//                 <div className="mt-4">
//                     <button
//                         type="submit"
//                         className="btn btn-primary btn-block"
//                         onClick={() => handleButtonClick('email')}
//                     >
//                         Login
//                     </button>
//                     <button
//                         type="submit"
//                         className="btn btn-secondary btn-block mt-2"
//                         onClick={() => handleButtonClick('google')}
//                     >
//                         Login with Google
//                     </button>
//                 </div>
//                 <p className="text-center">
//                     Not a member yet?{' '}
//                     <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
//                         register
//                     </Link>
//                 </p>
//             </Form>
//         </section>
//     );
// }

// export default Login;


import React from 'react';
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../firebase";
import { createOrUpdateUser } from "../functions/auth";
import { store } from "../store";
import { redirect } from "react-router-dom";

export const handleSubmitAction = (store) => async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('identifier');
  const password = formData.get('password');
  const provider = formData.get('provider');

  if (provider === 'email') {
    if (!email || !password) {
      toast.error("Email and password are required");
      return null;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return null;
    }

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      console.log('User--->',user)
      if (!user) {
        console.error("User is undefined after signInWithEmailAndPassword");
        toast.error("Authentication failed. Please try again.");
        return null;
      }
      const idTokenResult = await user.getIdTokenResult();

      const res = await createOrUpdateUser(idTokenResult.token);
      store.dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: res.data.name,
          email: res.data.email,
          token: idTokenResult.token,
          role: res.data.role,
          id: res.data._id,
        }
      });

      if (res.data.role === 'admin') {
        return redirect('/');
      } else {
        return redirect('/');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      return null;
    }
  } else if (provider === 'google') {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      const user = result.user;
      console.log('User-->',user)
      if (!user) {
        console.error("User is undefined after signInWithPopup");
        toast.error("Authentication failed. Please try again.");
        return null;
      }
      const idTokenResult = await user.getIdTokenResult();

      const res = await createOrUpdateUser(idTokenResult.token);
      store.dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: res.data.name,
          email: res.data.email,
          token: idTokenResult.token,
          role: res.data.role,
          id: res.data._id,
        }
      });

      if (res.data.role === 'admin') {
         return redirect('/');
      } else {
        return redirect('/');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      return null;
    }
  }
}

const Login = () => {
  const handleButtonClick = (provider) => {
    document.getElementById('provider').value = provider;
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" action="/login">
        <h4 className="text-center text-3xl font-bold">
          Login
        </h4>
        <FormInput type="email" label="email" name="identifier" defaultValue="example@example.com" />
        <FormInput type="password" label="password" name="password" defaultValue="secret" />
        <input type="hidden" id="provider" name="provider" value="email" />
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={() => handleButtonClick('email')}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-secondary btn-block mt-2"
            onClick={() => handleButtonClick('google')}
          >
            Login with Google
          </button>
        </div>
        <p className="text-center">
          Not a member yet?{' '}
          <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;

