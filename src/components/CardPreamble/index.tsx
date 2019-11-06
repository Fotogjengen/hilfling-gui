import React, { FC, useState } from "react";
import DotDivider, { ColorType } from "../DotDivider";
import cx from "classnames";
import styles from "./CardPreamble.module.css";

type EventCard = "EventCard";
type GjengfotoCard = "GjengfotoCard";

type CardType = EventCard | GjengfotoCard;

interface Props {
  /** Number of images in event album */
  images: number;
  /** Date of event e.g.: temafest: halloween */
  date: string;
  /** Type of card */
  type: CardType;
  /** Color of dot divider */
  color: ColorType;
  /** Location of event e.g.: Daglighallen */
  location?: string;
  /** Centered */
  centered?: boolean;
}

const CardPreamble: FC<Props> = ({
  images,
  date,
  type,
  color,
  location,
  centered,
}: Props) => {
  const centeredText = cx({ [styles.centered]: centered });
  switch (type) {
    case "EventCard":
      return (
        <div className={centeredText}>
          {images} bilder
          <DotDivider color={color} />
          {date}
          <DotDivider color={color} />
          {location}
        </div>
      );
    case "GjengfotoCard":
      console.log(location);
      return (
        <div className={centeredText}>
          {images} bilder
          <DotDivider color={color} />
          {date}
        </div>
      );
    default:
      return <div>funker ikke</div>;
  }
};

export default CardPreamble;
