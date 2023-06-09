/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1250px',
    },
    extend: {
      colors: {
        'primary-blue': '#0992C8',
        'dark-blue':"#053A50",
        'sky-blue':"#5ECCF8",
        'blue': "#BFE0EE",
        'light-blue': "#ECF4F8",
        'white-blue': "#f8f8f8",
        'white': '#FFF',
        'black': '#000',
        'dark': '#343434',
        'gray': '#7d7d7d',
        'gray-100': '#E0E0E0',
        'gray-200': '#D8D8D8',
        'gray-300': '#BDBDBD',
        'gray-500': '#828282',
        'light-gray': "#dadada",
        'green': '#24ae7c',
        'red': '#EB5757',
        'orange': '#EE6E33',
        'pink':'#FFF5F3'
      },
    },
  },
  plugins: [],
}
