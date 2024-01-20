import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { css } from "../../styled-system/css";
import colors from "./colors";

export const globalCss = defineGlobalStyles({
  "*": {},
  "html, body": {
    margin: 0,
    color: colors.bluish,
    backgroundColor: colors.neon,
  },
});
