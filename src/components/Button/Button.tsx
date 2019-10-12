import React, { FC } from "react";
import cx from "classnames";
import styles from "./Button.css";

interface Props {
  /** Button label */
  label: string;
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

export const Button: FC<Props> = ({
  label,
  primary,
  warning,
  onClick,
  disabled,
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
    <button className={buttonClass} onClick={handleClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
