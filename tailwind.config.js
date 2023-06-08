/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'urban' :['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

