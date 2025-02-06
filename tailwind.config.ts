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
        darkBackground: "#262e3f",
        lightBackground: "#f8f8f8",
        darkText: "#ffffff",
        lightText: "#2d3748",
        primary:"#3b82f6",
        lightSecondary:"#E6E6E6",
        darkSecondary:"#3A4A63"
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
