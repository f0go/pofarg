import { FC } from "react";

export const ArrowSvg: FC<{ className: string }> = ({ className }) => (
  <svg
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 12V12.5H8.5V12H8ZM8.35355 3.14645C8.15829 2.95118 7.84171 2.95118 7.64645 3.14645L4.46447 6.32843C4.2692 6.52369 4.2692 6.84027 4.46447 7.03553C4.65973 7.2308 4.97631 7.2308 5.17157 7.03553L8 4.20711L10.8284 7.03553C11.0237 7.2308 11.3403 7.2308 11.5355 7.03553C11.7308 6.84027 11.7308 6.52369 11.5355 6.32843L8.35355 3.14645ZM3 12.5H8V11.5H3V12.5ZM8.5 12V3.5H7.5V12H8.5Z"
      fill="#CECECE"
    />
  </svg>
);
