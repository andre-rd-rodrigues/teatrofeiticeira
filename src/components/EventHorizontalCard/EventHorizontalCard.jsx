import React from "react";
import styles from "./eventhorizontalcard.module.scss";
import Image from "next/image";
import Link from "next/link";
import useNotion from "@/hooks/useNotion";

const EventHorizontalCard = ({ event }) => {
  const { title, description, slug, cover, sessions } = useNotion(event);

  return (
    <Link
      href={`espetaculos/${slug}`}
      className={`${styles.card} shadow-xl no-underline mb-5`}
    >
      <div className={styles.imageContainer}>
        <Image src={cover} fill sizes="100vw" alt="" />
      </div>
      <div className={`${styles.cardBody}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <b>Sessões:</b> {sessions}
        </p>
      </div>
    </Link>
  );
};

export default EventHorizontalCard;
