import { MediaCardProps } from "@/components/modules/MediaCard";

export interface CustomImageProps {
  className?: string;
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  alt?: string;
  imageFor: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    crop?: {
      _type: string;
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    hotspot?: {
      _type: string;
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
}

export interface PopUpCtaProps {
  heading?: string;
  copy?: string;
  button?: {
    text: string;
    href: string;
  };
}

export interface GlobalProps {
  siteTagline: string;
  mainPhone: string;
  siteLogo: CustomImageProps;
  siteName: string;
  siteDescription: string;
  mainEmail: string;
  ogImage: CustomImageProps;
  popUpCta: PopUpCtaProps;
  ctaBanner: {
    image: CustomImageProps;
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
  isActive?: string;
  externalUrl?: string;
  mapImage: CustomImageProps;
}

export interface TasteMakerItemProps extends MediaCardProps {
  _id: string;
}
export interface PostItemProps extends MediaCardProps {
  _id: string;
}

export interface CtaBannerProps {
  image: CustomImageProps;
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
  gallery: CustomImageProps[];
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

export type FeatureBannerProps = {
  backgroundImage: CustomImageProps;
  copy: any[];
  slug: string;
  email: string;
};

export type RestaurantProps = {
  name: string;
  isActive?: boolean;
  externalUrl?: string;
  banner: {
    slug: string;
    backgroundImage: CustomImageProps;
    copy: any[];
    orderOnlineLink: string;
  };
  menus: {
    slug: string;
    items: {
      name: string;
      menu: string;
    }[];
  };
  featuresBanner: FeatureBannerProps;
  gallery: CustomImageProps[];
  socialLinks: any[];
  ctaBanner: CtaBannerProps;
  relatedPosts: {
    slug: string;
    items: PostItemProps[];
  };
};

export type PostProps = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: any[];
  nextPost: {
    slug: string;
    title: string;
  };
  previousPost: {
    slug: string;
    title: string;
  };
  attachedLocation: {
    name: string;
    isActive: boolean;
    externalUrl: string;
    slug: string;
  };
  mainImage: CustomImageProps;
};
