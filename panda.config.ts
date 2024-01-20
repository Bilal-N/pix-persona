import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./app/css/app";
export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
  ],

  // Removing default tokens
  presets: [],

  // Removing default utilities
  eject: true,

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        bluish: {
          value: "#01465A",
        },
        neon: {
          value: "#EAE555",
        },
        darkTeal: {
          value: "#00273b",
        },
        gray: {
          value: "#909090",
        },
        black: {
          value: "#000000",
        },
        white: {
          value: "#ffffff",
        },
        blackAlpha60: {
          value: "rgba(0, 0, 0, 0.6)",
        },
      },
      spacing: {},
    },
    breakpoints: {
      xs: "400",
      sm: "600",
      md: "900",
      lg: "1120",
      xl: "1600",
      "2xl": "1920",
    },
  },

  globalCss,

  outExtension: "js",

  // The output directory for your css system
  outdir: "styled-system",
});
