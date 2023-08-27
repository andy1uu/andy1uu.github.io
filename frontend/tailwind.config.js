/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkText: "#041a10",
        lightText: "#f5f5f5",
        darkBackground: "#041a10",
        lightBackground: "#f5f5f5",
        primary: "#1db954",
        secondary: "#f5f5f5",
        tertiary: "#32cc8c",
      },
    },
    fontFamily: {
      primary: ["Rubik", "sans-serif"],
      secondary: ["Comfortaa", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
