import React, { FC } from "react";
import cx from "classnames";
import styles from "./DotDivider.module.css";

type ORANGE = "orange";
type YELLOW = "yellow";
type RED = "red";
type BLUE = "blue";

export type ColorType = ORANGE | YELLOW | RED | BLUE;
interface Props {
  /** Color of dot divider */
  color: ColorType;
}

const DotDivider: FC<Props> = ({ color }: Props) => {
  return <div className={cx(styles.dotdivider, styles[color])}></div>;
};

export default DotDivider;
