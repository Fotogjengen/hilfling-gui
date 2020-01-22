import React, { FC } from "react";
import { CarouselItemProps, CarouselItemsProps } from "./types";
import cx from "classnames";
import styles from "./CarouselItem.module.css";

const CarouselItem: FC<CarouselItemProps> = ({
  title,
  image,
  width,
  height,
}) => {
  return (
    <div className={cx(styles.root)}>
      <div className={styles.initialInfoContainer}>
        <img
          style={{ width, height }}
          className={styles.image}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

const CarouselItems = ({ items, height, width }: CarouselItemsProps) => {
  return items.map((item, index) => (
    <CarouselItem
      image={item.image}
      title={item.title}
      height={height}
      width={width}
      key={index}
    />
  ));
};

export default CarouselItems;
