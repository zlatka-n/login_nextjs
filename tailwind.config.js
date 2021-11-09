module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        gray: ["2px solid grey", "1px"],
      },
      screens: {
        "3xl": "1601px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
