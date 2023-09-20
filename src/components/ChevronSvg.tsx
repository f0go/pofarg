import { FC } from "react";

export const ChevronSvg: FC<{ className: string; onClick: () => void }> = ({
  className,
  onClick,
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M33 33L50 50L67 33"
      stroke="#95959f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
    />
  </svg>
);
