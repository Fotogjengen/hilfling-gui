import React, { FC } from "react";

interface Props {
  clicked?: Boolean;
}

const DropDownArrow: FC<Props> = ({ clicked = false }: Props) => (
  <div>
    {clicked ? (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7 14L2 8.71154L3.4 7.23077L7 11.0385L14.6 3L16 4.48077L7 14Z"
          fill="#B42025"
        />
      </svg>
    ) : (
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.54"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.8833 0.216797L16 12.1001L4.11667 0.216797L0.5 3.83346L16 19.3335L31.5 3.83346L27.8833 0.216797Z"
          fill="black"
        />
      </svg>
    )}
  </div>
);

export default DropDownArrow;
