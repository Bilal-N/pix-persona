import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { base, htmlFontSize, baselinePX } from "./base";
import queries from "./queries";

const heading = {
  fontFamily: vars.font.inter,
  fontWeight: 600,
  letterSpacing: -2,
};

globalStyle("*", {
  boxSizing: "border-box",
});
globalStyle("html", {
  fontFamily: vars.font.inter,
  fontWeight: "bold",
  fontSize: htmlFontSize,
  height: "100%",
  lineHeight: `${baselinePX}px`,
  "@media": {
    [queries.m]: {
      fontSize: htmlFontSize * 0.8,
    },
  },
});
globalStyle("html, body", {
  margin: 0,
  color: vars.color.black,
  backgroundColor: vars.color.neon,
});
globalStyle("h1", {
  ...heading,
  fontSize: base(4.5),
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`,
});
globalStyle("h2", {
  ...heading,
  fontSize: base(3.3),
  lineHeight: base(3.3),
  margin: `${base(2)} 0`,
});
globalStyle("h3", {
  ...heading,
  fontSize: base(2.4),
  lineHeight: base(2.9),
  margin: `${base(2)} 0 ${base(1.5)}`,
});
