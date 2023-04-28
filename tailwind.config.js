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
        'slider_1' : "url('/sliderImages/slider (1).jpg')",
        'slider_2' : "url('/sliderImages/slider (2).jpg')",
        'slider_3' : "url('/sliderImages/slider (3).jpg')",
        'about': "url('/images/about.webp')",
        'court' : "url('/images/court.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
