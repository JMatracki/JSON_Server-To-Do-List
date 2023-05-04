/** @type {import('tailwindcss').Config} */
const {colors: defaultColors} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'bg1' : "#0093E9",
        'bg2' : "#80D0C7"
    },
    },
  },
  plugins: [],
}

