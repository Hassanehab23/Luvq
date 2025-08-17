/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}", // لو شغال Angular أو HTML عادي
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { transitionProperty: {
        'spacing': 'margin, padding',
        'height': 'height',
      }},
  },
  plugins: [
    require('flowbite/plugin') // فعل إضافة Flowbite
  ],
}
