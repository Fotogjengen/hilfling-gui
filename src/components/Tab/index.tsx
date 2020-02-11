import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./Tab.module.css";
import { DefaultProps, EventType } from "../../types";

interface Props extends DefaultProps {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  type?: EventType;
  /** Called when a button is clicked */
  onClick?: () => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
  /** Is it active? */
  active: boolean;
}

const Tab: FC<Props> = ({
  children,
  type,
  active,
  onClick,
  className,
  ...rest
}: Props) => {
  const [current, setCurrent] = useState(active);
  const tabClass = cx(
    styles.tab,
    {
      [styles.active]: current,
    },
    { [styles.samfundet]: type==="samfundet" },
    { [styles.uka]: type==="uka" },
    { [styles.isfit]: type==="isfit" },
    { [styles.annet]: type==="annet" },
    className,
  );
  const handleClick = () => {
    if (!onClick) return;
    if(current){
      setCurrent(!current);
    }
    onClick();
  };
  return (
    <button
      className={tabClass}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};


  export default Tab;