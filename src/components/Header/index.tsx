import React, { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo";

interface Props {
  children?: ReactNode;
  size: number;
}

const Header: FC<Props> = ({ size, children }: Props) => (
  <div className={styles.container}>
    <Logo size={size} />
    <div className={styles.childrenContainer}>{children}</div>
  </div>
);

export default Header;
