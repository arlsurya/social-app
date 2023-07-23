/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  },
  plugins: [],
}

