/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'RubikDoodleShadow':['Rubik Doodle Shadow','sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
]
}

