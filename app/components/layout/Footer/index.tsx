"use client";

import { useEffect, useState } from "react";
import { Grid, Cell } from "@faceless-ui/css-grid";
import Modal from "../../Modal";
import {
  footer,
  title,
  clickablePrototypeContainer,
  clickablePrototype,
  bullet,
  actionText,
  callToAction,
  contactDetails,
} from "./styles";
import { Phone } from "../../graphics/Phone";
import { Mail } from "../../graphics/Mail";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleServiceOptionModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const documentHeight = document.querySelector("body").clientHeight + 600;
    const onScroll = () => {
      if (window.scrollY > documentHeight) setOpenModal(true);
      else setOpenModal(false);
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <footer>
      <div className={footer}>
        <Grid>
          <Cell cols={12}>
            <h3 className={title}>
              How can we <br />
              help you?
            </h3>
            <div className={clickablePrototypeContainer}>
              <div className={clickablePrototype}>
                <span className={bullet}>
                  <i></i>
                </span>
                <span className={actionText}>
                  I want to create a clickable prototype
                </span>
                <button
                  type="button"
                  className={callToAction}
                  onClick={handleServiceOptionModal}
                >
                  Continue
                </button>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
      <div className={contactDetails}>
        <ul>
          <li>
            <span>
              <Phone color={"white"} />
            </span>
            <a href="tel:+1 (619) 928-5168">+1 (619) 928-5168</a>
          </li>
          <li>
            <Mail color={"white"} />
            <a href="mailto:info@pixelpersona.co">info@pixelpersona.co</a>
          </li>
        </ul>
      </div>
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </footer>
  );
};

export default Footer;
