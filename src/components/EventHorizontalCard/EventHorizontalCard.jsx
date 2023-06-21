import React from "react";
import styles from "./eventhorizontalcard.module.scss";
import Image from "next/image";
import Link from "next/link";

const EventHorizontalCard = ({ event }) => {
  return (
    <Link
      href={`espetaculos/${event.properties.Slug.rich_text[0].plain_text}`}
      className={`${styles.card} shadow-xl no-underline mb-5`}
    >
      <div className={styles.imageContainer}>
        <Image src={event.cover.external.url} fill sizes="100vw" alt="" />
      </div>
      <div className={`${styles.cardBody}`}>
        <h4>{event.properties.Name.title[0].plain_text}</h4>
        <p>{event.properties.Description.rich_text[0].plain_text}</p>
        <p>
          <b>Sessões:</b> 5ª Dom. 2ª 3ª 4ª: 13h, 14h, 15h10
        </p>
      </div>
    </Link>
  );
};

export default EventHorizontalCard;
