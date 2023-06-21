import React from "react";
import styles from "./eventcard.module.scss";
import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
  return (
    <Link href="#" className={`${styles.container} shadow-xl`}>
      <div className={styles.todayEvent}>HOJE</div>
      <Image
        fill
        sizes="100vw"
        src={
          "https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
        alt="Picture of the author"
        className={styles.image}
      />
      <p>6 a 16 de Julho</p>
      <h4>O LIVRO DE PANTAGRUEL</h4>
    </Link>
  );
};

export default EventCard;
