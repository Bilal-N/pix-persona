import { css } from "../../../styled-system/css";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

const contentWrapper = css({
  padding: `0 0 ${base(8)}`,
});
const sliderWrapper = css({
  padding: `${base(5)} ${base(2.5)} ${base(6)}`,
  color: "token(colors.white)",
  backgroundColor: "token(colors.black)",
  lg: { padding: `${base(5)} 0 ${base(6)}` },
});
const gridContainer = css({
  position: "relative",
  padding: `0 0 ${base()}`,
  zIndex: 2,
  lg: { padding: `0  ${base(6)}` },
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
  "& .leftCol2": {
    height: "100%",
    width: "50%",
  },
  "& .rightCol2": {
    height: "100%",
    width: "50%",
  },
});
const sliderTracks = css({
  position: "relative",
  display: "flex",
  overflow: "hidden",
});
const slideTrack = css({
  flexGrow: 1,
  minWidth: "100%",
  transition: "translate 300ms ease-in-out",
});
const slideContent = css({});
const slideContentGrid = css({
  position: "relative",
  justifyContent: "space-between",
  userSelect: "none",
});
const title = css({
  fontSize: base(4.5),
  fontWeight: 600,
  lineHeight: base(5),
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
  bottom: base(-4),
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

const linesContainer = css({
  position: "absolute",
  inset: "0 0",
  top: 0,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  overflow: "hidden",
  gap: 40,
  zIndex: 1,
  background: "transparent",
});
const line = css({
  display: "block",
  width: "100%",
  height: 1,
  opacity: 0.1,
  backgroundColor: "token(colors.white)",
});

export const styles = {
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
  linesContainer,
  line,
  cursorCols,
  contentWrapper,
};
