/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/svg/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        fontPrimary: "var(--color-font-primary)",
        fontSecondary: "var(--color-font-secondary)",
        highlight: "var(--color-highlight)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
};
