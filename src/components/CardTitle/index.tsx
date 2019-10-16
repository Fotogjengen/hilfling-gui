import React, { FC } from "react";
import cx from "classnames";
import styles from "./CardTitle.module.css";

interface Props {
  /** Title */
  title: string;
  /** If title should be capitalized */
  capitalized?: boolean;
  /** If title should be centerned */
  centered?: boolean;
}

const CardTitle: FC<Props> = ({
  title,
  capitalized,
  centered,
  ...rest
}: Props) => {
  const classname = cx(
    styles.cardtitle,
    { [styles.capitalized]: capitalized },
    { [styles.centered]: centered },
  );
  return (
    <h2 className={classname} {...rest}>
      {title}
    </h2>
  );
};

export default CardTitle;
