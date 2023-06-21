import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

const Button = ({ label, href }) => {
  if (href) {
    return (
      <Link href={href} className={styles.container}>
        {label}
      </Link>
    );
  }
  return <button className={styles.container}>{label}</button>;
};

export default Button;
