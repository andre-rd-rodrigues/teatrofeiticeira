import Calendar from "@/components/Calendar/Calendar";
import EventHorizontalCard from "@/components/EventHorizontalCard/EventHorizontalCard";
import Page from "@/components/Page/Page";
import { getAllEvents } from "@/lib/notion";

function Espetaculos({ publishedEvents }) {
  console.log(publishedEvents);
  return (
    <Page title="Espetáculos">
      <div className="flex">
        <div className="mx-4 w-50">
          <Calendar />
        </div>
        <div className="mx-4 w-50">
          <EventHorizontalCard />
        </div>
      </div>
    </Page>
  );
}

export default Espetaculos;

export async function getServerSideProps() {
  const publishedEvents = await getAllEvents();

  return {
    props: {
      events: publishedEvents
    }
  };
}
