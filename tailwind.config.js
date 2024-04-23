/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xxs': '459px',
        'xs': '465px',
        'xxl': '1360px',
        'xxl2': '1420px',
      },
      fontSize: {
        'tiny': '0.5rem', // 10px
      },

    },
  },
  plugins: [],
}

