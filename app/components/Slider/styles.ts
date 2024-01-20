import { css } from "../../../styled-system/css";
import colors from "../../css/colors";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

export const header = css({
  position: "sticky",
  top: 0,
  padding: `${base(1.5)} ${base(2)}`,
  zIndex: "token(zIndex.header)",
  backgroundColor: "token(colors.white)",
});
const sliderWrapper = css({
  position: "relative",
  padding: `${base(14)} 0 ${base(6)}`,
  backgroundColor: "token(colors.white)",
});
const gridContainer = css({
  position: "relative",
  zIndex: 2,
});
const slider = css({
  position: "relative",
  cursor: "none",
});
const sliderTracks = css({
  position: "relative",
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
const title = css({
  position: "relative",
  fontSize: base(4.5),
  lineHeight: base(4.5),
  margin: `0 0 ${base(2)}`,
  color: "token(colors.bluish)",
});
const description = css({});
const list = css({
  listStyle: "none",
  margin: 0,
  padding: 0,
});
const sliderPagination = css({
  position: "absolute",
  left: 0,
  bottom: base(-5.4),
  display: "flex",
  gap: 4,
});
const paginationButton = css({
  all: "unset",
  display: "block",
  width: 60,
  height: 2,
  cursor: "pointer",
  backgroundColor: "token(colors.gray)",
  "&.active": {
    backgroundColor: "token(colors.bluish)",
  },
});
const cursor = css({
  position: "relative",
});
const arrow = css({
  position: "fixed",
  display: "block",
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: colors.neon,
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

const animateIn = css({
  opacity: 0,
  color: "token(colors.bluish)",
  animation: "textFadeIn 0.5s ease 2.6s 1 normal forwards",
});
const animateOut = css({
  position: "absolute",
  top: 0,
  color: colors.black,
  "& > div:nth-child(1)": {
    animation: "textFadeOut 0.5s ease 2.2s 1 normal forwards",
  },
  "& > div:nth-child(2)": {
    animation: "textFadeOut 0.5s ease 2.3s 1 normal forwards",
  },
  "& > div:nth-child(3)": {
    animation: "textFadeOut 0.5s ease 2.4s 1 normal forwards",
  },
  "& > div:nth-child(4)": {
    animation: "textFadeOut 0.5s ease 2.5s 1 normal forwards",
  },
});
const hide = css({
  display: "none",
});
export const tempText = css({
  position: "relative",
  color: "token(colors.black)",
  "&:nth-child(1) > span": {
    animation: "lineThrough 0.5s ease 1.5s 1 normal forwards",
  },
  "&:nth-child(2) > span": {
    animation: "lineThrough 0.5s ease 1.7s 1 normal forwards",
  },
  "&:nth-child(3) > span": {
    animation: "lineThrough 0.5s ease 1.9s 1 normal forwards",
  },
  "&:nth-child(4) > span": {
    animation: "lineThrough 0.5s ease 2.1s 1 normal forwards",
  },
});
const lineCut = css({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "block",
  height: 10,
  width: 0,
  backgroundColor: "token(colors.black)",
});

const linesContainer = css({
  position: "absolute",
  inset: "0 0",
  display: "flex",
  flexDirection: "column",
  gap: 80,
  paddingTop: 115,
  zIndex: 1,
  background: "transparent",
});
const line = css({
  display: "block",
  width: "100%",
  height: 1,
  opacity: 0.1,
  backgroundColor: colors.black,
  "&:nth-child(1)": {
    opacity: 0,
  },
  "&:nth-child(2)": {
    opacity: 0.05,
  },
  "&:nth-child(3)": {
    opacity: 0.08,
  },
});

export const styles = {
  header,
  sliderWrapper,
  gridContainer,
  slider,
  sliderTracks,
  slideTrack,
  slideContent,
  slideContentGrid,
  title,
  description,
  list,
  sliderPagination,
  paginationButton,
  cursor,
  arrow,
  arrowRight,
  arrowLeft,
  rightCol,
  leftCol,
  animateIn,
  animateOut,
  tempText,
  lineCut,
  hide,
  linesContainer,
  line,
};
