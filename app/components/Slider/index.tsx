"use client";

import { useState, useEffect } from "react";
import GridContainer from "../layout/GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import { styles } from "./styles";
import { LeftArrow } from "../graphics/LeftArrow";
import { LogoWithText } from "../graphics/Logo";
import { cx } from "../../../styled-system/css";

const Slider = () => {
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
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
  };
  return (
    <section>
      <div className={styles.header}>
        <Grid>
          <Cell cols={12}>
            <LogoWithText />
          </Cell>
        </Grid>
      </div>
      <div className={styles.sliderWrapper}>
        <GridContainer classes={styles.gridContainer}>
          <div className={styles.slider}>
            <div className={styles.cursorCols}>
              <div className={"leftCol"} onClick={() => goToPrevious()}>
                &nbsp;
              </div>
              <div className={"rightCol"} onClick={() => goToNext()}>
                &nbsp;
              </div>
            </div>
            <div className={styles.sliderTracks}>
              <div
                className={styles.slideTrack}
                style={{ translate: `${-100 * currentIndex}%` }}
              >
                <div className={styles.slideContent}>
                  <Grid className={styles.slideContentGrid}>
                    <Cell cols={7}>
                      <h2 className={styles.title}>
                        <div
                          className={
                            currentIndex == 0 ? styles.animateIn : null
                          }
                        >
                          <span>Mindful</span> <span>structured</span>{" "}
                          <span>design</span> <span>systems</span>
                        </div>
                        <div
                          className={
                            currentIndex == 0 ? styles.animateOut : styles.hide
                          }
                        >
                          <div className={styles.tempText}>
                            Instead of{" "}
                            <span
                              className={
                                currentIndex == 0 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            aimlessly
                            <span
                              className={
                                currentIndex == 0 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            designed
                            <span
                              className={
                                currentIndex == 0 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            screens
                            <span
                              className={
                                currentIndex == 0 ? styles.lineCut : null
                              }
                            ></span>
                          </div>
                        </div>
                      </h2>
                    </Cell>
                    {/* <Cell cols={2}>&nbsp;</Cell> */}
                    <Cell cols={5}>
                      <p className={styles.description}>
                        We create design systems using custom premade UI
                        components so teams can continue to use the same
                        elements over and over, reducing the need to reinvent
                        the wheel and thus risking inconsistency.
                      </p>
                      <ul className={styles.list}>
                        <li>Scalability</li>
                        <li>Maintainability</li>
                        <li>Productivity</li>
                        <li>Consistency</li>
                        <li>Improved code and design quality etc.</li>
                      </ul>
                    </Cell>
                  </Grid>
                </div>
              </div>
              <div
                className={styles.slideTrack}
                style={{ translate: `${-100 * currentIndex}%` }}
              >
                <div className={styles.slideContent}>
                  <Grid className={styles.slideContentGrid}>
                    <Cell cols={7}>
                      <h2 className={styles.title}>
                        <div
                          className={
                            currentIndex == 1 ? styles.animateIn : null
                          }
                        >
                          <span>Awesome</span> <span>minimum</span>{" "}
                          <span>viable</span> <span>products</span>
                        </div>
                        <div
                          className={
                            currentIndex == 1 ? styles.animateOut : styles.hide
                          }
                        >
                          <div className={styles.tempText}>
                            Instead of{" "}
                            <span
                              className={
                                currentIndex == 1 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            abstract
                            <span
                              className={
                                currentIndex == 1 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            plans and
                            <span
                              className={
                                currentIndex == 1 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            promises
                            <span
                              className={
                                currentIndex == 1 ? styles.lineCut : null
                              }
                            ></span>
                          </div>
                        </div>
                      </h2>
                    </Cell>
                    {/* <Cell cols={2}>&nbsp;</Cell> */}
                    <Cell cols={5}>
                      <p className={styles.description}>
                        We create design systems using custom premade UI
                        components so teams can continue to use the same
                        elements over and over, reducing the need to reinvent
                        the wheel and thus risking inconsistency.
                      </p>
                      <ul className={styles.list}>
                        <li>Scalability</li>
                        <li>Maintainability</li>
                        <li>Productivity</li>
                        <li>Consistency</li>
                        <li>Improved code and design quality etc.</li>
                      </ul>
                    </Cell>
                  </Grid>
                </div>
              </div>
              <div
                className={styles.slideTrack}
                style={{ translate: `${-100 * currentIndex}%` }}
              >
                <div className={styles.slideContent}>
                  <Grid className={styles.slideContentGrid}>
                    <Cell cols={7}>
                      <h2 className={styles.title}>
                        <div
                          className={
                            currentIndex == 2 ? styles.animateIn : null
                          }
                        >
                          <span>Lovely</span> <span>design</span>{" "}
                          <span>clickable</span> <span>prototypes</span>
                        </div>
                        <div
                          className={
                            currentIndex == 2 ? styles.animateOut : styles.hide
                          }
                        >
                          <div className={styles.tempText}>
                            Instead of{" "}
                            <span
                              className={
                                currentIndex == 2 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            boring
                            <span
                              className={
                                currentIndex == 2 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            design
                            <span
                              className={
                                currentIndex == 2 ? styles.lineCut : null
                              }
                            ></span>
                          </div>{" "}
                          <div className={styles.tempText}>
                            pitches
                            <span
                              className={
                                currentIndex == 2 ? styles.lineCut : null
                              }
                            ></span>
                          </div>
                        </div>
                      </h2>
                    </Cell>
                    {/* <Cell cols={2}>&nbsp;</Cell> */}
                    <Cell cols={5}>
                      <p className={styles.description}>
                        We create design systems using custom premade UI
                        components so teams can continue to use the same
                        elements over and over, reducing the need to reinvent
                        the wheel and thus risking inconsistency.
                      </p>
                      <ul className={styles.list}>
                        <li>Scalability</li>
                        <li>Maintainability</li>
                        <li>Productivity</li>
                        <li>Consistency</li>
                        <li>Improved code and design quality etc.</li>
                      </ul>
                    </Cell>
                  </Grid>
                </div>
              </div>
            </div>
            <div className={styles.sliderPagination}>
              <button
                className={cx(
                  styles.paginationButton,
                  currentIndex == 0 ? "active" : null
                )}
                onClick={() => setCurrentIndex(0)}
              ></button>
              <button
                className={cx(
                  styles.paginationButton,
                  currentIndex == 1 ? "active" : null
                )}
                onClick={() => setCurrentIndex(1)}
              ></button>
              <button
                className={cx(
                  styles.paginationButton,
                  currentIndex == 2 ? "active" : null
                )}
                onClick={() => setCurrentIndex(1)}
              ></button>
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

export default Slider;
