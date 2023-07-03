const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        sky:{
          500: '#00A8FF'
        },
        slate:{
          500: '#718093'
        }
      }
    },
  },
  plugins: [],
}
