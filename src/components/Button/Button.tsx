import React, { FC } from "react";
import cx from "classnames";
import "./Button.css";

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
  let buttonClass = cx({
    Button,
    warning,
    disabled
  });
  return <button className={buttonClass}>{label}</button>;
};

export default Button;
