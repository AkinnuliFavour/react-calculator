/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.htmml",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/Buttons.jsx",
  ],
  theme: {
    screens: {
      xxxsm: "320px",
      xxsm: "375px",
      xsm: "425px",
    },
    extend: {
      colors: {
        bg: "#1c1e1f",
        fromBg: "rgba(28, 30, 31, 0.9)",
        toBg: "rgba(28, 30, 31, 0.1)",
        textColor: "#8d8e8f",
      },
      backgroundImage: {
        "profile-picture": "url('./src/assets/profile/Person-p-1600.jpeg')",
      },
    },
  },
  plugins: [],
};
