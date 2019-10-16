import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./Hamburger.module.css";

interface Props {
  open: boolean;
  size: number;
  color: string;
}

const Hamburger: FC<Props> = ({ open, size, color, ...rest }: Props) => {
  const topBun = cx({ [styles.topBunChange]: open }, styles.line);
  const meat = cx({ [styles.meatChange]: open }, styles.line);
  const bottomBun = cx({ [styles.bottomBunChange]: open }, styles.line);

  return (
    <div
      style={{ height: size, width: size }}
      className={styles.hamburger}
      {...rest}
    >
      <div style={{ width: size, background: color }} className={topBun} />
      <div style={{ width: size, background: color }} className={meat} />
      <div style={{ width: size, background: color }} className={bottomBun} />
    </div>
  );
};

export default Hamburger;
