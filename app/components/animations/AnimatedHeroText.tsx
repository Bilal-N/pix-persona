"use client";

import Lottie from "lottie-react";
import HeroText from "../../../public/hero-text.json";
import { css } from "../../../styled-system/css";

const AnimatedHeroText = () => {
  return (
    <Lottie
      className={css({
        height: "60px",
        sm: { height: "80px" },
        md: { height: "105px" },
        "& svg": {
          height: "60px",
          sm: { height: "80px" },
          md: { height: "105px" },
        },
      })}
      animationData={HeroText}
    />
  );
};

export default AnimatedHeroText;
