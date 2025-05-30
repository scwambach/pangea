import { LangLogo, PangeaLogo, SazonLogo } from "@/icons";
import napoli from "@/images/napoli.jpg";

export const bgTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? "bg-pangea"
    : slug === "pangea-pizzeria-downtown"
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
    : slug === "pangea-pizzeria-downtown"
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
    : slug === "pangea-pizzeria-downtown"
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
  style,
  className,
}: {
  slug: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return slug === "pangea-kitchen" ? (
    <PangeaLogo color={color} className={className} style={style} />
  ) : slug === "pangea-pizzeria-downtown" ? (
    <PangeaLogo color={color} className={className} style={style} />
  ) : slug === "2nd-language" ? (
    <LangLogo color={color} className={className} style={style} />
  ) : slug === "sazon-y-fuego" ? (
    <SazonLogo color={color} className={className} style={style} />
  ) : (
    <PangeaLogo color={color} className={className} style={style} />
  );
};

export const blogBgTheme = (slug: string) => {
  return slug === "pangea-kitchen"
    ? napoli
    : slug === "pangea-pizzeria-downtown"
      ? napoli
      : slug === "2nd-language"
        ? napoli
        : slug === "sazon-y-fuego"
          ? napoli
          : napoli;
};
