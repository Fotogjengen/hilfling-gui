import React, { FC } from "react";
import cx from "classnames";
import styles from "./Card.module.css";
import { DefaultProps } from "../../types";

type UKA = "uka";
type SAMFUNDET = "samfundet";
type ISFIT = "isfit";
type ANNET = "annet";

type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

interface Props extends DefaultProps {
  /** Children components */
  children?: any;
  /** Specifies type of event card */
  type?: EventType;
  /** Rounded corners */
  rounded?: boolean;
}

const Card: FC<Props> = ({
  children,
  type,
  rounded = false,
  className,
}: Props) => {
  console.log(type);
  return (
    <div
      className={
        type
          ? cx(styles[type], styles.card, className)
          : cx(rounded && styles.rounded, styles.card, className)
      }
    >
      {children}
    </div>
  );
};

export default Card;
