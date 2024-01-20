import { base, htmlFontSize } from "./base";

export const heading = {
  fontWeight: 600,
  letterSpacing: -2,
};

export const h1 = {
  ...heading,
  fontSize: base(4.5),
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`,
};
export const h2 = {
  ...heading,
  fontSize: base(3.3),
  lineHeight: base(3.3),
  margin: `${base(2)} 0`,
};
export const h3 = {
  ...heading,
  fontSize: base(2.4),
  lineHeight: base(2.9),
  margin: `${base(2)} 0 ${base(1.5)}`,
};
export const body = {
  fontSize: htmlFontSize,
  fontWeight: 400,
  lineHeight: base(2),
};
