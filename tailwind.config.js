/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This creates the class: font-sanskrit
        sanskrit: ['"Tiro Devanagari Sanskrit"', 'serif'],
        main: ['"Cormorant Garamond"', 'serif']
      },
    },
  },
  plugins: [],
}