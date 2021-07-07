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
      blue: colors.blue,
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
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-in',
        bounce: 'bounce 1s infinite 400ms',
        bounce200: 'bounce .5s infinite 200ms',
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
