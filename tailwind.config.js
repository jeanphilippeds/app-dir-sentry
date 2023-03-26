// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins',
    },
    colors: {
      ...colors,
      primary: {
        400: '#e01a37',
        500: '#d31834',
        600: '#e51736',
      },
      secondary: {
        200: '#e2ecf3',
        300: '#70ceff',
        400: '#EAF2F8',
      },
      gray: {
        ...colors.gray,
        900: '#323232',
      },
    },
    extend: {
      maxWidth: {
        'page-content': '1500px',
      },
      boxShadow: {
        'no-offset':
          '0 0px 10px 0px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      screens: {
        xs: {
          raw: '(min-width: 448px)',
        },
      },
    },
  },
  plugins: [],
  // This is ugly and is only used during the temporary Preac App state
  // When we will move to React, we will leverage the power of SSR to remove
  // the need of such ugly tweak.
  safelist: [
    'w-1/2',
    'w-1/3',
    'w-2/3',
    'w-1/4',
    'w-2/4',
    'w-3/4',
    'w-1/5',
    'w-2/5',
    'w-3/5',
    'w-4/5',
    'w-1/6',
    'w-2/6',
    'w-3/6',
    'w-4/6',
    'w-5/6',
    'w-1/12',
    'w-2/12',
    'w-3/12',
    'w-4/12',
    'w-5/12',
    'w-6/12',
    'w-7/12',
    'w-8/12',
    'w-9/12',
    'w-10/12',
    'w-11/12',
    'w-full',

    'z-[1]',
    'z-[2]',
    'z-[3]',
    'z-[4]',
    'z-[5]',
    'z-[6]',
    'z-[7]',
    'z-[8]',
    'z-[9]',
    'z-[10]',
    'z-[11]',
    'z-[12]',
    'z-[13]',
    'z-[14]',
    'z-[15]',
  ],
};
