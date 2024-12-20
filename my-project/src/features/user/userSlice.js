// import { createSlice } from "@reduxjs/toolkit";
// import {toast} from 'react-toastify'


// const themes={
//    light:'light',
//     dim:'dim',
//   }

//   const getThemeFromLocalStorage=()=>{
//     const theme= localStorage.getItem('theme') || themes.light
//     document.documentElement.setAttribute('data-theme',theme);
//     return theme;
// }

// const initialState={
//     // user:{username:'coding addict'},
//     theme:getThemeFromLocalStorage,
// }

// const userSlice=createSlice({
//     name:'user',
//      initialState,
//     reducers:{
//         // loginUser:(state, action)=>{
//         //     console.log('login');
//         // },
//         logoutUser:(state)=>{
//            state.user=null;
//            localStorage.removeItem('user');
//            toast.success('Logged out successfully');
//         },
//         toggleTheme:(state)=>{
//             const {light,dim}=themes;
//             state.theme=state.theme===dim?light :dim;
//             document.documentElement.setAttribute('data-theme',state.theme);
//             localStorage.setItem('theme',state.theme);
//         }
//     }
// })


// export const {logoutUser, toggleTheme}=userSlice.actions;


// export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const themes = {
 emerald: 'emerald',
 forest: 'forest',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.emerald;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
//   user: null, // Initialize user as null
name: "", // Initialize with empty string or null if no user is logged in
  email: "",
  token: "",
  role: "",
  id: "",
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    // Reducer to set logged in user
    setLoggedInUser: (state, action) => {
      const { name, email, token, role, id } = action.payload;
    //   state.user = {
    //     name,
    //     email,
    //     token,
    //     role,
    //     id,
    //   };
    state.name = name;
    state.email = email;
    state.token = token;
    state.role = role;
    state.id = id;
    //   localStorage.setItem('user', JSON.stringify(state.user));
    },
    // logoutUser: (state) => {
    //   state.user = null;
    //   localStorage.removeItem('user');
    //   toast.success('Logged out successfully');
    // },
    logoutUser: (state) => {
        state.name = "";
        state.email = "";
        state.token = "";
        state.role = "";
        state.id = "";
      },

    toggleTheme: (state) => {
      const {emerald,forest } = themes;
      state.theme = state.theme ===forest ?emerald :forest;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { setLoggedInUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
