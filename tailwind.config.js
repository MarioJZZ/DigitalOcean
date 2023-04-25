/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html'
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1rem',
        '2xl': '7rem',
      }
    },
    extend: {
      spacing: {
        'quater': '25%',
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#081b4b',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-medium': '#002c9b',
        'do-blue-light': '#0069ff',
        'do-blue-lighter': '#f9fafe',
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
         'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      width: {
        '88': '22rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}