module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07132A",
        accent: "#06B6D4",
        gold: "#F59E0B"
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
