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
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
