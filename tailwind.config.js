/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind.achan.preset.config')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/typography',
    // require('@tailwindcss/forms')({
    //   strategy: 'base', // only generate global styles
    //   strategy: 'class', // only generate classes
    // }),
  ],
}
