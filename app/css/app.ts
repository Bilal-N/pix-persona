import { defineGlobalStyles } from "@pandacss/dev";
import colors from "./colors";
import { base, baselinePX, htmlFontSize } from "./base";
import { h1, h2, h3, body } from "./type";

export const globalCss = defineGlobalStyles({
  "*": { boxSizing: "border-box" },
  "html, body": {
    margin: 0,
    color: colors.bluish,
    backgroundColor: colors.neon,
  },
  html: {
    fontFamily: "token(fonts.inter)",
    fontWeight: "bold",
    fontSize: htmlFontSize * 0.6,
    lineHeight: `${baselinePX}px`,
    height: "100%",
    sm: { fontSize: htmlFontSize * 0.8 },
    md: { fontSize: htmlFontSize },
  },
  h1: { ...h1 },
  h2: { ...h2 },
  h3: { ...h3 },
  p: { ...body, marginBottom: base(2) },
  "ol, ul": {
    padding: `0 0 0 ${base()}`,
    margin: `0 0 ${base()} 0`,
  },
  li: { ...body },
});
