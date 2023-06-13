/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F172A",
        "secondary": "#1A2335",
        "tertiary": "#1E293B",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}