import FullScreenEvent from "@/components/FullScreenEvent/FullScreenEvent";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";
import { getAllEvents } from "@/lib/notion";

export default function Home({ events }) {
  return (
    <>
      <FullScreenEvent event={events[0]} />
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
