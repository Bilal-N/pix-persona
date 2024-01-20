import { css } from "../../../styled-system/css";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

export const hero = css({
  display: "flex",
  alignItems: "center",
  height: "calc(100vh - 98px)",
  textAlign: "center",
});
export const heading = css({
  position: "relative",
  color: "token(colors.bluish)",
  marginBottom: base(4),
  "& > span": {
    display: "block",
    opacity: 0,
    wordWrap: "break-word",
  },
  "& span:nth-child(1)": {
    animation: "slideAndFadeInUp 0.5s ease 1.1s 1 normal forwards",
  },
  "& span:nth-child(2)": {
    animation: "slideAndFadeInUp 0.5s ease 1.3s 1 normal forwards",
  },
  "& span:nth-child(3)": {
    animation: "slideAndFadeInUp 0.5s ease 1.5s 1 normal forwards",
  },
});

export const description = css({
  fontWeight: 300,
  maxWidth: 632,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 0,
  opacity: 0,
  animation: "slideAndFadeInUp 0.5s ease 1.4s 1 normal forwards",
  color: "token(colors.bluish)",
});
