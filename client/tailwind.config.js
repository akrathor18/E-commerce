/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1E1E1E',
        accent: '#4CAF50',
        text:'#E0E0E0',
        hover:'#FF9800'
      },
      
    },
  },
  plugins: [],
}

