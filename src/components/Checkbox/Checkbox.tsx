import React, { FC, useState } from "react";
import CheckboxSvg from "../icons/Checkbox";
import styles from "./Checkbox.module.css";

interface Props {
  /** True if checkbox is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangable?: boolean;
}

const Checkbox: FC<Props> = ({ checked = false, notChangable }: Props) => {
  const [checkedBox, setCheckedBox] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangable) return;
    setCheckedBox(!checkedBox);
  };
  return (
    <div onClick={handleClick} className={styles.checkbox}>
      <CheckboxSvg checked={checkedBox} />
    </div>
  );
};

export default Checkbox;
