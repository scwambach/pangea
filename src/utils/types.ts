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

export interface HomePageProps {
  ctaBanner: {
    image: ImageProps;
    copy: any[];
    buttons: {
      _key: string;
      text: string;
      href: string;
    }[];
  };
  tasteMakers: {
    _id: string;
    description: any[];
    image: ImageProps;
    title: string;
    url: string;
  }[];
  restaurants: {
    _id: string;
    flavorsFrom: any[];
    image: ImageProps;
    mapImage: ImageProps;
    name: string;
    orderOnlineLink: string;
    slug: string;
  }[];
}
