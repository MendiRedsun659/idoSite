/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#6A0DAD',
          900: '#4B0082',
        },
        secondary: {
          400: '#FFD700',
          500: '#FFC000',
        },
        accent: {
          500: '#FF4D4F',
          600: '#FF2E2E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
     require('@tailwindcss/line-clamp')
  ]
}