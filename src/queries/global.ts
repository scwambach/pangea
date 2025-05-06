import { imageQuery } from "./common";

export const GLOBAL = `*[_type == "globalSettings"][0] {
  mainPhone,
  siteLogo ${imageQuery},
  siteName,
  siteDescription,
  mainEmail,
  ogImage ${imageQuery},
  siteTagline,
  "locations": *[_type == "restaurant"] {
    _id,
    name,
    "slug": slug.current, 
    address,
    hours,
    socialLinks
  }
}`;
