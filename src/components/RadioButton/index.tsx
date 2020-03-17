import React, { FC, useState, useCallback } from "react";
import { RadioButtonSvg } from "../icons";
import styles from "./RadioButton.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** True if radiobutton is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
  label?: string;
  onChange?: () => any;
}

const RadioButton: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  label,
  onChange,
  ...rest
}: Props) => {
  const [value, setValue] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setValue(!value);
  };
  return (
    <div className={styles.container}>
      <div
        onChange={handleClick}
        className={cx(styles.radiobutton, className)}
        {...rest}
      >
        <RadioButtonSvg checked={value} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default RadioButton;
