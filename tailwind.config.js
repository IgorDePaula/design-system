/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    colors: {
      "white": '#fff',
      "klub": {
        primary: "#3bc236",
        hover: "#2f9b2b",
      },
      "connexio": {
        primary: {
          light: "#ff8a00",
          DEFAULT: "#f95c0e",
          dark: "#e73c1e",
          ambar: "#ff8f00",
        },
        hover: "#cc6e00",
        secundary: "#2c8476",
      },
      gray: {
        100: "#f3f4f6",
        200: "#ccc7be",
        400: "#99948f",
        600: "#66635f",
      },
    },
  },
  plugins: [],
}
