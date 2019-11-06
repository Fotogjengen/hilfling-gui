import React, { FC, useState } from "react";
import HamburgerMenu, { HamburgerMenuProps } from "react-hamburger-menu";
import styles from "./Hamburger.module.css";

const Hamburger: FC<HamburgerMenuProps> = ({
  isOpen,
  height,
  width,
  strokeWidth,
  color,
  animationDuration,
  borderRadius,
  menuClicked,
  rotate,
}: HamburgerMenuProps) => {
  const [displayCross, setDisplayCross] = useState(isOpen);
  const handleClick = () => {
    setDisplayCross(!displayCross);
    menuClicked();
  };
  return (
    <div className={styles.container}>
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
