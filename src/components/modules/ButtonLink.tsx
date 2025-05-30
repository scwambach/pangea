import { buttonClasses } from "@/utils/buttonClasses";
import Link from "next/link";

export const ButtonLink = ({
  href,
  text,
  className,
  color = "bg-paprika",
  children,
}: {
  href: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
  color?:
    | "bg-paprika"
    | "bg-brick"
    | "bg-pizzaria"
    | "bg-tan"
    | "bg-black"
    | "bg-wheat"
    | "bg-pangea";
}) => {
  const isExternalLink = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className={`${color} ${buttonClasses}${className ? ` ${className}` : ""}`}
    >
      {children || text}
    </Link>
  );
};
