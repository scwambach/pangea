import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2d291f",
        "black-translucent": "rgba(45, 41, 31, 0.2)",
        offwhite: "#f5f4ee",
        "offwhite-translucent": "rgba(245, 244, 238, 0.9)",
        paprika: "#b54e26",
        "paprika-translucent": "rgba(181, 78, 38, 0.5)",
        brick: "#8f1402",
        "brick-translucent": "rgba(143, 20, 2, 0.5)",
        pizzaria: "#805336",
        "pizzaria-translucent": "rgba(128, 83, 54, 0.5)",
        "pizzaria-dark": "#66422b",
        tan: "#cdc2af",
        wheat: "#c09d4f",
        "wheat-translucent": "rgba(192, 157, 79, 0.5)",
        pangea: "#a97858",
        "pangea-translucent": "rgba(169, 120, 88, 0.8)",
        "pangea-dark": "#8b6c4e",
      },
      boxShadow: {
        icon: "0 4px 4px 4px rgba(0, 0, 0, 0.15)",
      },
      screens: {
        mobile: "320px",
        "mobile-md": "420px",
        "mobile-lg": "480px",
        tablet: "640px",
        "tablet-md": "768px",
        "tablet-lg": "880px",
        "tablet-xl": "992px",
        desktop: "1024px",
        "desktop-md": "1100px",
        "desktop-lg": "1200px",
        widescreen: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
