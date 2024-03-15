"use client";

import { useState } from "react";
import GridContainer from "../layout/GridContainer";
import Header from "../layout/Header";
import { cx } from "../../../styled-system/css";
import { BackArrow } from "../graphics/BackArrow";
import { US, UK, PK } from "../graphics/flags";
import { Refresh } from "../graphics/Refresh";
import { Close } from "../graphics/Close";
import colors from "../../css/colors";
import { styles } from "./styles";
import Link from "next/link";
import { toast } from 'react-hot-toast';

const Modal = ({ children = null, dialogClasses = [], onClose }) => {
  const [step, setStep] = useState(1);
  const [stepOptions, setStepOptions] = useState(false);
  const [stepListItems, setStepListItems] = useState([
    [{ text: "Coming Soon", completed: false }],
    [{ text: "Coming Soon", completed: false }],
  ]);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const handleStepChange = (step) => {
    setStep(step);
    setStepOptions(false);
  };
  const handleOtherOptions = (option) => {
    setStepOptions(true);
  };
  const handleStepOptionSelect = (stepIndex, itemIndex) => {
    const updatedList = [...stepListItems];
    stepListItems[stepIndex][itemIndex].completed =
      !stepListItems[stepIndex][itemIndex].completed;
    setStepListItems(updatedList);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(contactData);
    const response = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.status == 200) {
      setContactData({
        name: "",
        email: "",
        contactNumber: "",
      });
      toast.success('Email sent successfully');
    }
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
            onClick={() => {
              setStep(step > 1 ? step - 1 : step);
              setStepOptions(false);
            }}
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
                <div
                  className={cx(
                    styles.stepContent,
                    !stepOptions ? "active" : null
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
                    <button
                      className={cx(styles.button, "light")}
                      onClick={() => handleOtherOptions(3)}
                    >
                      Contact Details
                    </button>
                  </div>
                </div>
                <div
                  className={cx(
                    styles.stepOptions,
                    stepOptions ? "active" : null
                  )}
                >
                  {stepListItems.map((list, sIndex) => {
                    if (step == sIndex + 1)
                      return (
                        <>
                          <ul className={styles.optionsList} key={sIndex}>
                            {/* {list.map((item, iIndex) => {
                              return (
                                <li
                                  className={item.completed ? "selected" : null}
                                  onClick={() =>
                                    handleStepOptionSelect(sIndex, iIndex)
                                  }
                                  key={iIndex}
                                >
                                  <span className={"marker"}>
                                    <i></i>
                                  </span>
                                  <span className={"text"}>
                                    {item.text}
                                    <i></i>
                                  </span>
                                </li>
                              );
                            })} */}
                            <li>
                              Email:{" "}
                              <a
                                href="mailto:info@pixelpersona.co"
                                className={styles.link}
                              >
                                info@pixelpersona.co
                              </a>
                            </li>
                            <li>
                              Contact:{" "}
                              <a
                                href="tel:+1 (619) 928-5168"
                                className={styles.link}
                              >
                                +1 (619) 928-5168
                              </a>
                            </li>
                            <li>
                              Offices:{" "}
                              <span style={{ display: "flex", gap: 10 }}>
                                <US />
                                <UK />
                                <PK />
                              </span>
                            </li>
                          </ul>

                          <button
                            className={styles.button}
                            onClick={() => setStepOptions(false)}
                          >
                            <Link href="/book-a-meeting" className="link">
                              Book a Meeting
                            </Link>
                          </button>
                        </>
                      );
                  })}
                </div>
              </div>
              <div
                className={cx(
                  styles.step,
                  "step2",
                  step == 2 ? "active" : null
                )}
              >
                <div
                  className={cx(
                    styles.stepContent,
                    !stepOptions ? "active" : null
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
                    <button
                      className={cx(styles.button, "light")}
                      onClick={() => handleOtherOptions(3)}
                    >
                      Contact Details
                    </button>
                  </div>
                </div>
                <div
                  className={cx(
                    styles.stepOptions,
                    stepOptions ? "active" : null
                  )}
                >
                  {stepListItems.map((list, sIndex) => {
                    if (step == sIndex + 1)
                      return (
                        <>
                          <ul className={styles.optionsList} key={sIndex}>
                            {/* {list.map((item, iIndex) => {
                              return (
                                <li
                                  className={item.completed ? "selected" : null}
                                  onClick={() =>
                                    handleStepOptionSelect(sIndex, iIndex)
                                  }
                                  key={iIndex}
                                >
                                  <span className={"marker"}>
                                    <i></i>
                                  </span>
                                  <span className={"text"}>
                                    {item.text}
                                    <i></i>
                                  </span>
                                </li>
                              );
                            })} */}
                            <li>
                              Email:{" "}
                              <a
                                href="mailto:info@pixelpersona.co"
                                className={styles.link}
                              >
                                info@pixelpersona.co
                              </a>
                            </li>
                            <li>
                              Contact:{" "}
                              <a
                                href="tel:+1 (619) 928-5168"
                                className={styles.link}
                              >
                                +1 (619) 928-5168
                              </a>
                            </li>
                            <li>
                              Offices:{" "}
                              <span style={{ display: "flex", gap: 10 }}>
                                <US />
                                <UK />
                                <PK />
                              </span>
                            </li>
                          </ul>

                          <button
                            className={styles.button}
                            onClick={() => setStepOptions(false)}
                          >
                            <Link href="/book-a-meeting" className="link">
                              Book a Meeting
                            </Link>
                          </button>
                        </>
                      );
                  })}
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
                <form onSubmit={sendEmail}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                    {/* <button
                      className={styles.button}
                      onClick={() => handleStepChange(3)}
                    >
                      Explore similar work
                    </button> */}
                    <input
                      type="text"
                      className={styles.inputControl}
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      className={styles.inputControl}
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={styles.inputControl}
                      name="contactNumber"
                      placeholder="Contact Number"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    Submit
                  </button>
                </form>
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
