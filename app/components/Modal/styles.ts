import { css } from "../../../styled-system/css";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

const modalWindow = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  zIndex: "token(zIndex.modal)",
});

const modalDialog = css({
  width: "100%",
  overflow: "hidden",
  zIndex: "token(zIndex.modal)",
  backgroundColor: "token(colors.neon)",
  animation: "expandHeight 0.3s ease-in-out 0s 1 normal forwards",
  boxShadow: "0 6px 14px -5px rgba(0,0,0,.08)",
});
const gridContainer = css({
  position: "relative",
  zIndex: 2,
  padding: `${base(2)}`,
  lg: { padding: 0 },
});
const header = css({});
const body = css({
  position: "relative",
  paddingBottom: base(5),
  zIndex: 2,
});
const footer = css({});

const steps = css({
  fontSize: base(0.8),
  fontWeight: 400,
  marginBottom: 6,
  lineHeight: "60px",
  color: "token(colors.gray)",
});
const step = css({
  "&:not(.active)": {
    display: "none !important",
  },
});
const back = css({
  fontSize: base(0.8),
  fontWeight: 400,
  position: "absolute",
  top: base(1),
  left: base(2.5),
  display: "flex",
  alignItems: "center",
  gap: 6,
  zIndex: 999,
  color: "token(colors.bluish)",
});
const reset = css({
  fontSize: base(0.8),
  fontWeight: 400,
  position: "absolute",
  top: base(1),
  right: base(7.5),
  display: "flex",
  alignItems: "center",
  gap: 6,
  zIndex: 999,
  color: "token(colors.bluish)",
});
const close = css({
  fontSize: base(0.8),
  fontWeight: 400,
  position: "absolute",
  top: base(1),
  right: base(2.5),
  display: "flex",
  alignItems: "center",
  gap: 6,
  zIndex: 999,
  color: "token(colors.bluish)",
});
const heading = css({
  fontSize: base(2.4),
  marginTop: 0,
  marginBottom: base(2.4),
  opacity: 0,
  color: "token(colors.black)",
  animation: "fadeInRight 1s ease 0s 1 normal forwards",
});
const userAction = css({
  color: "token(colors.bluish)",
});
export const button = css({
  fontSize: base(0.8),
  padding: `${base(1)} ${base(1.5)}`,
  fontWeight: 300,
  borderRadius: 8,
  opacity: 0,
  cursor: "pointer",
  color: "token(colors.white)",
  backgroundColor: "token(colors.bluish)",
  animation: "fadeInRight 1s ease 0.1s 1 normal forwards",
  "&.light": {
    color: "token(colors.bluish)",
    backgroundColor: "token(colors.neonLight)",
  },
});
const linesContainer = css({
  position: "absolute",
  inset: "0 0",
  display: "flex",
  flexDirection: "column",
  gap: 60,
  paddingTop: 0,
  zIndex: 1,
  background: "transparent",
});
const line = css({
  display: "block",
  width: "100%",
  height: 1,
  opacity: 0.1,
  backgroundColor: "token(colors.black)",
});

export const styles = {
  modalWindow,
  modalDialog,
  header,
  body,
  footer,
  steps,
  step,
  heading,
  userAction,
  button,
  linesContainer,
  line,
  gridContainer,
  back,
  reset,
  close,
};
