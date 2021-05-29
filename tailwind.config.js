const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    ringColor: {
      lightYellow: '#fff799',
      blue: colors.blue,
    },
    colors: {
      yellow: '#fcc603',
      lightYellow: '#fcd703',
      darkYellow: '#F29E0B',
      lightestYellow: '#FDE68A',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
    fontFamily: {
      regular: ['Vazir', 'IranSansRegular'],
    },
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      transitionProperty: ['hover', 'focus'],
      
    },
    backgroundColor: ['hover', 'focus'],
    borderColor: ['focus', 'hover'],
  },
  corePlugins: {
    ringColor: true,
  },
  plugins: [],
};
