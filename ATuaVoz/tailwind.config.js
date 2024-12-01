/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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

  plugins: [],
};

