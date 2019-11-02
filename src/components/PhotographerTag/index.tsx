import React, { FC } from "react";
import cx from "classnames";
import styles from "./PhotographerTag.module.css";

type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props {
  /** Text inside tag */
  children?: any;
  /** Color of tag */
  color: ColorType;
}

const PhotographerTag: FC<Props> = ({ children, color }: Props) => {
  return <div className={cx(styles[color], styles.tag)}>{children}</div>;
};

export default PhotographerTag;
