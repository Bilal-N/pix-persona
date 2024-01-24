import { css } from "../../../styled-system/css";
import colors from "../../css/colors";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

const sliderWrapper = css({
  position: "relative",
  lineHeight: 0,
  backgroundColor: "token(colors.white)",
});
const slider = css({
  position: "relative",
  cursor: "none",
});
const cursorCols = css({
  position: "absolute",
  inset: "0 0",
  display: "flex",
  zIndex: 1,
  "& .leftCol1": {
    height: "100%",
    width: "50%",
  },
  "& .rightCol1": {
    height: "100%",
    width: "50%",
  },
});
const sliderTracks = css({
  position: "relative",
  zIndex: 0,
  display: "flex",
  overflow: "hidden",
});
const slideTrack = css({
  flexGrow: 1,
  minWidth: "100%",
  // opacity: 0,
  transition: "translate 300ms ease-in-out",
});
const slideContent = css({});
const slideContentGrid = css({
  position: "relative",
  justifyContent: "space-between",
  userSelect: "none",
});
const cursor = css({
  position: "relative",
  zIndex: 9999,
});
const arrow = css({
  position: "fixed",
  display: "block",
  width: 50,
  height: 50,
  borderRadius: 50,
  zIndex: 3000,
  backgroundColor: "token(colors.neon)",
  "& svg": {
    fontSize: 20,
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    transform: "translate(50%, 50%)",
  },
});

const arrowLeft = css({});
const arrowRight = css({
  transform: "rotate(180deg)",
});
const rightCol = css({});
const leftCol = css({});

export const styles = {
  sliderWrapper,
  cursorCols,
  slider,
  sliderTracks,
  slideTrack,
  slideContent,
  slideContentGrid,
  cursor,
  arrow,
  arrowRight,
  arrowLeft,
  rightCol,
  leftCol,
};
