/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#e9e1b0",
      },
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
        display: ['"Dosis"', "sans-serif"],
      },
    },
  },
  plugins: [],
};