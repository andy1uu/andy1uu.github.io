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
      colors: { dark: "#081B12", light: "#E4F7EE", primary: "#33b679" },
    },
  },
  plugins: [],
};
