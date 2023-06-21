import { getAllEvents, getEventBySlug } from "@/lib/notion";
import React from "react";
import ReactMarkdown from "react-markdown";

function Event({ event }) {
  return <ReactMarkdown className="markdown">{event.parent}</ReactMarkdown>;
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

  let { markdown } = await getEventBySlug(slug);

  return {
    props: {
      event: markdown
    }
  };
};
