module.exports = {
  purge: ["./**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        table: {
          "light-bg": "#687DED",
        },
      },
      fontFamily: {
        pattaya: ["Pattaya", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "dark", "hover", "focus", "even", "odd"],
      tableLayout: ["hover", "focus"],
    },
  },
  plugins: [],
};
