import React, { FC } from "react";
import cx from "classnames";
import styles from "./CardTitle.module.css";

interface Props {
  /** Title */
  title: string;
  /** If title should be capitalized */
  capitalized?: boolean;
}

export const CardTitle: FC<Props> = ({
  title,
  capitalized,
  ...rest
}: Props) => (
  <h2 className={cx(styles.cardtitle, { [styles.capitalized]: capitalized })}>
    {title}
  </h2>
);

export default CardTitle;
