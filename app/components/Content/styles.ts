import { css } from "../../../styled-system/css";
import { h1, h2, body } from "../../css/type";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

export const defaultColor = css({
  color: "token(colors.black)",
});
const content = css({
  position: "relative",
  padding: `${base(9)} 0`,
  backgroundColor: "token(colors.black)",
});
const gridContainer = css({
  position: "relative",
  zIndex: 2,
});
const description = css({
  padding: `0 ${base(3.2)} ${base(3.2)}`,
  userSelect: "none",
  color: "token(colors.white)",
  "&:last-child": {
    paddingBottom: 0,
  },
  lg: { padding: `0 0 ${base(3.2)}` },
});
const underlineOnHover = css({
  fontWeight: 600,
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  color: "token(colors.neon)",
  "& i": {
    position: "absolute",
    left: 0,
    bottom: -8,
    display: "block",
    height: "8px",
    width: "0",
    transition: "width 0.3s",
    backgroundColor: "token(colors.neon)",
  },
  "&:hover i": {
    width: "100%",
  },
  "&:hover + & i": {
    width: "100%",
  },
});
const fontLarge = css({
  fontWeight: 600,
  letterSpacing: -2,
  margin: `0 0 ${base(2)}`,
  fontSize: base(3.5),
  lineHeight: base(4),
  lg: { fontSize: base(4.6), lineHeight: base(5) },
});
const fontMedium = css(h2);
const fontSmall = css(body);
const fontSmallX100 = css({
  fontWeight: 600,
  fontSize: base(1.6),
});
const fontLargeX10 = css({
  ...h1,
  fontSize: base(5.5),
});
const fontLargeX100 = css({
  ...h1,
  lineHeight: base(5),
  fontSize: base(5),
  md: { fontSize: base(7), lineHeight: base(7) },
  lg: { fontSize: base(10), lineHeight: base(10) },
});

const AlignLeft = css({
  textAlign: "left",
});
const AlignCenter = css({
  textAlign: "center",
});
const AlignRight = css({
  textAlign: "right",
});
const newline = css({
  display: "block",
});
const list = css({
  listStyle: "none",
  margin: 0,
  padding: `${base(2)} 0`,
});
const listItem = css({
  fontSize: "inherit",
  fontWeight: "inherit",
  paddingBottom: base(3.1),
});
const linesContainer = css({
  position: "absolute",
  inset: "0 0",
  display: "flex",
  flexDirection: "column",
  gap: 100,
  paddingTop: 160,
  zIndex: 1,
  background: "transparent",
});
const line = css({
  display: "block",
  width: "100%",
  height: 1,
  opacity: 0.075,
  backgroundColor: "token(colors.white)",
});

export const styles = {
  defaultColor,
  content,
  gridContainer,
  underlineOnHover,
  description,
  fontSmall,
  fontMedium,
  fontLarge,
  fontSmallX100,
  fontLargeX10,
  fontLargeX100,
  AlignLeft,
  AlignCenter,
  AlignRight,
  newline,
  list,
  listItem,
  linesContainer,
  line,
};
