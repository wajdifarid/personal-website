/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Noto Sans"'],
    },
    extend: {
      colors: {
        sky:{
          500: '#00A8FF'
        }
      }
    },
  },
  plugins: [],
}
