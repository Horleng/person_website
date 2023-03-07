/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      Patua:"Patua One",
      Playfair:"Playfair Display",
      Noto_Sans:"Noto Sans",
      Rampart:"Rampart One",
      Shantell_Sans:"Shantell Sans",
      Sono:"Sono",
      Tilt_Warp:"Tilt Warp",
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
