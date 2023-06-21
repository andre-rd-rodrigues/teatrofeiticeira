import React from "react";
import styles from "./eventcard.module.scss";
import Image from "next/image";
import Link from "next/link";

import useNotion from "@/hooks/useNotion";
import moment from "moment/moment";

const EventCard = ({ event }) => {
  const { slug, cover, date, title } = useNotion(event);

  const isEventToday =
    moment(date).isSame(moment(), "month") &&
    moment(date).isSame(moment(), "day");

  return (
    <Link
      href={`/espetaculos/${slug}`}
      className={`${styles.container} shadow-xl`}
    >
      {isEventToday && <div className={styles.todayEvent}>HOJE</div>}
      <Image
        fill
        sizes="100vw"
        src={cover}
        alt="Picture of the author"
        className={styles.image}
      />
      <p>{moment(date).format("LL")}</p>
      <h4>{title}</h4>
    </Link>
  );
};

export default EventCard;
