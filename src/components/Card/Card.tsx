import React, { FC } from "react";
import cx from "classnames";
import styles from "./Card.module.css";
import { DefaultProps } from "../../types";

type UKA = "uka";
type SAMFUNDET = "samfundet";
type ISFIT = "isfit";
type ANNET = "annet";

type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

export interface Props extends DefaultProps {
  /** Children components */
  children?: any;
  /** Specifies type of event card */
  type?: EventType;
  /** Rounded corners */
  rounded?: boolean;
  /** Shadow */
  shadow?: boolean;
}

const Card: FC<Props> = ({
  children,
  type,
  rounded = false,
  className,
  shadow = true,
  ...rest
}: Props) => {
  console.log(type);
  return (
    <div
      className={cx(
        {
          [styles.shadow]: shadow,
        },
        styles.card,
        className,
        type ? cx(styles[type]) : cx(rounded && styles.rounded),
      )}
    >
      {children}
    </div>
  );
};

export default Card;
