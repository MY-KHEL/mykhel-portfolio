/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      bgColor: "#FEFEFA",
      secColor: "#232528",
      white: "#ffffff",
      black: "#020617",
      pink: "#db2777",
      purple: "#312e81",
      green: "#15803d",
      one: "#CACFF9",
      two: "#F5CBD9",
      three: "#F4BCCD",
      slate: "#94a3b8",
      lightslate: "#e2e8f0",
      lighterslate: "#f8fafc",
    },
    extend: {},
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",

      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
};
