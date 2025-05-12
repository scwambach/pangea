export const FooterColumn = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col gap-8 tablet-lg:gap-16 ${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
};
