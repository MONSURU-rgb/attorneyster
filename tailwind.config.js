/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      caramount: ["Cormorant-Garamond", "Outfit", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      script: ["Luxurious-Script", "sans-serif"]
    },
    extend: {
      colors: {
        darkgrey: "#D1B06B",
        lightblack: "#1F2732",
        deepbrown: "#2E3947",
        blacklike: "#161D27",
        almostwhite: "#D7D7D7",
        white: "#FFFFFF"
      },
      
    },
  },
  plugins: [],
}

