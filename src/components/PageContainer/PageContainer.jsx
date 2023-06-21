import React from "react";
import styles from "./pagecontainer.module.scss";

const PageContainer = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default PageContainer;
