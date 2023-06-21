import { today, yesterday } from "@/utils/date";
import { Client } from "@notionhq/client";

const { NotionToMarkdown } = require("notion-to-md");

const database_id = "33adc5ea6d084503aeeb770e054f22f8";

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

/* GET */
const getAllEvents = async () => {
  const notionEvents = await notion.databases.query({
    database_id,
    filter: {
      and: [
        {
          property: "Date",
          date: {
            after: yesterday
          }
        },
        {
          property: "Publish",
          checkbox: {
            equals: true
          }
        }
      ]
    },

    sorts: [
      {
        property: "Date",
        direction: "ascending"
      }
    ]
  });
  return notionEvents.results;
};

const getEventBySlugMarkdown = async (slug) => {
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug
        }
      }
    }
  });

  const page = response.results[0];
  /*   const metadata = getPageMetaData(page); */
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    /*     metadata, */
    markdown: mdString
  };
};
const getEventBySlug = async (slug) => {
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug
        }
      }
    }
  });

  return {
    event: response.results[0]
  };
};

export { getAllEvents, getEventBySlug, getEventBySlugMarkdown };
