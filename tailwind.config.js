/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorsPortalTheme: {
          primary: "#2196F3",
          secondary: "#444445",
          accent: "#BD9C74",
          neutral: "#BAD8E0",
          info: "#D668E3",
          success: "#6db784",
          warning: "#FFAB00",
          error: "#f2413a",
          "base-100": "#fff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
