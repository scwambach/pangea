import Link from "next/link";

export const ButtonLink = ({
  href,
  text,
  className,
  color = "bg-paprika",
}: {
  href: string;
  text: string;
  className?: string;
  color?:
    | "bg-paprika"
    | "bg-brick"
    | "bg-pizzaria"
    | "bg-tan"
    | "bg-wheat"
    | "bg-pangea";
}) => {
  const isExternalLink = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className={`${color} inline-block text-center text-white uppercase font-extrabold p-2 tracking-wide hover:opacity-80 transition-all duration-200 ease-in-out px-2 tablet-md:px-8 text-[12px] tablet-md:text-[16px]${className ? ` ${className}` : ""}`}
    >
      {text}
    </Link>
  );
};
