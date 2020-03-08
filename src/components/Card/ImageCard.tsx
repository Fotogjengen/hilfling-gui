import React, { FC } from "react";
import Card from "./Card";
import { DefaultProps } from "../../types";
import { Props as CardProps } from "./Card";
import styles from "./ImageCard.module.css";
import cx from "classnames";

type TOP = "top";
type LEFT = "left";

type ImagePlacement = TOP | LEFT;

interface Props extends DefaultProps, CardProps {
  placement: ImagePlacement;
  image: string;
  children?: any;
}

const ImageCard: FC<Props> = ({
  placement,
  image,
  type,
  rounded,
  children,
}: Props) => {
  return (
    <div
      className={cx({
        [styles.top]: placement === "top",
        [styles.left]: placement === "left",
      })}
    >
      <img
        className={cx({
          [styles.topsize]: placement === "top",
          [styles.leftsize]: placement === "left",
        })}
        src={image}
      />

      <Card
        shadow={false}
        type={type ? type : undefined}
        rounded={rounded ? rounded : undefined}
        className={styles.card}
      >
        <div>{children}</div>
      </Card>
    </div>
  );
};

export default ImageCard;
