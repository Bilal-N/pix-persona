import { gridContainer } from "./css.css";

const GridContainer = ({ children, classes = null }) => {
  return <div className={[gridContainer, classes].join(" ")}>{children}</div>;
};

export default GridContainer;
