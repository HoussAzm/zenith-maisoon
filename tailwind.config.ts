import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdfcfa",
          100: "#f5f2ec",
          200: "#e9e3d6",
          300: "#d6cdb8",
          400: "#b6a98a",
        },
        clay: {
          300: "#e8d08b",
          400: "#d1ac4e",
          500: "#b58a2e",
          600: "#93701f",
          700: "#725617",
          800: "#4f3b10",
        },
        gold: {
          300: "#ecd9b0",
          400: "#ddc188",
          500: "#c8a35f",
          600: "#a8834a",
        },
        ink: {
          50: "#f7f6f4",
          100: "#ece9e3",
          400: "#78746c",
          600: "#4a4740",
          800: "#2b2925",
          900: "#1c1a17",
          950: "#121110",
        },
        palm: {
          500: "#a9822e",
          600: "#87661f",
          700: "#6b5119",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(28, 20, 14, 0.25)",
        soft: "0 4px 24px -8px rgba(28, 20, 14, 0.15)",
      },
      backgroundImage: {
        "zellige": "radial-gradient(circle at 1px 1px, rgba(193,154,63,0.18) 1px, transparent 0)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
