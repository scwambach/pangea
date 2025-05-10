import { imageQuery } from "./common";

export const GLOBAL = `*[_type == "globalSettings"][0] {
  mainPhone,
  siteLogo ${imageQuery},
  siteName,
  siteDescription,
  mainEmail,
  ogImage ${imageQuery},
  siteTagline,
  "locations": *[_type == "globalSettings"][0].locations[] -> {
    _id,
    name,
    "slug": slug.current,
    address,
    hours,
    socialLinks
  },
  "header": {
    "items": *[_type == "globalSettings"][0].locations[] -> {
      "_key": _id,
      "text": name,
      "href": slug.current
    },
    "tagline": siteTagline,
  },
  "footer": {
    "email": mainEmail,
    "phone": mainPhone,
    "socials": *[_type == "globalSettings"][0].locations[] -> socialLinks[],
    "addresses": *[_type == "globalSettings"][0].locations[] -> {
      "_key": _id,
      name,
      address
    },
    "hours": *[_type == "globalSettings"][0].locations[] -> {
      "_key": _id,
      name,
      hours
    }
  }
}`;
