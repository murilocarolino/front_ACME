/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'marrom':'#470000',
      'vermelho':'#8E0000',
      'branco':'#FFFFFF',
      'rosa':'#DE0000'
    },
    extend: {
      fontFamily: {
        'Niramit': ['Niramit', 'sans-serif']
      },
      spacing: {
        '100': '10rem',
        '250': '15rem'
      }
    },
  },
  plugins: [],
}

