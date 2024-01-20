import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  slideAndFadeInUp: {
    "0%": { transform: "translateY(50px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  textFadeIn: {
    "0%": {
      transform: "translateX(30px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  textFadeOut: {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateX(-30px)",
    },
  },
  lineThrough: {
    "0%": {
      width: 0,
    },
    "100%": {
      width: "100%",
    },
  },
});
