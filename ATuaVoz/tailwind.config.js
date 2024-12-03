const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
  module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: "Helvetica, Arial, sans-serif",
    },
    extend: {
      colors: {
        back: "#f6f6f6",
        nav: "#262626",
        hero: "#464646",
        "primary-muted": "oklch(var(--primary-muted) / <alpha-value>)",
        "option-text": "oklch(var(--option-text) / <alpha-value>)", 
        "--label": "var(--label)",
        "--new": "var(--new)",
      },
      placeholderColor: {
        'light-mode': '#999999',
        'dark-mode': '#f6f6f6',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
  });


