const useNotion = (data) => {
  if (!data)
    return {
      slug: undefined,
      title: undefined,
      date_start: undefined,
      date_end: undefined,
      cover: undefined,
      sessions: undefined,
      description: undefined
    };

  const slug = data.properties.Slug?.rich_text[0].plain_text;
  const title = data.properties.Name?.title[0].plain_text;
  const date_start = data.properties.Date?.date.start;
  const date_end = data.properties.Date?.date.end;
  const cover = data.cover.external?.url;
  const coverFile = data.cover.file?.url;
  const sessions = data.properties.Sessions?.rich_text[0].plain_text;
  const description = data.properties.Description?.rich_text[0].plain_text;

  return {
    slug,
    title,
    cover,
    coverFile,
    sessions,
    description,
    date_start,
    date_end
  };
};

export default useNotion;
