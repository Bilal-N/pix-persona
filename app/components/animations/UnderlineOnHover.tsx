"use client";

const UnderlineOnHover = ({ content = null, classes = null }) => {
  return (
    <>
      <span className={[classes].join(" ")}>
        {content.text}
        <i></i>
      </span>
    </>
  );
};

export default UnderlineOnHover;
