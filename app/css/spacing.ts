import { base } from "./base";

const small = base(1);
const medium = base(2);
const large = base(4);
const xLarge = base(5);

export const spacerSmall = {
  padding: `${small} 0`,
};
export const spacerMedium = {
  padding: `${medium} 0`,
};
export const spacerLarge = {
  padding: `${large} 0`,
};
export const spacerXLarge = {
  padding: `${xLarge} 0`,
};

export const spacers = {
  spacerSmall,
  spacerMedium,
  spacerLarge,
  spacerXLarge,
};
