import React, { FC } from "react";
import styles from "./Input.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** The input's name, to identify the input in the data submitted with the form's data */
  name: string;
  /** Placeholder in input box */
  placeholder?: string;
  /** True if it is not allowed to write inside input field */
  disabled?: boolean;
  ref?: any; // TODO mer spesifikk type
}

const Input: FC<Props> = ({
  name,
  disabled = false,
  placeholder = "",
  className,
  ref,
  ...rest
}: Props) => {
  return (
    <input
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      className={cx(styles.input, className)}
      ref={ref}
      {...rest}
    ></input>
  );
};

export default Input;
