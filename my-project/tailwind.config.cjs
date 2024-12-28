/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // maxWidth: {
      //   '8xl': '92rem', // You can set the width to your desired value
      // },
      screens:{
        'xs':'10rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui:{
    themes:['emerald','forest']
  }
}

