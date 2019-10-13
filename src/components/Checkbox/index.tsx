import React, { FC, useState } from "react";
import { CheckboxSvg } from "../icons";
import styles from "./Checkbox.module.css";

interface Props {
  /** True if checkbox is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
}

const Checkbox: FC<Props> = ({ checked = false, notChangeable }: Props) => {
  const [checkedBox, setCheckedBox] = useState(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedBox(!checkedBox);
  };
  return (
    <div onClick={handleClick} className={styles.checkbox}>
      <CheckboxSvg checked={checkedBox} />
    </div>
  );
};

export default Checkbox;
