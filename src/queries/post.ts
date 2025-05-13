import { imageQuery, richTextProps } from "./common";

export const POST = `*[_type == "post" && slug.current == $post][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  content[] {
    ${richTextProps}
  },
  "nextPost": *[_type == "post" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0] {
    "slug": slug.current,
    title,
  },
  "previousPost": *[_type == "post" && publishedAt > ^.publishedAt] | order(publishedAt desc)[0] {
    "slug": slug.current,
    title,
  },
  attachedLocation -> {
    name,
    isActive,
    externalUrl,
    "slug": slug.current,
  },
  mainImage ${imageQuery},
}`;
