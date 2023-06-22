import EventHeroSection from "@/components/EventHeroSection/EventHeroSection";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";
import { getAllEvents } from "@/lib/notion";

export default function Home({ events }) {
  return (
    <>
      <EventHeroSection event={events[0]} />
      <PageContainer>
        <NextEventsSection events={events} />
      </PageContainer>
    </>
  );
}

export async function getServerSideProps() {
  const events = await getAllEvents();

  return {
    props: {
      events
    }
  };
}
