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
        darkBackground: "#0e1629",
        lightBackground: "#ffffff ",
        darkText: "#ffffff",
        lightText: "#2d3748",
        primary:"#0ea5e9",
        lightSecondary:"#f7f7f7",
        darkSecondary:"#1F2937",
        darkCard: "#2C3A66"
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
