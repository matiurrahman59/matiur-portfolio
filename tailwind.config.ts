import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        gray: "var(--gray)",
        gray90: "var(--gray90)",
        dark: "var(--dark)",
        dark90: "var(--dark90)",
        dark80: "var(--dark80)",
        pink: "var(--pink)",
        blue: "var(--blue)",
        orange: "var(--orange)",
      },

      fontFamily: {
        sans: ["var(--font-Poppins)", ...fontFamily.sans],
        roboto: ["var(--font-Roboto)", ...fontFamily.sans],
      },

      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(315deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(315deg) translateX(-1400px)",
            opacity: "0",
          },
        },
      },

      transitionProperty: {
        height: "height",
      },

      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
export default config;
