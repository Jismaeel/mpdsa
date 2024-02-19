/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    safelist: ['animate-[fade-in-right_1s_ease-in-out]','animate-[fade-out_1s_ease-out]', 'animate-[fade-in-down_1s_ease-in-out]']
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
}

