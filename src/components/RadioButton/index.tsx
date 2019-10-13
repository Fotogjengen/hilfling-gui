import React, { FC, useState } from "react";
import RadioButtonSvg from "../icons/RadioButton";
import styles from "./RadioButton.module.css";

interface Props {
  /** True if radiobutton is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
}

const RadioButton: FC<Props> = ({ checked = false, notChangeable }: Props) => {
  const [checkedRadio, setCheckedRadio] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedRadio(!checkedRadio);
  };
  return (
    <div onClick={handleClick} className={styles.radiobutton}>
      <RadioButtonSvg checked={checkedRadio} />
    </div>
  );
};

export default RadioButton;
