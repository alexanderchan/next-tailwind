/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@alexmchan/preset-tailwind')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms')({
    //   strategy: 'base', // only generate global styles
    //   strategy: 'class', // only generate classes
    // }),
  ],
}
