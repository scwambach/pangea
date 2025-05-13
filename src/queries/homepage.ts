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
    buttonText,
    url,
  },
  "mapSelector": *[_type == "globalSettings"][0].locations[] -> {
    _id,
    name,
    "slug": slug.current,
    isActive,
    externalUrl,
    mapImage ${imageQuery},
  },
  "restaurantGrid": *[_type == "globalSettings"][0].locations[] -> {
    _id,
    name,
    "slug": slug.current,
    isActive,
    externalUrl,
    flavorsFrom,
    orderOnlineLink
  },
  "gallery": *[_type == "globalSettings"][0].locations[] -> imageGallery[0] ${imageQuery},
}`;
