import React, { FC, useState } from "react";
import { RadioButtonSvg } from "../icons";
import styles from "./RadioButton.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";
import Facebook from "../icons/Facebook";

interface Props extends DefaultProps {
  /** True if radiobutton is checked */
  value: boolean;
  defaultValue?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
  label?: string;
  inputRef?: React.Ref<HTMLDivElement>;
}

const RadioButton: FC<Props> = ({
  value,
  defaultValue = false,
  notChangeable,
  className,
  label,
  inputRef,
  ...rest
}: Props) => {
  const [checked, setChecked] = useState<boolean>(value);
  const handleClick = () => {
    if (notChangeable) return;
    setChecked(!checked);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={handleClick}
        className={cx(styles.radiobutton, className)}
        ref={inputRef}
        {...rest}
      >
        <RadioButtonSvg checked={value} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default RadioButton;
