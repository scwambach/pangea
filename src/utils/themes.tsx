import { LangLogo, PangeaLogo, SazonLogo } from "@/icons";
import napoli from "@/images/napoli.jpg";

export const bgTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? "bg-pangea"
    : slug === "pangea-pizzaria"
      ? "bg-pizzaria"
      : slug === "2nd-language"
        ? "bg-wheat"
        : slug === "sazon-y-fuego"
          ? "bg-paprika"
          : "bg-wheat";
};

export const decorationTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? "decoration-pangea"
    : slug === "pangea-pizzaria"
      ? "decoration-pizzaria"
      : slug === "2nd-language"
        ? "decoration-wheat"
        : slug === "sazon-y-fuego"
          ? "decoration-paprika"
          : "decoration-wheat";
};

export const textTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? "text-pangea"
    : slug === "pangea-pizzaria"
      ? "text-pizzaria"
      : slug === "2nd-language"
        ? "text-wheat"
        : slug === "sazon-y-fuego"
          ? "text-paprika"
          : "text-wheat";
};

export const logo = ({
  slug,
  color,
  className,
}: {
  slug: string;
  color?: string;
  className?: string;
}) => {
  return slug === "pangea-kitchen" ? (
    <PangeaLogo color={color} className={className} />
  ) : slug === "pangea-pizzaria" ? (
    <PangeaLogo color={color} className={className} />
  ) : slug === "2nd-language" ? (
    <LangLogo color={color} className={className} />
  ) : slug === "sazon-y-fuego" ? (
    <SazonLogo color={color} className={className} />
  ) : (
    <PangeaLogo color={color} className={className} />
  );
};

export const blogBgTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? napoli
    : slug === "pangea-pizzaria"
      ? napoli
      : slug === "2nd-language"
        ? napoli
        : slug === "sazon-y-fuego"
          ? napoli
          : napoli;
};
