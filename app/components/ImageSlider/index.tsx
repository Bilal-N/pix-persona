"use client";

import { useState, useEffect } from "react";
import { styles } from "./styles";
import { LeftArrow } from "../graphics/LeftArrow";
import { cx } from "../../../styled-system/css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const images = [
    { url: "/images/img-slide-1.jpg", alt: "Image 1" },
    { url: "/images/img-slide-2.jpg", alt: "Image 1" },
  ];

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Define the selector for the area where you want to display the custom cursor
  const selectedAreaLeft = ".leftCol1";
  const selectedAreaRight = ".rightCol1";

  // Check if the mouse is within the selected area
  const isMouseInLeftArea =
    typeof window !== "undefined" && document.querySelector(selectedAreaLeft)
      ? document
          .querySelector(selectedAreaLeft)
          .contains(document.elementFromPoint(position.x, position.y))
      : false;
  const isMouseInRightArea =
    typeof window !== "undefined" && document.querySelector(selectedAreaRight)
      ? document
          .querySelector(selectedAreaRight)
          .contains(document.elementFromPoint(position.x, position.y))
      : false;

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };
  return (
    <section>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <div className={styles.cursorCols}>
            <div className={"leftCol1"} onClick={() => goToPrevious()}>
              &nbsp;
            </div>
            <div className={"rightCol1"} onClick={() => goToNext()}>
              &nbsp;
            </div>
          </div>
          <div className={styles.sliderTracks}>
            {images.map((image) => {
              return (
                <div
                  className={styles.slideTrack}
                  style={{ translate: `${-100 * currentIndex}%` }}
                >
                  <div className={styles.slideContent}>
                    <img
                      src={image.url}
                      width="100%"
                      height="auto"
                      alt={image.alt}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.cursor}>
            {isMouseInLeftArea ? (
              <span
                className={cx(styles.arrow, styles.arrowLeft)}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
              >
                <LeftArrow />
              </span>
            ) : isMouseInRightArea ? (
              <span
                className={cx(styles.arrow, styles.arrowRight)}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
              >
                <LeftArrow />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
