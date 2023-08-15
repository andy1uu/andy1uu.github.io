/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        text: "#0c2711",
        background: "#fbfefc",
        primary: "#2c8c3e",
        secondary: "#d8f3dd",
        accent: "#3dc256",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
