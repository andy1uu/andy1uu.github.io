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
        navBackground: "#252829",
        lightBackground: "#fdf8ec",
        darkBackground: "#374151",
        primary: "#32cc8c",
        secondary: "#fdf8ec",
        tertiary: "#1db954"
      }
    },
    fontFamily: {
      primary: ["Rubik", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
