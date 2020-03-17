import React, { FC, useState } from "react";
import { RadioButtonSvg } from "../icons";
import styles from "./RadioButton.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** True if radiobutton is value */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
  label?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const RadioButton: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  label,
  inputRef,
  ...rest
}: Props) => {
  const [checkedRadio, setCheckedRadio] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedRadio(!checkedRadio);
  };
  return (
    <div className={styles.container}>
      <input
        name="hiddenRadio"
        type="hidden"
        ref={inputRef}
        checked={checkedRadio}
      ></input>
      <div
        onClick={handleClick}
        className={cx(styles.radiobutton, className)}
        ref={inputRef}
        {...rest}
      >
        <RadioButtonSvg checked={checkedRadio} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default RadioButton;
