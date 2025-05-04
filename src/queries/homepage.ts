import { imageQuery, richTextProps } from "./common";

export const HOME = `{
  "ctaBanner": *[_type == "globalSettings"][0].ctaBanner {
    ...,
    image ${imageQuery},
    copy[] {
      ${richTextProps}
    }
  },
  "tasteMakers": *[_type == "tasteMakerLink"] {
    image ${imageQuery},
    _id,
    description,
    title,
    url,
  },
  "mapSelector": *[_type == "globalSettings"][0].locations[] -> {
    _id,
    name,
    "slug": slug.current,
    mapImage ${imageQuery},
  },
  "restaurantGrid": *[_type == "globalSettings"][0].locations[] -> {
    _id,
    name,
    "slug": slug.current,
    flavorsFrom,
    orderOnlineLink
  },
  "gallery": *[_type == "globalSettings"][0].locations[] -> {
    "image": imageGallery[0] ${imageQuery},
  },
}`;
