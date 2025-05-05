import { ImageProps } from "next/image";

export interface GlobalProps {
  locations: {
    _id: string;
    hours: {
      _key: string;
      title: string;
      days: string[];
    }[];
    address: {
      street: string;
      cityStateZip: string;
    };
    name: string;
    socialLinks: string[];
  }[];
  mainPhone: string;
  siteLogo: ImageProps;
  siteName: string;
  ctaBanner: {
    image: ImageProps;
    copy: any[];
    buttons: {
      _key: string;
      text: string;
      href: string;
    }[];
  };
  siteDescription: string;
  mainEmail: string;
  ogImage: ImageProps;
}

export interface MapSelectorItemProps {
  _id: string;
  slug: string;
  name: string;
  mapImage: ImageProps;
}

export interface TasteMakerItemProps {
  _id: string;
  description: any[];
  image: ImageProps;
  title: string;
  url: string;
}

export interface CtaBannerProps {
  image: ImageProps;
  copy: any[];
  heading: string;
  buttons: {
    _key: string;
    text: string;
    href: string;
  }[];
}

export interface HomePageProps {
  ctaBanner: CtaBannerProps;
  tasteMakers: TasteMakerItemProps[];
  mapSelector: MapSelectorItemProps[];
  restaurantGrid: {
    name: string;
    flavorsFrom: any[];
    orderOnlineLink: string;
    slug: string;
  }[];
  gallery: {
    image: ImageProps;
  }[];
}
