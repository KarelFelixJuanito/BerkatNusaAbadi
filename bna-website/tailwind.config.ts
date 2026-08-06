import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bna: {
          navy: "#1e293b", 
          red: "#ef4444",  
          light: "#f8fafc", 
        },
      },
    },
  },
  plugins: [],
};
export default config;