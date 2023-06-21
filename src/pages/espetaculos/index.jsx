import Calendar from "@/components/Calendar/Calendar";
import EventHorizontalCard from "@/components/EventHorizontalCard/EventHorizontalCard";
import Page from "@/components/Page/Page";
import { getAllEvents, getEventByDate } from "@/lib/notion";
import { today } from "@/utils/date";
import { getAllEventsDates, getDayEvents } from "@/utils/tools";
import { useState } from "react";

function Espetaculos({ allEvents }) {
  console.log(allEvents);
  const [eventsShow, setEventsShow] = useState(() =>
    getDayEvents(allEvents, today)
  );

  const handleChangeCalendar = (date) => {
    setEventsShow(getDayEvents(allEvents, date));
  };

  return (
    <Page title="Espetáculos">
      <div className="flex">
        <div className="mx-4 w-50">
          <Calendar
            onChangeCalendar={handleChangeCalendar}
            eventsDates={getAllEventsDates(allEvents)}
          />
        </div>
        <div className="mx-4 w-50">
          <DynamicEventsSection events={eventsShow} loading={false} />
        </div>
      </div>
    </Page>
  );
}

export default Espetaculos;

export async function getServerSideProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents
    }
  };
}

const DynamicEventsSection = ({ events, loading }) => {
  if (!events || !events.length)
    return <p>Não existem espetáculos para este dia</p>;

  if (loading) return <p>Loading...</p>;

  return events.map((event) => (
    <EventHorizontalCard key={event.id} event={event} />
  ));
};
