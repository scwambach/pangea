import { buttonClasses } from "@/utils/buttonClasses";

export const Button = ({
  text,
  onClick,
  className,
  children,
  color = "bg-paprika",
}: {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  color?:
    | "bg-paprika"
    | "bg-brick"
    | "bg-pizzaria"
    | "bg-tan"
    | "bg-wheat"
    | "bg-pangea";
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} cursor-pointer ${buttonClasses}${className ? ` ${className}` : ""}`}
    >
      {children || text}
    </button>
  );
};
