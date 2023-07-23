/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    container: {
      center: 'true',
      padding: {
          DEFAULT: '1rem'
      },
      screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1400px'
      }
  },
    extend: {
      width: {
        '128': '32rem',
        '256': '64rem',
        'cont': '86rem'
    },
    height: {
        '128': '32rem',
        '256': '64rem'
    },
    },
=======
    extend: {},
>>>>>>> 6824618f0a334697a3cb0bfc9b3b9dfdf392d000
  },
  plugins: [],
}

