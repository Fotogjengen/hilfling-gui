import React, { FC } from "react";
import DotDivider, { ColorType } from "../DotDivider/DotDivider";

interface Props {
  /** Number of images in event album */
  images: number;
  /** Date of event e.g.: temafest: halloween */
  date: string;
  /** Location of event e.g.: Daglighallen */
  location: string;
  /** Color of dot divider */
  color: ColorType;
}

const EventCardDescription: FC<Props> = ({
  images,
  date,
  location,
  color,
}: Props) => {
  return (
    <div>
      {images} bilder
      <DotDivider color={color} />
      {date}
      <DotDivider color={color} />
      {location}
    </div>
  );
};

export default EventCardDescription;
