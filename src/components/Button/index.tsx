import React, { FC } from "react";
import cx from "classnames";
import styles from "./Button.module.css";

interface Props {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  primary?: boolean;
  /** Danger button styling (red button) */
  warning?: boolean;
  /** Called when a button is clicked */
  onClick?: () => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
}

const Button: FC<Props> = ({
  children,
  primary,
  warning,
  onClick,
  disabled = false,
  submit,
  ...rest
}: Props) => {
  const buttonClass = cx(
    styles.Button,
    { [styles.primary]: primary },
    { [styles.warning]: warning },
    {
      [styles.disabled]: disabled && !onClick,
    },
  );
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
