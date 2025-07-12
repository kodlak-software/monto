/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {

      transparent: 'transparent',

      'orange' : {

        100: '', 
        200: '',
        300: '#fca266',
        400: '',
        500: '#F58B38',
        600: '#FE7C2E',
        700: '',
        800: '',
        900: '',
      },

      'gray': {

        100: '#F4F7FB', 
        200: '#EFEFEF',
        300: '#D9D9D9',
        400: '#B4B4B4',
        500: '#909090',
        600: '#6E6E6E',
        700: '#303030',
        800: '#2C3A4E',
        900: '#1A2029',
      },



    }, 
    extend: {}
  },
  plugins: [],
}

