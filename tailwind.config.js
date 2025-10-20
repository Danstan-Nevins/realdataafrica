/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07132A",   // Deep corporate blue-black
        accent: "#06B6D4",    // RealData Africa turquoise
        gold: "#F59E0B",      // Warm highlight gold
        softgray: "#F3F4F6"   // Background gray
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(6,182,212,0.4)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-out"
      }
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
