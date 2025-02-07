import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#242424",
        lightBackground: "#f8f8f8",
        darkText: "#ffffff",
        lightText: "#2d3748",
        primary:"#0ea5e9",
        lightSecondary:"#E6E6E6",
        darkSecondary:"#383838"
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
