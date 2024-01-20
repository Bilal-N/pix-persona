import { css } from "../../../../styled-system/css";

export const htmlFontSize = 18;
export const baselinePX = 20;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;

export const header = css({
  padding: `${base(1.5)} ${base(2)}`,
});
