import { today, yesterday } from "@/utils/date";
import { Client } from "@notionhq/client";

const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

/* Events */
const getAllEvents = async () => {
  console.log(process.env.DB_EVENTS_ID);
  const notionEvents = await notion.databases.query({
    database_id: process.env.DB_EVENTS_ID,
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
    database_id: process.env.DB_EVENTS_ID,
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
    database_id: process.env.DB_EVENTS_ID,
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

/* Content */
const getContentMarkdownByPage = async (pageName) => {
  const response = await notion.databases.query({
    database_id: process.env.DB_CONTENT_ID,
    filter: {
      property: "Name",
      formula: {
        string: {
          equals: pageName
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
const getContentByPage = async (pageName) => {
  const response = await notion.databases.query({
    database_id: process.env.DB_CONTENT_ID,
    filter: {
      property: "Name",
      formula: {
        string: {
          equals: pageName
        }
      }
    }
  });

  return response.results[0];
};

/* Gallery */
const getGallery = async () => {
  const response = await notion.blocks.children.list({
    block_id: process.env.DB_GALLERY_ID
  });

  return response.results;
};

export {
  getAllEvents,
  getEventBySlug,
  getEventBySlugMarkdown,
  getContentMarkdownByPage,
  getContentByPage,
  getGallery
};
