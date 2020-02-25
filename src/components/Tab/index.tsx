import React, { FC, useState, CSSProperties } from "react";
import cx from "classnames";
import styles from "./Tab.module.css";
import { DefaultProps, EventType } from "../../types";


interface Props extends DefaultProps {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  type: EventType;
  /** Called when a button is clicked */
  onClick: (type: string) => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it active? */
  active: boolean;
  /** Button color */
  btnColor?: string;
  /** Button border color */
  btnBorderColor?: string;
  /** Other button? */
  btnName?: string;
}

const Tab: FC<Props> = ({
  children,
  type,
  active,
  onClick,
  className,
  disabled = false,
  ...rest
}: Props) => {

  const tabClass = cx(
    styles.tab,
    {
      [styles.active]: !active,
    },
    { [styles.samfundet]: type === "samfundet" },
    { [styles.uka]: type === "uka" },
    { [styles.isfit]: type === "isfit" },
    { [styles.annet]: type === "annet" },
    className,
  );

  return (
    <button className={tabClass} onClick={() => onClick(type)} {...rest}>
      {children}
    </button>
  );
};

export default Tab;
