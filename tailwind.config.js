const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      primary: '#f6911e',
      primaryDark: '#0046cc',
      error: '#ea0C00',
      errorDark: '#b91c1c'
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
