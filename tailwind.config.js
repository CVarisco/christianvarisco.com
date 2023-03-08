/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-helvetica)"],
      },
      colors: {
        lime: "#CBFC01",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
