import React, { FC } from "react";
import styles from "./HeaderLink.module.css";

export interface Props {
  children: any;
  size: number;
}

const HeaderLink: FC<Props> = ({ children, size, ...rest }: Props) => (
  <div className={styles.container}>
    <h4
      style={{ fontSize: size }}
      className={styles.headerTextElement}
      {...rest}
    >
      {children}
    </h4>
  </div>
);

export default HeaderLink;
