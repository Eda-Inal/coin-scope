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
        darkBackground: "#1a202c",
        lightBackground: "#ffffff",
        darkText: "#ffffff",
        lightText: "#2d3748",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
