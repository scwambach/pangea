export const FooterBlock = ({
  heading,
  className,
  children,
}: {
  heading?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {heading && (
        <p className="uppercase text-white tablet-lg:text-pangea font-extrabold tracking-wider text-[18px]">
          {heading}
        </p>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};
