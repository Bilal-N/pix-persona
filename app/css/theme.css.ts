import { createGlobalTheme } from "@vanilla-extract/css";
import { Inter } from "next/font/google";
import { base } from "./base";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const vars = createGlobalTheme(":root", {
  structure: {
    gridContainer: {
      maxWidth: "1080px",
    },
  },
  color: {
    bluish: "#01465A",
    neon: "#EAE555",
    darkTeal: "#00273b",
    gray: "#909090",
    black: "#000000",
    white: "#ffffff",
    blackAlpha60: "rgba(0, 0, 0, 0.6)",
  },
  font: {
    inter: inter.style.fontFamily,
    // h1: {
    //   ...heading,
    //   fontSize: base(4.5),
    //   lineHeight: base(5),
    //   margin: `0 0 ${base(2)}`,
    // },
  },
  spacers: {
    small: `${base(1)} 0`,
    medium: `${base(2)} 0`,
    large: `${base(3)} 0`,
    xLarge: `${base(4)} 0`,
    xxLarge: `${base(5)} 0`,
  },
  zIndex: {
    page: "10",
    modal: "20",
    header: "30",
  },
});
