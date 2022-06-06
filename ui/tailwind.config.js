module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary":'#40c708'
        },
        light :{
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary":'#40c708'
        }
      },
    ],
  },
}
