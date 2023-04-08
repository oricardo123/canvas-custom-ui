/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        HomeContainer2TextBox: 'rgba(189, 189, 189, 0.3)',
        FooterColor: 'rgba(115, 62, 29, 1)',
      },
      mixBlendMode: {
        screen: 'screen',
        'color-burn': 'color-burn',
      },
    },
  },
  variants: {
    extend: {
      mixBlendMode: ['responsive'],
    },
  },
  plugins: [require('flowbite/plugin')],
  content: ['./node_modules/flowbite/**/*.js'],
};



