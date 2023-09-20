import { FC } from "react";

export const CollapseArrowSvg: FC<{
  className: string;
  onClick: () => void;
}> = ({ className, onClick }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M12.8227 15.875C12.4571 16.5083 11.5429 16.5083 11.1773 15.875M12.8227 15.875H11.1773M12.8227 15.875L12.2598 15.55L11.1773 15.875M12.8227 15.875L16.6332 9.27501C16.9989 8.64168 16.5418 7.85001 15.8105 7.85001H8.18946C7.45815 7.85001 7.00108 8.64167 7.36673 9.27501L11.1773 15.875"
      stroke="#CECECE"
      strokeWidth="1.3"
    />
  </svg>
);
