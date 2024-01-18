import { globalStyle, style, keyframes } from "@vanilla-extract/css";
import { base } from "../../css/base";
import { vars } from "../../css/theme.css";

const slideAndFadeInUp = keyframes({
  "0%": {
    transform: "translateY(50px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});
const slideLeft = keyframes({
  "10%, 33%": {
    transform: "translateX(0)",
  },
  "43%, 66%": {
    transform: "translateX(-100px)",
  },
  "76%, 100%": {
    transform: "translateX(-200px)",
  },
});

export const hero = style({
  display: "flex",
  alignItems: "center",
  // padding: `${base(2)} 0 ${base(10)}`,
  height: "calc(100vh - 98px)",
  textAlign: "center",
});
export const heading = style({
  position: "relative",
  color: vars.color.bluish,
  marginBottom: base(4),
});
globalStyle(`${heading} > span`, {
  display: "block",
  opacity: 0,
  wordWrap: "break-word",
});
// globalStyle(`${heading} p`, {
//   ...h1,
//   margin: 0,
//   opacity: 0,
//   // width: 500,
//   height: 130,
//   animation: `${slideAndFadeInUp} 0.5s ease 1s 1 normal forwards, ${slideLeft} 1s ease 1s infinite normal forwards`,
//   overflow: "hidden",
// });
// globalStyle(`${heading} p span`, {
//   width: 200,
// });
// globalStyle(`${heading} p`, {
// });
globalStyle(`${heading} span:nth-child(1)`, {
  animation: `${slideAndFadeInUp} 0.5s ease 1.1s 1 normal forwards`,
});
globalStyle(`${heading} span:nth-child(2)`, {
  animation: `${slideAndFadeInUp} 0.5s ease 1.3s 1 normal forwards`,
});
globalStyle(`${heading} span:nth-child(3)`, {
  animation: `${slideAndFadeInUp} 0.5s ease 1.5s 1 normal forwards`,
});
export const description = style({
  fontWeight: 300,
  maxWidth: 632,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 0,
  opacity: 0,
  animation: `${slideAndFadeInUp} 0.5s ease 1.4s 1 normal forwards`,
  color: vars.color.bluish,
});
