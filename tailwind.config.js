const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["src/**/*.js"],
  theme: {
    colors: {
      // Configure your color palette here
      // homeColor: "#00779F",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        spin: "spin 1s linear infinite",
        progressBarLoader: "progressBarLoader 3s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        progressBarLoader: {
          "0%": {
            transform: "translateX(calc(-100% + 10px))",
          },

          "50%": {
            transform: "translateX(calc(200px - 10px))",
          },

          "100%": {
            transform: "translateX(calc(-100% + 10px))",
          },
        },
      },
    },
  },
});
