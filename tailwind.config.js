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
        serif: ["var(--font-novela)"],
      },
      colors: {
        lime: "#CBFC01",
      },
      lineHeight: {
        hero: "4.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
