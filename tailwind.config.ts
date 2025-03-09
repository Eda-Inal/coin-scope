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
        darkBackground: "#13112b",
        lightBackground: "#ffffff ",
        darkText: "#ffffff",
        lightText: "#2d3748",
        primary:"#0288d1",
        lightSecondary:"#f7f7f7",
        darkSecondary:"#263354",
        darkCard: "#2C3A66"
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
