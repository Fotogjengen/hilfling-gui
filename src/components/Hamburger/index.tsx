import React, { FC, useState } from "react";
import HamburgerMenu, { HamburgerMenuProps } from "react-hamburger-menu";
import styles from "./Hamburger.module.css";
import { DefaultProps } from "../../types";
import cx from "classnames";

const Hamburger: FC<HamburgerMenuProps & DefaultProps> = ({
  isOpen,
  height,
  width,
  strokeWidth,
  color,
  animationDuration,
  borderRadius,
  menuClicked,
  rotate,
  className,
  ...rest
}) => {
  const [displayCross, setDisplayCross] = useState(isOpen);
  const handleClick = () => {
    setDisplayCross(!displayCross);
    menuClicked();
  };
  return (
    <div className={cx(styles.container, className)} {...rest}>
      <HamburgerMenu
        menuClicked={handleClick}
        isOpen={displayCross}
        color={color}
        height={height}
        width={width}
        strokeWidth={strokeWidth}
        animationDuration={animationDuration}
        borderRadius={borderRadius}
        rotate={rotate}
      ></HamburgerMenu>
    </div>
  );
};

export default Hamburger;
