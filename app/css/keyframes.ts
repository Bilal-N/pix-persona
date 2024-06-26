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
  fadeInRight: {
    "0%": {
      transform: "translateX(100px)",
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
  expandHeight: {
    "0%": {
      height: 0,
      // opacity: 0,
    },
    "100%": {
      height: "555px",
      // opacity: 1,
    },
  },
});
