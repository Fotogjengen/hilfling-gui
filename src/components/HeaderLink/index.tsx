import React, { FC } from "react";
import styles from "./HeaderLink.module.css";

export interface Props {
  children: any;
  size: number;
}

const HeaderLink: FC<Props> = ({ children, size, ...rest }: Props) => (
  <div className={styles.container}>
    <p
      style={{ fontSize: size }}
      className={styles.headerTextElement}
      {...rest}
    >
      {children}
    </p>
  </div>
);

export default HeaderLink;
