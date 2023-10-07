/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
      },
      colors: {
        custom: '#252626',
        primary:'#e8caa4',
        secondary:'#cc2a41',
        azulSapphire:'#64908a'
      },
    },
  },
  plugins: [],
}

