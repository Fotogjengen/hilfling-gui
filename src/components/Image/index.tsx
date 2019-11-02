import React, { FC } from "react";
import styles from "./Image.module.css";
import cx from "classnames";

interface Props {
  src: string;
  alt: string;
}

const Image: FC<Props> = ({ src, alt }: Props) => {
  return <img className={cx(styles.image)} src={src} alt={alt} />;
};

interface ProfileImageProps extends Props {
  onClick(): void;
  size: number;
}

const ProfileImage: FC<ProfileImageProps> = ({ src, alt, onClick, size }: ProfileImageProps) => {
  return <div>
    <img src={src} alt={alt} onClick={onClick} height={size} width={size} className={styles.profileImage} />
  </div>;
};

export { Image, ProfileImage };
