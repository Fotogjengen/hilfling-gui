import React, { FC } from "react";
import styles from "./Input.css";

interface Props {
  /** The input's name, to identify the input in the data submitted with the form's data */
  name: string;
  /** Placeholder in input box */
  placeholder?: string;
  /** True if it is not allowed to write inside input field */
  disabled?: boolean;
}

const Input: FC<Props> = ({
  name,
  disabled = false,
  placeholder = "",
}: Props) => {
  return (
    <input
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
};

export default Input;
