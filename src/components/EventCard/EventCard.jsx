import React from "react";
import styles from "./eventcard.module.scss";
import Image from "next/image";
import Link from "next/link";

import useNotion from "@/hooks/useNotion";
import moment from "moment/moment";

const EventCard = ({ event }) => {
  const { slug, cover, date_start, date_end, title } = useNotion(event);

  const isEventToday =
    moment(date_start).isSame(moment(), "month") &&
    moment(date_start).isSame(moment(), "day");

  const date = date_end
    ? `${moment(date_start).format("LL")} - ${moment(date_end).format("LL")}`
    : moment(date_start).format("LL");

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
      <p>{date}</p>
      <h4>{title}</h4>
    </Link>
  );
};

export default EventCard;
