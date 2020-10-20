import React, { FC } from "react";
import styles from "./ImageLogo.module.css";
import { LogoSvg } from "../icons";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** Size of logo, text scales with logo */
  size: number;
  /** What happens when clicking on logo */
  onClick?: () => void;
}

const ImageLogo: FC<Props> = ({ size, onClick, className, ...rest }: Props) => {
  return (
    <div
      style={{ height: size }}
      className={cx(styles.logo, className)}
      onClick={onClick}
      {...rest}
    >
      <LogoSvg size={size} />
    </div>
  );
};

export default ImageLogo;
