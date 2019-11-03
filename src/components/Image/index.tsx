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
}

const ProfileImage: FC<ProfileImageProps> = ({ src, alt, onClick }: ProfileImageProps) => {
  return <div>
    <img src={src} alt={alt} onClick={onClick} className={styles.profileImage} />
  </div>;
};

export { Image, ProfileImage };
