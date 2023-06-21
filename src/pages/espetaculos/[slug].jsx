import React from "react";

function Event() {
  return <div>Event</div>;
}

export default Event;

/* export const getStaticPaths = async () => {
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

  let { markdown } = await getSingleEvent(slug);

  return {
    props: {
      event: markdown
    }
  };
};
 */
