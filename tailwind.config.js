/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: "0.3em",
    },
    extend: {
      colors: {
        brown: "#c4783a",
        gray: "#788481",
        white: "#FCFCFE",
      },
    },
  },
  plugins: [],
};
