import React from "react";
import styles from "./fullscreenevent.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import moment from "moment/moment";
import useNotion from "@/hooks/useNotion";

const FullScreenEvent = ({ event, height = "100vh", hasReadMore = true }) => {
  const { title, date, slug, cover, sessions } = useNotion(event);

  if (!event) return null;

  return (
    <div className={styles.container} style={{ height }}>
      <Image
        fill
        sizes="100vw"
        src={cover}
        alt={title}
        className={styles.image}
      />
      <div className={styles.body}>
        <h1>{title}</h1>
        <p>
          <b>Data:</b> {moment(date).format("LL")}
        </p>
        <p>
          <b>Sessões:</b> {sessions}
        </p>
        <div>
          {hasReadMore && (
            <Button label="SABER MAIS" href={`/espetaculos/${slug}`} />
          )}
          <Button label="RESERVAR" />
        </div>
      </div>
    </div>
  );
};

export default FullScreenEvent;
