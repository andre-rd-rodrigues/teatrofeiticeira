import React from "react";
import styles from "./page.module.scss";

const Page = ({ title, children, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
