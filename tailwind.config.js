/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "small" : "400px"
      },
      colors: {
        "main-color": "var(--main-color)",
        "main-gold": "var(--main-gold)"
      },
      boxShadow: {
        "btn-shadow": '0px 0px 10px rgba(0, 0, 0, 0.25), inset 0px 0px 50px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
