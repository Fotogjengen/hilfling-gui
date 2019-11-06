import React, { FC } from "react";
import styles from "./HeaderLink.module.css";

export interface Props {
  /** Content inside tags */
  children: any;
  /** Function that gets called when clicked */
  onClick?: () => void;
}

const HeaderLink: FC<Props> = ({ children, onClick, ...rest }: Props) => (
  <div className={styles.container}>
    <p className={styles.headerTextElement} {...rest} onClick={onClick}>
      {children}
    </p>
  </div>
);

export default HeaderLink;
