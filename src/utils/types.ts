import { MediaCardProps } from "@/components/modules/MediaCard";
import { ImageProps } from "next/image";

export interface GlobalProps {
  siteTagline: string;
  mainPhone: string;
  siteLogo: ImageProps;
  siteName: string;
  siteDescription: string;
  mainEmail: string;
  ogImage: ImageProps;
  ctaBanner: {
    image: ImageProps;
    copy: any[];
    buttons: {
      _key: string;
      text: string;
      href: string;
    }[];
  };
  navigation: {
    _key: string;
    text: string;
    href: string;
  }[];
  header: {
    items: {
      _key: string;
      text: string;
      href: string;
    }[];
    tagline: string;
  };
  footer: FooterProps;
}

export interface MapSelectorItemProps {
  _id: string;
  slug: string;
  name: string;
  mapImage: ImageProps;
}

export interface TasteMakerItemProps extends MediaCardProps {
  _id: string;
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

export type Address = {
  cityStateZip: string;
  street: string;
};

export type AddressProps = {
  _key: string;
  name: string;
  address: { cityStateZip: string; street: string } | null;
};

export type HoursProps = {
  _key: string;
  name: string;
  hours:
    | {
        _key: string;
        title: string;
        days: string[];
      }[]
    | null;
};

export type FooterProps = {
  email: string;
  phone: string;
  addresses: AddressProps[];
  hours: HoursProps[];
  socials: (string | null)[];
};
