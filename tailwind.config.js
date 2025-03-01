/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteTransparent: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

