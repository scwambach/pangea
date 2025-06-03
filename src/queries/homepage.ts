import { imageQuery, richTextProps } from "./common";

export const HOME = `{
  "ctaBanner": *[_type == "homePage"][0].ctaBanner {
    ...,
    image ${imageQuery},
    copy[] {
      ${richTextProps}
    }
  },
  "mediaCardRow": *[_type == "homePage"][0].mediaCards[] {
    image ${imageQuery},
    _key,
    description,
    title,
    buttonText,
    url,
  },
  "mapSelector": *[_type == "homePage"][0].locationGrid {
    "heading": *[_type == "homePage"][0].heroBannerHeading,
    "items": locations[] -> {
      _id,
      name,
      "slug": slug.current,
      isActive,
      externalUrl,
      mapImage ${imageQuery},
    },
  },
  "restaurantGrid": *[_type == "homePage"][0].locationGrid.locations[] -> {
    _id,
    name,
    "slug": slug.current,
    isActive,
    externalUrl,
    flavorsFrom,
    address,
    orderOnlineLink
  },
  "gallery": *[_type == "homePage"][0].imageGallery[] ${imageQuery},
  "reviews": *[_type == "homePage"][0].reviews {
    ...,
  }
}`;
