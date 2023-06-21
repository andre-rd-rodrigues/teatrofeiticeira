import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from "./nextEventsSection.module.scss";
import PageContainer from "../PageContainer/PageContainer";
import Section from "../Section/Section";

function NextEventsSection() {
  return (
    <Section title="Próximos espectáculos" className={styles.container}>
      <div className={styles.grid}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </Section>
  );
}

export default NextEventsSection;
