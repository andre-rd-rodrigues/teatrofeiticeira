import React from "react";
import styles from "./eventherosection.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import moment from "moment/moment";
import useNotion from "@/hooks/useNotion";
import { today } from "@/utils/date";
import { contacts } from "@/data";

const EventHeroSection = ({ event, height = "100vh", hasReadMore = true }) => {
  const { title, date, slug, cover, sessions } = useNotion(event);

  if (!event) return null;

  const renderDate =
    moment().format("L") === moment(date).format("L")
      ? "Hoje!"
      : moment(date).format("LLL");

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
          <b>Data:</b> {renderDate}
        </p>
        <p>
          <b>Sessões:</b> {sessions}
        </p>
        <div>
          {hasReadMore && (
            <Button
              label="SABER MAIS"
              href={`/espetaculos/${slug}`}
              className={styles.saberMaisBUtton}
            />
          )}
          <Button label="RESERVAR" tel={contacts.tel} />
        </div>
      </div>
    </div>
  );
};

export default EventHeroSection;
