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
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
}

export const Button: FC<Props> = ({
  label,
  primary,
  warning,
  disabled,
  submit,
  ...rest
}: Props) => {
  const buttonClass = cx(styles.Button, styles.warning, styles.disabled);
  return (
    <button className={buttonClass} {...rest}>
      {label}
    </button>
  );
};

export default Button;
