import { imageQuery } from "./common";

export const BLOGROLL = `{
  "posts": *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": mainImage ${imageQuery},
    "attachedLocation": attachedLocation -> slug.current,
    categories[] -> {
      _id,
      title,
      "slug": slug.current
    }
  },
  "totalPostCount": count(*[_type == "post"])
}`;
