import * as contentful from "contentful";

export default async function getContentfulDatagetStaticProps(contentType?: string) {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    environment: "master",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  });
  const data = await client.getEntries({
    content_type: contentType,
  });

  return data
}
