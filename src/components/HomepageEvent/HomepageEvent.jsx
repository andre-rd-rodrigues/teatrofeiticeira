import React from "react";
import styles from "./homepageevent.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

const HomepageEvent = () => {
  return (
    <div className={styles.container}>
      <Image
        fill
        sizes="100vw"
        src={
          "https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
        alt="Picture of the author"
        className={styles.image}
      />
      <div className={styles.body}>
        <h1>O LIVRO DE PANTAGRUEL</h1>
        <p>6 a 16 de Julho</p>
        <div>
          <Button label="SABER MAIS" />
          <Button label="RESERVAR" />
        </div>
      </div>
    </div>
  );
};

export default HomepageEvent;
