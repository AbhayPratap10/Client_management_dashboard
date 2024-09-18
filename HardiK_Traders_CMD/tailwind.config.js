/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:'#013c7b',
        customOrange:'#FE8100',
        customRed:"#E70001",
        
      }
    },
  },
  plugins: [],
}