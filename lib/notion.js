import { Client } from "@notionhq/client";
const { NotionToMarkdown } = require("notion-to-md");

const database_id = `5687d673de2347b388b5d39a2455a5ff`;
const db_events_id = "33adc5ea6d084503aeeb770e054f22f8";

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const getAllPublished = async () => {
  const myPosts = await notion.databases.query({
    database_id,
    filter: {
      property: "Publish",
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        property: "Created",
        direction: "descending"
      }
    ]
  });
  return myPosts.results;
};

const getSinglePost = async (slug) => {
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

/* Events */

const getAllEvents = async () => {
  const myPosts = await notion.databases.query({
    database_id: db_events_id,
    filter: {
      property: "Publish",
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        property: "Date",
        direction: "descending"
      }
    ]
  });
  return myPosts.results;
};

const getSingleEvent = async (slug) => {
  const response = await notion.databases.query({
    database_id: db_events_id,
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

export { getAllPublished, getSinglePost, getAllEvents, getSingleEvent };
