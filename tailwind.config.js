/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3d55cc",
        "light": "#e5e7eb",
        "lightest": "#ffffff",
        "Darkest": "000000"
      }
    },
  },
  plugins: [],
}