/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    colors: {
      'bgColor': '#E1E6E1',
      'secColor': '#232528',
      'white':"#ffffff",
      "black":"#020617",
      "pink":"#db2777",
      "purple":"#312e81",
      "one":"#CACFF9",
      "two":"#F5CBD9",
      "three":"#F4BCCD",
  
    },
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
}

