import React, { FC, useState } from "react";
import { RadioButtonSvg } from "../icons";
import styles from "./RadioButton.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** True if radiobutton is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
}

const RadioButton: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  ...rest
}: Props) => {
  const [checkedRadio, setCheckedRadio] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedRadio(!checkedRadio);
  };
  return (
    <div
      onClick={handleClick}
      className={cx(styles.radiobutton, className)}
      {...rest}
    >
      <RadioButtonSvg checked={checkedRadio} />
    </div>
  );
};

export default RadioButton;
