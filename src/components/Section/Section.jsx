import React from "react";
import styles from "./section.module.scss";

const Section = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
