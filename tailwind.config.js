/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        slider_1 : "url('../public/sliderImages/slider_1.jpg')",
        slider_2 : "url('../public/sliderImages/slider_2.jpg')",
        slider_3 : "url('../public/sliderImages/slider_3.jpg')",
        slider_4 : "url('../public/sliderImages/slider_4.jpg')",
        'about' : "url('../public/images/about.jpg')",
        'court' : "url('../public/images/court.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
