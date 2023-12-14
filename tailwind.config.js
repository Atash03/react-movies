module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        customGray: "#727271",
        customWhite: "#DCE0D9",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        sans2: ["Oxanium", "sans-serif"],
        serif: ["Orelega One", "serif"],
        serif1: ["Kalnia", "serif"],
      },
    },
  },
  plugins: [],
};
