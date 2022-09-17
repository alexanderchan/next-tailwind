/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1px': '1px', // px
        '0px': '0px', // 0
        '2px': '0.125rem', // 0.5
        '4px': '0.25rem', // 1
        '6px': '0.375rem', // 1.5
        '8px': '0.5rem', // 2
        '10px': '0.625rem', // 2.5
        '12px': '0.75rem', // 3
        '14px': '0.875rem', // 3.5
        '16px': '1rem', // 4
        '20px': '1.25rem', // 5
        '24px': '1.5rem', // 6
        '28px': '1.75rem', // 7
        '32px': '2rem', // 8
        '36px': '2.25rem', // 9
        '40px': '2.5rem', // 10
        '44px': '2.75rem', // 11
        '48px': '3rem', // 12
        '56px': '3.5rem', // 14
        '64px': '4rem', // 16
        '80px': '5rem', // 20
        '96px': '6rem', // 24
        '112px': '7rem', // 28
        '128px': '8rem', // 32
        '144px': '9rem', // 36
        '160px': '10rem', // 40
        '176px': '11rem', // 44
        '192px': '12rem', // 48
        '208px': '13rem', // 52
        '224px': '14rem', // 56
        '240px': '15rem', // 60
        '256px': '16rem', // 64
        '288px': '18rem', // 72
        '320px': '20rem', // 80
        '384px': '24rem', // 96
      },
      fontSize: {
        fontSize: {
          '12px': ['0.75rem', { lineHeight: '1rem' }],
          '14px': ['0.875rem', { lineHeight: '1.25rem' }],
          '16px': ['1rem', { lineHeight: '1.5rem' }],
          '18px': ['1.125rem', { lineHeight: '1.75rem' }],
          '20px': ['1.25rem', { lineHeight: '1.75rem' }],
          '24px': ['1.5rem', { lineHeight: '2rem' }],
          '30px': ['1.875rem', { lineHeight: '2.25rem' }],
          '36px': ['2.25rem', { lineHeight: '2.5rem' }],
          '48px': ['3rem', { lineHeight: '1' }],
          '60px': ['3.75rem', { lineHeight: '1' }],
          '72px': ['4.5rem', { lineHeight: '1' }],
          '96px': ['6rem', { lineHeight: '1' }],
          '128px': ['8rem', { lineHeight: '1' }],
        },
      },
    },
  },
  plugins: [],
}
