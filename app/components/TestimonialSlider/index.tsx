"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cx } from "../../../styled-system/css";
import GridContainer from "../layout/GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import { styles } from "./styles";
import { LeftArrow } from "../graphics/LeftArrow";
import ratingStarsImage from "../../../public/rating-stars.png";
import partners from "../../../public/partners.png";
import { base } from "../../css/base";

const TestimonialSlider = ({ children = null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
  const selectedAreaLeft = ".leftCol";
  const selectedAreaRight = ".rightCol";

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
    console.log(currentIndex);
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
  };
  return (
    <section>
      <div className={styles.sliderWrapper}>
        <GridContainer>
          <div className={styles.slider}>
            <div className={styles.sliderTracks}>
              <div
                className={styles.slideTrack}
                style={{ translate: `${-100 * currentIndex}%` }}
              >
                <div className={styles.slideContent}>
                  <Grid className={styles.slideContentGrid}>
                    <Cell
                      cols={11}
                      className={"leftCol"}
                      onClick={() => goToPrevious()}
                    >
                      <h2 className={styles.title}>
                        They were hyper- focused and diligent and stood out for
                        their attention to detail.
                      </h2>
                      <p className={styles.description}>
                        Maxine Ryan, PRSPR{" "}
                        <span style={{ color: "#5a5a5a" }}>
                          (Financial literacy app)
                        </span>
                        <div style={{ paddingBottom: `${base(4)}` }}>
                          <Image
                            alt="Mobile App Prototype"
                            src={ratingStarsImage}
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div style={{ paddingBottom: `${base(4)}` }}>
                          <Image
                            alt="Mobile App Prototype"
                            src={partners}
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                      </p>
                    </Cell>
                    <Cell cols={1}>&nbsp;</Cell>
                  </Grid>
                </div>
              </div>
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
        </GridContainer>
      </div>
      <div style={{ position: "relative" }}>
        <GridContainer classes={styles.gridContainer}>
          <div>
            <p
              style={{
                fontSize: base(3.5),
                lineHeight: base(3.5),
                fontWeight: 600,
                color: "white",
              }}
            >
              Thanks to seamless collaboration and a great pool of talent with
              no geographical limitations.
            </p>
            <p
              style={{
                fontSize: base(),
                lineHeight: 1.4,
                fontWeight: 300,
                color: "#c9c9c9",
              }}
            >
              You get a dedicated producer and a fantastic team of people with
              vested knowledge in your business dedicated to your needs, whether
              its just for a single project or an ongoing engagement. Over 15
              years of remote collaboration facilitates communication and
              productivity among a dispersed team of employees.
            </p>
          </div>
        </GridContainer>
        <div className={styles.linesContainer}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
