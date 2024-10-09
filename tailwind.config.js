/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'samsung-orange': '#CF5D3E',
        'samsung-orange-dark': '#B8462F',
      },
    },
  },
  plugins: [],
}