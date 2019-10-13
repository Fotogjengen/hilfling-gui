import React, { FC } from "react";
import cx from "classnames";
import styles from "./EventCard.css";

type UKA = "uka";
type SAMFUNDET = "samfundet";
type ISFIT = "isfit";
type ANNET = "annet";

type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

interface Props {
  /** Children components */
  children?: any;
  /** Specifies type of event card */
  type: EventType;
}

const EventCard: FC<Props> = ({ children, type }: Props) => {
  console.log(type);
  return <div className={cx(styles[type], styles.card)}>{children}</div>;
};

export default EventCard;
