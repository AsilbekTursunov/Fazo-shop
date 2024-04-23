/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-color": "#ED3729",
        "line-color": "#909090",
        "footer-color": "#202020",
      },
      fontFamily: {
        "full-main": "Montserrat, sans-serif",
      },
      borderColor: {
        "main-clor": "#ED3729",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
      },
      colors: {
        'link-color': '#909090',
        'main': '#ED3729',
        "social-color":'#8F8E94'
      }
    },
  },
  plugins: [],
}
