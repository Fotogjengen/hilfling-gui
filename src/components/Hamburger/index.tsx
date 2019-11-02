import React, { FC } from "react";
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
  const inlineStyles = {
    container: {
      height: height,
      width: width,
      margin: "auto 2rem auto 0",
    },
  };

  return (
    <div style={inlineStyles.container} className={styles.container}>
      <HamburgerMenu
        menuClicked={menuClicked}
        isOpen={isOpen}
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
