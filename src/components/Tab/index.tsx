import React, { FC } from "react";
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
}

const Tab: FC<Props> = ({
  children,
  type,
  onClick,
  disabled = false,
  className,
  ...rest
}: Props) => {
  const tabClass = cx(
    styles.tab,
    {
      [styles.disabled]: disabled && !onClick,
    },
    { [styles.samfundet]: type==="samfundet" },
    { [styles.uka]: type==="uka" },
    { [styles.isfit]: type==="isfit" },
    { [styles.annet]: type==="annet" },
    className,
  );
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <button
      className={tabClass}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Tab;
