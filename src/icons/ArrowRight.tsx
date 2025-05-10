export const ArrowRight = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="11"
      viewBox="0 0 8 11"
      fill="none"
    >
      <path
        d="M0.100932 9.07799L1.88853 5.70751C2.01559 5.46803 2.01559 5.18722 1.88853 4.94774L0.100932 1.57768C-0.32917 0.76689 0.706092 -0.0329362 1.49591 0.5L7.61606 4.63026C8.12798 4.97557 8.12798 5.68011 7.61606 6.02542L1.49591 10.1553C0.706092 10.6882 -0.32917 9.88878 0.100932 9.07799Z"
        fill={color || "white"}
      />
    </svg>
  );
};
