/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gold: '#C7AB79',
      green: '#37754D',
      'grey-icon': '#585858',
      'grey-hover': '#5D5D5D',
      'grey-disabled': '#D5D5D5',
      'grey-text1': '#757575',
      'grey-text2': '#A6A4A4',
      'grey-bg': '#414141',
    },
    extend: {
      width: {
        15: '3.75rem',
      },
      height: {
        15: '3.75rem',
      },
      fontFamily: {
        quattrocento: 'Quattrocento, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      },
      transitionProperty: {
        height: 'height'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '3.5xl': '2rem',
        '6.5xl': '4rem',
      },
      borderRadius: {
        '4xl': '1.875rem',
      },
      boxShadow: {
        normal: '2px 5px 30px rgba(159, 159, 159, 0.2)',
      },
    },
  },
  plugins: [],
}
