/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        baskerville: ['"Libre Baskerville"', "serif"],
        franklin: ['"Libre Franklin"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"]
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
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
      keyframes: {
        scrollLeft: {
          to: { left: "-200px" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 30s linear infinite", // Adjust the duration and timing function
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-border": {
          position: "relative",
          borderRadius: "4px",
          padding: "1px", // Adjust based on your border width
          background: "linear-gradient(140deg, #97FF67, #8E0988)", // Customize your gradient
        },
        ".gradient-border::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "calc(100% - 2px)", // Adjust based on your border width
          height: "calc(100% - 2px)", // Adjust based on your border width
          background: "#000", // Inner background color
          borderRadius: "inherit",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        },
        ".gradient-border > *": {
          position: "relative",
          zIndex: 2,
          background: "transparent", // Inner background color
          borderRadius: "inherit",
        },

        ".mask-image-gradient": {
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
        },
        ".animation-delay-1": {
          animationDelay: "calc(30s / 5 * (5 - 1) * -1)",
        },
        ".animation-delay-2": {
          animationDelay: "calc(30s / 5 * (5 - 2) * -1)",
        },
        ".animation-delay-3": {
          animationDelay: "calc(30s / 5 * (5 - 3) * -1)",
        },
        ".animation-delay-4": {
          animationDelay: "calc(30s / 5 * (5 - 4) * -1)",
        },
        ".animation-delay-5": {
          animationDelay: "calc(30s / 5 * (5 - 5) * -1)",
        },
        // ".animation-delay-6": {
        //   animationDelay: "calc(30s / 8 * (8 - 6) * -1)",
        // },
        // ".animation-delay-7": {
        //   animationDelay: "calc(30s / 8 * (8 - 7) * -1)",
        // },
        // ".animation-delay-8": {
        //   animationDelay: "calc(30s / 8 * (8 - 8) * -1)",
        // },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
