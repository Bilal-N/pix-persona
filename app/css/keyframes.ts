import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  slideAndFadeInUp: {
    "0%": { transform: "translateY(50px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});
