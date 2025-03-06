/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(225, 50%, 48%)',
        'secondary': 'hsl(180, 17%, 95%)',
        'colorOne': 'hsl(15, 74%, 70%)',
        'colorTwo': 'hsl(28, 100%, 82%)',
        'hover': 'hsl(225, 56%, 59%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 12%)',
        'blackColor': 'hsl(0, 0%, 12%)',
        'textColor': 'hsl(240, 1%, 48%)',
        'greyText': 'rgb(145, 145, 145)',
        'greyBg': 'hsl(0, 0%, 96%)',
        'inputColor': 'hsl(330, 12%, 97%)',
        'primaryColor': 'hsl(225, 50%, 48%)',
        'lightGrey': '#f5f5f5'
      },
      fontFamily: {
        sans: ['Spartan', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif']
      },
      screens: {
        'xs': '480px',
        'sm': '570px',
        'md': '768px',
        'lg': '960px',
        'xl': '1024px',
        '2xl': '1332px',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
  important: true
} 