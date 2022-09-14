/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": "'Work Sans', sans-serif"
      },
      colors: {
        olive: {
          50: '#91937d',
          100: '#888B73',
          200: '#7F8368',
          300: '#767B5E',
          400: '#6D7354',
          500: '#656A49',
          600: '#5C623F',
          700: '#535A35',
          800: '#4A522A',
          900: '#414a20'
        },
      }
    },
  },
  plugins: [],
}
