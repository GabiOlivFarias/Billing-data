/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      90: '360px',
      45: '180px'

    },
    minHeight: {
      180: '720px',
    },
    fontFamily: {
      insaniburger: [
        'Insaniburger-Bold',
        'Insaniburger-Light',
        'Insaniburger-Regular',
      ],
    },
    extend: {
      colors: {
        'primary': '#680000',
        'secundary': '#8b0304',
        'tertiary': '#b11116',
        'quaternary': '#ff0000'
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-50': '50% 50%',
        'size-60': '60% 60%',
      },
      backgroundColor: {
        'light-red': '#f9d2d2',
        'medium-red': '#f75959',
      },
      dropShadow: {
        'red-1': '0px 5px 10px rgba(247,89,89,1)',
      },
      fontSize: {
        button: '20px',
        'subtitle-1': '20px',
        h1: '128px',
        h2: '48px',
        h3: '32px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
      },
    },
  },
  plugins: [],
}
