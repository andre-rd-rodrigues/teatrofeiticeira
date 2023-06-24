import { today, yesterday } from "@/utils/date";
import { Client } from "@notionhq/client";

const { NotionToMarkdown } = require("notion-to-md");

const db_events_id = "33adc5ea6d084503aeeb770e054f22f8";
const db_content_id = "9f9f2f41449444c4a4fbc6939eb09323";
const gallery_id = "3024a91bc2fe46c8ad17a8e4a931f98a";

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

/* Events */
const getAllEvents = async () => {
  const notionEvents = await notion.databases.query({
    database_id: db_events_id,
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

const getEventBySlug = async (slug) => {
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

  return {
    event: response.results[0]
  };
};

/* Content */
const getContentMarkdownByPage = async (pageName) => {
  const response = await notion.databases.query({
    database_id: db_content_id,
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
    database_id: db_content_id,
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
    block_id: gallery_id
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
