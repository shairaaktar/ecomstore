import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAB__KYsnwjc_jVeINyE-ezZuAWIlCstcM",
    authDomain: "comfy-store-15dd5.firebaseapp.com",
    projectId: "comfy-store-15dd5",
    storageBucket: "comfy-store-15dd5.appspot.com",
    messagingSenderId: "77189803655",
    appId: "1:77189803655:web:52bf3b358b17bf7fc49222"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

