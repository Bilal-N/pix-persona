import GridContainer from "../layout/GridContainer";
import UnderlineOnHover from "../animations/UnderlineOnHover";
import { styles } from "./styles";
import { cx } from "../../../styled-system/css";
// import Modal from "../Modal";

const Content = ({ data, color = null, bgColor = "initial" }) => {
  return (
    <section>
      <div
        className={styles.content}
        style={{ color: color ? color : "initial", backgroundColor: bgColor }}
      >
        <GridContainer classes={styles.gridContainer}>
          {data?.length > 0 &&
            data.map((text, index) => {
              if (text.type == "p")
                return (
                  <p
                    className={cx(
                      styles.description,
                      text.fontSize == "large"
                        ? styles.fontLarge
                        : text.fontSize == "medium"
                        ? styles.fontMedium
                        : text.fontSize == "small"
                        ? styles.fontSmall
                        : text.fontSize == "largeX10"
                        ? styles.fontLargeX10
                        : text.fontSize == "largeX100"
                        ? styles.fontLargeX100
                        : styles.fontMedium,
                      text.alignment == "right"
                        ? styles.AlignRight
                        : text.alignment == "center"
                        ? styles.AlignCenter
                        : styles.AlignLeft
                    )}
                    style={{ color: color ? color : "initial" }}
                    key={index}
                  >
                    {text.children?.length > 0 &&
                      text.children.map((item, index) => {
                        return (
                          <>
                            {item.type == "normal" ? (
                              <span
                                className={
                                  item?.newline ? styles.newline : null
                                }
                                key={index}
                              >
                                {item.text}
                              </span>
                            ) : (
                              <UnderlineOnHover
                                content={item}
                                classes={styles.underlineOnHover}
                                key={index}
                              />
                            )}
                          </>
                        );
                      })}
                  </p>
                );
              if (text.type == "ul")
                return (
                  <ul
                    className={cx(
                      styles.list,
                      text.fontSize == "large"
                        ? styles.fontLarge
                        : text.fontSize == "medium"
                        ? styles.fontMedium
                        : text.fontSize == "small"
                        ? styles.fontSmall
                        : text.fontSize == "smallX100"
                        ? styles.fontSmallX100
                        : text.fontSize == "largeX10"
                        ? styles.fontLargeX10
                        : text.fontSize == "largeX100"
                        ? styles.fontLargeX100
                        : null,
                      text.alignment == "right"
                        ? styles.AlignRight
                        : text.alignment == "center"
                        ? styles.AlignCenter
                        : styles.AlignLeft
                    )}
                    key={index}
                  >
                    {text.children?.length > 0 &&
                      text.children.map((item, index) => {
                        return (
                          <>
                            <li className={styles.listItem} key={index}>
                              {item.text}
                            </li>
                          </>
                        );
                      })}
                  </ul>
                );
              if (text?.type == "spacer")
                return (
                  <div
                    className={["spacer", text?.size].join(" ")}
                    key={index}
                  ></div>
                );
            })}
        </GridContainer>
        <div className={styles.linesContainer}>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
          <span
            className={styles.line}
            style={{ backgroundColor: color ? color : "initial" }}
          ></span>
        </div>
      </div>

      {/* <Modal></Modal> */}
    </section>
  );
};

export default Content;
