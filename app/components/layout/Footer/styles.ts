import { css } from "../../../../styled-system/css";
import colors from "../../../css/colors";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

export const footer = css({
  padding: `${base(6)} 0 ${base(16)}`,
  textAlign: "center",
  color: "token(colors.white)",
  backgroundColor: "token(colors.black)",
});
export const title = css({
  fontSize: base(4),
  lineHeight: base(4),
  fontWeight: 600,
  textAlign: "center",
});
export const clickablePrototypeContainer = css({
  position: "fixed",
  bottom: 80,
  display: "flex",
  width: "100%",
  margin: "0 auto",
  zIndex: 100,
});
export const clickablePrototype = css({
  fontSize: base(0.6),
  fontWeight: 500,
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  padding: `${base(0.6)} ${base(1.2)}`,
  gap: 20,
  alignItems: "center",
  textAlign: "center",
  borderRadius: 10,
  backgroundColor: "token(colors.white)",
  boxShadow: "0 6px 14px -5px rgba(0,0,0,.08)",
});
export const bullet = css({
  position: "relative",
  display: "inline-block",
  width: 18,
  height: 18,
  borderRadius: 20,
  zIndex: 10,
  backgroundColor: "token(colors.bluish)",
  "& > i": {
    position: "absolute",
    top: -3,
    left: -3,
    display: "block",
    width: 24,
    height: 24,
    zIndex: -1,
    borderRadius: 20,
    border: "thin solid token(colors.bluish)",
    backgroundColor: "transparent",
  },
});
export const actionText = css({
  textTransform: "uppercase",
  color: "token(colors.black)",
});

export const callToAction = css({
  padding: 16,
  borderRadius: 8,
  cursor: "pointer",
  textTransform: "uppercase",
  color: "token(colors.black)",
  backgroundColor: "token(colors.neon)",
});
export const contactDetails = css({
  padding: `${base(1)} ${base(2)} ${base(0.2)}`,
  cursor: "pointer",
  color: "token(colors.white)",
  backgroundColor: "token(colors.black)",
  xl: { padding: `${base(1.8)} ${base(2)}` },
  "& ul": {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    xl: { justifyContent: "flex-end" },
  },
  "& li span": {
    lineHeight: 0,
  },
  "& li": {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  "& a": {
    fontSize: base(0.8),
    position: "relative",
    zIndex: 100,
    textDecoration: "none",
    color: "token(colors.white)",
    xl: { fontSize: base(1.1) },
  },
});
