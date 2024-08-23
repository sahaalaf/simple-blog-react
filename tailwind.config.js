/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #C41740, #EA9C28)',
        'hover-btn': 'linear-gradient(to right, #EA9C28, #C41740)',
      },
      textColor: {
        'gradient': 'transparent',
      },
      scale: {
        'custom': '1.01'
      }
    },
    variants: {
      extend: {
          opacity: ['group-hover'],
          transform: ['group-hover'],
      },
  },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage: theme('backgroundImage.custom-gradient'),
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
      });
    },
  ],
}
