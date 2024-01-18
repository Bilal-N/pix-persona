"use client";

import Lottie from "lottie-react";
import HeroText from "../../../public/hero-text.json";

const AnimatedHeroText = () => {
  return <Lottie className="animatedHeroText" animationData={HeroText} />;
};

export default AnimatedHeroText;
