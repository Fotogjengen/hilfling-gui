import React, { FC } from "react";
import styles from "./Image.css";
import cx from "classnames";

interface Props {
  src: string;
  alt: string;
}

const Image: FC<Props> = ({ src, alt }: Props) => {
  return <img className={cx(styles.image)} src={src} alt={alt} />;
};

export default Image;
