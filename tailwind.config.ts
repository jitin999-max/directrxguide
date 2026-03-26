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
        teal: {
          DEFAULT: "#0D9E80",
          50: "#E8FAF5",
          100: "#C4F0E3",
          200: "#8ADFC8",
          300: "#50CEAC",
          400: "#23B991",
          500: "#0D9E80",
          600: "#0A7E66",
          700: "#075F4D",
          800: "#054033",
          900: "#022018",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
