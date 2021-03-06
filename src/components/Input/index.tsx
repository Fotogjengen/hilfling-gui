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
  inputRef?: React.Ref<HTMLInputElement>;
}

const Input: FC<Props> = ({
  name,
  disabled = false,
  placeholder = "",
  className,
  inputRef,
  ...rest
}: Props) => {
  return (
    <input
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      className={cx(styles.input, className)}
      ref={inputRef}
      {...rest}
    ></input>
  );
};

export default Input;
