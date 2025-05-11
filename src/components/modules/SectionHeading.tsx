export const SectionHeading = ({
  title,
  className,
  element = "h2",
}: {
  title: string;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const HeadingTag = element;
  return (
    <HeadingTag
      className={`text-center uppercase font-black tracking-widest text-[26px] ${className ? className : ""}`}
    >
      {title}
    </HeadingTag>
  );
};
