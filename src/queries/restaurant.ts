import { imageQuery, richTextProps } from "./common";

export const RESTAURANT = `*[_type == "restaurant" && slug.current == $slug][0] {
  name,
  "banner": {
    "slug": slug.current,
    "backgroundImage": banner.backgroundImage ${imageQuery},
    "copy": banner.copy[] {
      ${richTextProps}
    },
    "orderOnlineLink": orderOnlineLink
  },
  "menus": {
    "slug": slug.current,
    "items":   menus[] {
      name,
      "menu": menu.asset -> url
    }
  },
  "featuresBanner": {
    "slug": slug.current,
    "backgroundImage": featuresBanner.backgroundImage ${imageQuery},
    "copy": featuresBanner.copy[] {
      ${richTextProps}
    },
    "email": *[_type == "globalSettings"][0].mainEmail,
  },
  "ctaBanner": *[_type == "globalSettings"][0].ctaBanner {
    ...,
    image ${imageQuery},
    copy[] {
      ${richTextProps}
    }
  },
  socialLinks,
  "gallery": imageGallery[] ${imageQuery},
}`;
