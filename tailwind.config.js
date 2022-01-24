module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
    animation: {
      fadeIn:"fadeIn 2s ease-in-out forwards"
    },
    keyframes:{
      fadeIn: {
        "0%": {opacity: 0},
        "100%": {opacity: 1},
      }
    },
  },
  plugins: [],
}
