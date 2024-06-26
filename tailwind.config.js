/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"  ],
  darkMode: "class",
  mode: 'jit',
  theme: {
    container: {
      DEFAULT: '1rem',
      sm: '2rem',
      md: '3rem',
      lg: '4rem'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ADB5',
          black: '#222813',
          gray: '#393E46  ',
          white: '#EEEEEE',
        }
      }
    }
  },
  plugins: [],
}