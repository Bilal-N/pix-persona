import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./app/css/app";
import colors from "./app/css/colors";
import { keyframes } from "./app/css/keyframes";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/css/**/*.{js,jsx,ts,tsx}",
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
          value: colors.bluish,
        },
        neon: {
          value: colors.neon,
        },
        darkTeal: {
          value: colors.darkTeal,
        },
        gray: {
          value: colors.gray,
        },
        black: {
          value: colors.black,
        },
        white: {
          value: colors.white,
        },
        blackAlpha60: {
          value: colors.blackAlpha60,
        },
      },
      fonts: {
        inter: { value: "var(--font-inter), sans-serif" },
      },
      spacing: {},
      // animations: {
      //   slideAndFadeInUp: {
      //     value: "spin 1s linear infinite",
      //   },
      // },
    },
    breakpoints: {
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1120px",
      xl: "1600px",
      "2xl": "1920px",
    },
    keyframes,
  },

  globalCss,
  watch: true,
  // The output directory for your css system
  outdir: "styled-system",
});
