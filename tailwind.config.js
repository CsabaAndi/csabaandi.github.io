/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      fontSize: {
        'tiny': '0.5rem', // 10px
      },

    },
  },
  plugins: [],
}

