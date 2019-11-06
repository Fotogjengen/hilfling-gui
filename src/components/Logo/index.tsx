import React, { FC, SyntheticEvent } from "react";
import styles from "./Logo.module.css";
import { LogoSvg } from "../icons";

interface Props {
  /** Size of logo, text scales with logo */
  size: number;
  /** What happens when clicking on logo */
  onClick?: () => void;
}

const Logo: FC<Props> = ({ size, onClick, ...rest }: Props) => {
  return (
    <div
      style={{ height: size }}
      className={styles.logo}
      onClick={onClick}
      {...rest}
    >
      <LogoSvg size={size} />
      <p style={{ fontSize: size * 0.7 }} className={styles.name}>
        fotogjengen
      </p>
    </div>
  );
};

export default Logo;
