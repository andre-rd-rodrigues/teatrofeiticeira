import { getAllEvents } from "@/lib/notion";
import EventCard from "../EventCard/EventCard";
import Section from "../Section/Section";
import styles from "./nextEventsSection.module.scss";

function NextEventsSection({ events }) {
  return (
    <Section title="Próximos espectáculos" className={styles.container}>
      <div className={styles.grid}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Section>
  );
}

export default NextEventsSection;
