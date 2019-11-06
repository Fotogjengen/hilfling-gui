import React, { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo";
import Hamburger from "../Hamburger";

interface Props {
  /** Elements in the header, after hamburger meny */
  children?: any;
}

const Header: FC<Props> = ({ children }: Props) => (
  <div className={styles.container}>
    <Logo size={60} />
    <div className={styles.childrenContainer}>
      <Hamburger
        menuClicked={() => console.log("click")}
        color="black"
        isOpen={false}
        width={30}
        height={20}
        strokeWidth={3}
      />
      {children}
    </div>
  </div>
);

export default Header;
