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
  "restaurants": *[_type == "restaurant"] {
    "slug": slug.current,
    _id,
    mapImage ${imageQuery},
    name,
    flavorsFrom,
    orderOnlineLink,
    "image": imageGallery[0] ${imageQuery},
  }
}`;
