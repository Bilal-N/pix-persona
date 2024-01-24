"use client";

import { useState } from "react";
import GridContainer from "../layout/GridContainer";
import Header from "../layout/Header";
import { cx } from "../../../styled-system/css";
import { BackArrow } from "../graphics/BackArrow";
import { Refresh } from "../graphics/Refresh";
import { Close } from "../graphics/Close";
import colors from "../../css/colors";
import { styles } from "./styles";

const Modal = ({ children = null, dialogClasses = [], onClose }) => {
  const [step, setStep] = useState(1);

  const handleStepChange = (step) => {
    setStep(step);
  };
  return (
    <div className={styles.modalWindow}>
      <div className={cx(styles.modalDialog, ...dialogClasses)}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <button
            type="button"
            className={styles.back}
            onClick={() => setStep(step > 1 ? step - 1 : step)}
          >
            <BackArrow color={colors.bluish} /> <span>Back</span>
          </button>
          <button
            type="button"
            className={styles.reset}
            onClick={() => setStep(1)}
          >
            <Refresh color={colors.bluish} /> <span>Reset</span>
          </button>
          <button
            type="button"
            className={styles.close}
            onClick={() => onClose()}
          >
            <Close color={colors.bluish} /> <span>Close</span>
          </button>
          <GridContainer classes={styles.gridContainer}>
            <div>
              <div className={styles.steps}>{step}/4</div>
              <div
                className={cx(
                  styles.step,
                  "step1",
                  step == 1 ? "active" : null
                )}
              >
                <h2 className={styles.heading}>
                  <span>
                    I am looking for a world-class <br />
                    team to{" "}
                  </span>
                  <span className={styles.userAction}>
                    create a clickable prototype
                  </span>
                </h2>
                <div style={{ display: "flex", gap: 20 }}>
                  <button
                    className={styles.button}
                    onClick={() => handleStepChange(2)}
                  >
                    Yes, Exactly
                  </button>
                  <button className={cx(styles.button, "light")}>
                    Other Options
                  </button>
                </div>
              </div>
              <div
                className={cx(
                  styles.step,
                  "step2",
                  step == 2 ? "active" : null
                )}
              >
                <h2 className={styles.heading}>
                  <span>
                    My main intention is to <br />
                  </span>
                  <span className={styles.userAction}>
                    improve user experience
                  </span>
                </h2>
                <div style={{ display: "flex", gap: 20 }}>
                  <button
                    className={styles.button}
                    onClick={() => handleStepChange(3)}
                  >
                    Yes, Exactly
                  </button>
                  <button className={cx(styles.button, "light")}>
                    Other Options
                  </button>
                </div>
              </div>
              <div
                className={cx(
                  styles.step,
                  "step3",
                  step == 3 ? "active" : null
                )}
              >
                <h2 className={styles.heading}>
                  Perfect! Over the years, we have successfully redesigned
                  websites and apps for companies of all sizes, from startups to
                  Fortune 500s. 🤝
                </h2>
                <div style={{ display: "flex", gap: 20 }}>
                  <button
                    className={styles.button}
                    onClick={() => handleStepChange(3)}
                  >
                    Explore similar work
                  </button>
                </div>
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
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default Modal;
