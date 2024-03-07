import { css } from "../../styled-system/css";
import colors from "../css/colors";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

const bookMeeting = css({
  position: "relative",
  lineHeight: 0,
  backgroundColor: "token(colors.neon)",
});
const heading = css({
  fontSize: base(2.4),
  marginTop: 0,
  marginBottom: 0,
  textAlign: "center",
  color: "token(colors.bluish)",
});

export const styles = {
  bookMeeting,
  heading,
};
