/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vibrant-purple": "#c55df6",
         "pale-yellow": "#ffe69e",
         "custom-orange": "#e57c04",
         "soft-lavender": "#b596e5",
         "peachy-pink": "#ffa69e", 
      }
    },
  },
  plugins: [],
}
