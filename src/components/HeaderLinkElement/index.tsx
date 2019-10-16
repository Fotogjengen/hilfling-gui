import React, { FC, SyntheticEvent } from "react";
import styles from "./HeaderLink.module.css";

interface Props {
  children: any;
  onClick(event: SyntheticEvent): void;
  size: number
}

const HeaderLink: FC<Props> = ({ children, onClick, size }: Props) => (
  <div className={styles.container}>
    <h4 onClick={onClick} style={{fontSize: size}} className={styles.headerTextElement}>
      {children}
    </h4>
  </div>
);

export default HeaderLink;
