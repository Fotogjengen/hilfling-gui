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
  onChange?: () => void;
}

const RadioButton: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  label,
  onChange,
  ...rest
}: Props) => {
  const [checkedRadio, setCheckedRadio] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedRadio(!checkedRadio);
    if (onChange) onChange();
  };
  return (
    <div className={styles.container}>
      <div
        onChange={handleClick}
        className={cx(styles.radiobutton, className)}
        {...rest}
      >
        <RadioButtonSvg checked={checkedRadio} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default RadioButton;
