import React, { FC, SyntheticEvent } from "react";
import styles from "./Logo.module.css";
import { LogoSvg } from "../icons";

interface Props {
  size: number;
  onClick?(event: SyntheticEvent): void;
}

const Logo: FC<Props> = ({ size, onClick }: Props) => {
  return (
    <div style={{ height: size }} className={styles.logo} onClick={onClick}>
      <div className={styles.icon}>
        <LogoSvg size={size} />
      </div>
      <h4 style={{ fontSize: size / 2 }} className={styles.name}>
        fotogjengen
      </h4>
    </div>
  );
};

export default Logo;
