/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkText: "#041a10",
        lightText: "#fdf8ec",
        darkBackground: "#041a10",
        lightBackground: "#fdf8ec",
        primary: "#1db954",
        secondary: "#fdf8ec",
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
