/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css,scss}",
  ],
  theme: {
    extend: {
      'animation': {
        'gradient-x-5': 'gradient-x 3s ease infinite',
        'gradient-x-10': 'gradient-x 3s ease-in-out infinite',
        'gradient-x-15': 'gradient-x 15s ease infinite',
        'gradient-y-5': 'gradient-y 5s ease infinite',
        'gradient-y-10': 'gradient-y 10s ease infinite',
        'gradient-y-15': 'gradient-y 15s ease infinite',
        'gradient-xy-5': 'gradient-xy 5s ease infinite',
        'gradient-xy-10': 'gradient-xy 10s ease infinite',
        'gradient-xy-15': 'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        'gradient-x': {
          '0%,100%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}