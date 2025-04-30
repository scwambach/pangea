import { imageQuery, richTextProps } from "./common";

export const GLOBAL = `*[_type == "globalSettings"][0] {
  mainPhone,
  siteLogo ${imageQuery},
  siteName,
  ctaBanner {
    ...,
    copy[] {
      ${richTextProps}
    }
  },
  siteDescription,
  mainEmail,
  ogImage ${imageQuery},
  "locations": *[_type == "restaurant"] {
    _id,
    name,
    address,
    hours,
    socialLinks
  }
}`;
