import React, { FC, useState, CSSProperties } from "react";
import { DefaultProps, EventType } from "../../types";
import styles from "./OtherTab.module.css";
import cx from "classnames";

interface Props extends DefaultProps {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  type?: EventType;
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
}


const Tab: FC<Props> = ({
  children,
  type,
  active,
  onClick,
  className,
  disabled = false,
  btnColor,
  btnBorderColor,
  ...rest
}: Props) => {
  const tabClass = cx(
    styles.tab,
    {    
      [styles.active]: !active
    }
    
    );

  return (
    <button
      className={tabClass}
      onClick={() => onClick("other")}
      style={{backgroundColor: active ? btnColor : "", borderColor: active ? btnBorderColor : ""}}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Tab;
