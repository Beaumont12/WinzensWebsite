module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#097969",
        secondary: "#F9F6EE",
        brandDark: "#270c03", // Added missing '#' for hex color
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem",
          sm: "0rem",
        },
      },
      boxShadow: {
        "3xl": "0 40px 70px -14px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        flip: "flip 2s ease-in-out", // Define the flip animation
      },
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateY(0)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
