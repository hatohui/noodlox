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
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
        },
        accent: "var(--color-accent)",
        section: "var(--color-section)",
        background: "var(--color-background)",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        mono: "var(--font-geist-mono)",
      },
      fontSize: {
        title: "var(--text-title)",
        large: "var(--text-large)",
        base: "var(--text-base)",
        small: "var(--text-small)",
        xs: "var(--text-xs)",
      },
    },
  },
  plugins: [],
};
export default config;
