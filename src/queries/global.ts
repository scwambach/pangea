import { imageQuery } from "./common";

export const GLOBAL = `*[_type == "globalSettings"][0] {
  mainPhone,
  siteLogo ${imageQuery},
  siteName,
  siteDescription,
  mainEmail,
  ogImage ${imageQuery},
  siteTagline,
  "header": {
    "items": *[_type == "homePage"][0].locationGrid.locations[] -> {
      "_key": _id,
      "text": name,
      "href": slug.current,
      isActive,
      externalUrl,
    },
    "tagline": siteTagline,
  },
  "footer": {
    "email": mainEmail,
    "phone": mainPhone,
    "socials": *[_type == "homePage"][0].locationGrid.locations[] -> socialLinks[],
    "addresses": *[_type == "homePage"][0].locationGrid.locations[] -> {
      "_key": _id,
      name,
      address
    },
    "hours": *[_type == "homePage"][0].locationGrid.locations[] -> {
      "_key": _id,
      name,
      hours
    }
  },
  popUpCta
}`;
