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

export interface MediaCardRowProps extends MediaCardProps {
  _key: string;
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

export interface ReviewItemProps {
  _key: string;
  author: string;
  link: string;
  rating: number;
  text: string;
}

export interface ReviewsProps {
  heading?: string;
  reviews: ReviewItemProps[];
}

export interface HomePageProps {
  ctaBanner: CtaBannerProps;
  mediaCardRow: MediaCardRowProps[];
  mapSelector: {
    heading: string;
    items: MapSelectorItemProps[];
  };
  restaurantGrid: {
    name: string;
    flavorsFrom: any[];
    orderOnlineLink: string;
    address?: Address;
    slug: string;
  }[];
  introGallery: CustomImageProps[];
  gallery: CustomImageProps[];
  reviews: ReviewsProps;
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
  buttons?: {
    _key: string;
    text: string;
    href: string;
  }[];
};

export type MenuItemProps = {
  _key: string;
  name: string;
  price: number;
  description: any[];
  image: CustomImageProps;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  canBeVegetarian?: boolean;
  canBeVegan?: boolean;
  canBeGlutenFree?: boolean;
};

export type SingleMenuProps = {
  name: string;
  menu?: string;
  footnote?: string;
  menuSections?: {
    title: string;
    _key: string;
    description: string;
    items: MenuItemProps[];
  }[];
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
  fullMenu?: string;
  menus: {
    slug: string;
    items: SingleMenuProps[];
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
