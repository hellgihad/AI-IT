/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { 900:'#093339', 600:'#08898E', 400:'#6AACA4' } }
    }
  },
  plugins: []
}
