/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      filter: {
        'custom-drop-shadow': 'drop-shadow(7px -2px 6px #a9f7f766)',
      },
      textShadow: {
        DEFAULT: '0 1px 0 rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        neon:"#74ee15",
        purple:'#915edd',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      innerShadow:{
        boxShadow: 'inset 3px -2px 4px 3px #ffffff42',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};