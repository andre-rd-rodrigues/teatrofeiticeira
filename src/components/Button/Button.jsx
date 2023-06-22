import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

const Button = ({ label, href, className }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.container} ${className}`}>
        {label}
      </Link>
    );
  }
  return (
    <button className={`${styles.container} ${className}`}>{label}</button>
  );
};

export default Button;
