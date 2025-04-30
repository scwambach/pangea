import { LangLogo, PangeaLogo, SazonLogo } from "@/icons";

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
