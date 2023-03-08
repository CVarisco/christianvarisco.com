module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Lusitana"', "serif"],
    },
  },
  plugins: [],
};
