/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#65B968",
        "boxdark-1": "#24303F",
        "boxdark-2": "#1A222C",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
