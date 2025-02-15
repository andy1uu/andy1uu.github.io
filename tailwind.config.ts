/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,html,css}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", ...fontFamily.sans],
      },
      colors: {
        dark: "#374151",
        light: "#ECEFEE",
        primary: "#33B679",
        secondary: "#148E66",
        tertiary: "#17F5AB",
      },
    },
  },
  plugins: [],
};
