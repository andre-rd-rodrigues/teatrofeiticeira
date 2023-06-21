import FullScreenEvent from "@/components/FullScreenEvent/FullScreenEvent";
import NextEventsSection from "@/components/NextEvents/NextEventsSection";
import PageContainer from "@/components/PageContainer/PageContainer";
import Section from "@/components/Section/Section";
import {
  getAllEvents,
  getEventBySlug,
  getEventBySlugMarkdown
} from "@/lib/notion";
import React from "react";
import ReactMarkdown from "react-markdown";

function Event({ event, eventMarkdown, allEvents }) {
  return (
    <>
      <FullScreenEvent event={event} height="70vh" hasReadMore={false} />
      <PageContainer>
        <ReactMarkdown className="markdown">
          {eventMarkdown.parent}
        </ReactMarkdown>
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
      eventMarkdown: markdown,
      event,
      allEvents
    }
  };
};
