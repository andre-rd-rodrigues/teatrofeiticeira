import React from "react";
import styles from "./eventhorizontalcard.module.scss";
import Image from "next/image";
import Link from "next/link";
import useNotion from "@/hooks/useNotion";

const EventHorizontalCard = ({ event }) => {
  const { title, description, slug, cover, sessions } = useNotion(event);

  return (
    <div
      className={`${styles.container} bg-white rounded-xl shadow-md overflow-hidden`}
    >
      <Link href={`espetaculos/${slug}`}>
        <div className="lg:flex">
          <div className={`${styles.imageCard} relative`}>
            <Image
              fill
              sizes="100vw"
              className="object-cover"
              src={cover}
              alt={title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">
              {sessions}
            </div>
            <h4>{title}</h4>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventHorizontalCard;

{
  /* <Link
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
    </Link> */
}
