import React, { FC } from "react";
import styles from "./Image.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  src?: string;
  alt: string;
}

const Image: FC<Props> = ({ src, alt, className, ...rest }: Props) => {
  return <img className={cx(styles.image)} src={src} alt={alt} {...rest} />;
};

interface ProfileImageProps extends Props {
  onClick(): void;
}

const ProfileImage: FC<ProfileImageProps> = ({
  src,
  alt,
  onClick,
  className,
  ...rest
}: ProfileImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={cx(styles.profileImage, className)}
        {...rest}
      />
    </div>
  );
};

export { Image, ProfileImage };
