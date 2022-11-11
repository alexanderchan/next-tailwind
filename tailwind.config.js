/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@alexmchan/preset-tailwind')],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },

  plugins: [require('@tailwindcss/typography')],
}
