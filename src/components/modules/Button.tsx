import { buttonClasses } from "@/utils/buttonClasses";

export const Button = ({
  children,
  className,
  color = "bg-paprika",
  disabled,
  onClick,
  text,
  type = "button",
}: {
  children?: React.ReactNode;
  className?: string;
  color?:
    | "bg-black"
    | "bg-brick"
    | "bg-pangea"
    | "bg-paprika"
    | "bg-pizzaria"
    | "bg-tan"
    | "bg-wheat";
  disabled?: boolean;
  onClick?: () => void;
  text?: string;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${color} cursor-pointer ${buttonClasses}${className ? ` ${className}` : ""}`}
    >
      {children || text}
    </button>
  );
};
