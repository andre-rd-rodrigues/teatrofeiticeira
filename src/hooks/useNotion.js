const useNotion = (data) => {
  if (!data)
    return {
      slug: undefined,
      title: undefined,
      date: undefined,
      cover: undefined,
      sessions: undefined,
      description: undefined
    };

  const slug = data.properties.Slug?.rich_text[0].plain_text;
  const title = data.properties.Name?.title[0].plain_text;
  const date = data.properties.Date?.date.start;
  const cover = data.cover.external?.url;
  const coverFile = data.cover.file?.url;
  const sessions = data.properties.Sessions?.rich_text[0].plain_text;
  const description = data.properties.Description?.rich_text[0].plain_text;

  return { slug, title, date, cover, coverFile, sessions, description };
};

export default useNotion;
