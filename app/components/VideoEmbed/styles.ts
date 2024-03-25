import { css } from "../../../styled-system/css";
import colors from "../../css/colors";
import { base } from "../../css/base";

export const mobileAppPrototype = css({
  position: "relative",
  display: "block",
  width: "100%",
  textAlign: "center",
  overflow: "hidden",
  lineHeight: 0,
  backgroundColor: "token(colors.bluish)",
  "& > iframe": {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
  "& > span": {
    display: "block",
    content: "",
    paddingTop: "56.25%",
  },
});
