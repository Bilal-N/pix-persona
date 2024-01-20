import { Grid, Cell } from "@faceless-ui/css-grid";
import {
  footer,
  title,
  clickablePrototypeContainer,
  clickablePrototype,
  bullet,
  actionText,
  callToAction,
} from "./styles";

const Footer = () => {
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
                <span className={bullet}></span>
                <span className={actionText}>
                  I want to create a clickable prototype
                </span>
                <button type="button" className={callToAction}>
                  Continue
                </button>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
