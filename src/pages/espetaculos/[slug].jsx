import EventHeroSection from "@/components/EventHeroSection/EventHeroSection";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";
import {
  getAllEvents,
  getEventBySlug,
  getEventBySlugMarkdown
} from "@/lib/notion";
import ReactMarkdown from "react-markdown";

function Event({ event, eventMarkdown, allEvents }) {
  return (
    <>
      <EventHeroSection event={event} height="70vh" hasReadMore={false} />
      <PageContainer>
        <ReactMarkdown className="markdown">{eventMarkdown}</ReactMarkdown>
        <NextEventsSection events={allEvents} />
      </PageContainer>
    </>
  );
}

export default Event;

export const getStaticPaths = async () => {
  const events = await getAllEvents();

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.properties.Slug.rich_text[0].plain_text
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async (ctx) => {
  let { slug } = ctx.params;

  let allEvents = await getAllEvents();
  let { event } = await getEventBySlug(slug);
  let { markdown } = await getEventBySlugMarkdown(slug);

  return {
    props: {
      eventMarkdown: markdown.parent,
      event,
      allEvents
    }
  };
};
