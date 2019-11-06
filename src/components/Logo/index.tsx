import React, { FC, SyntheticEvent } from "react";
import styles from "./Logo.module.css";
import { LogoSvg } from "../icons";

interface Props {
  size: number;
  onClick?(event: SyntheticEvent): void;
}

const Logo: FC<Props> = ({ size, ...rest }: Props) => {
  return (
    <div style={{ height: size }} className={styles.logo} {...rest}>
      <LogoSvg size={size} />
      <p style={{ fontSize: size * 0.7 }} className={styles.name}>
        fotogjengen
      </p>
    </div>
  );
};

export default Logo;
