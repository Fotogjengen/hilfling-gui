import React, { FC } from "react";
import cx from "classnames";
import styles from "./DotDivider.module.css";
import { DefaultProps } from "../../types";

type ORANGE = "orange";
type YELLOW = "yellow";
type RED = "red";
type BLUE = "blue";

export type ColorType = ORANGE | YELLOW | RED | BLUE;
interface Props extends DefaultProps {
  /** Color of dot divider */
  color: ColorType;
}

const DotDivider: FC<Props> = ({ color, className, ...rest }: Props) => {
  return (
    <div
      className={cx(styles.dotdivider, styles[color], className)}
      {...rest}
    ></div>
  );
};

export default DotDivider;
