import { style } from "@vanilla-extract/css";
import { vars } from "../../../css/theme.css";

export const gridContainer = style({
  maxWidth: vars.structure.gridContainer.maxWidth,
  marginLeft: "auto",
  marginRight: "auto",
});
