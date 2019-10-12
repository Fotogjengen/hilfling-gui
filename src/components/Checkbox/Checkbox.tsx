import React, { FC, useState } from "react";
import CheckboxSvg from "../icons/Checkbox";

interface Props {
  /** True if checkbox is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangable?: boolean;
}

const Checkbox: FC<Props> = ({ checked = false, notChangable }: Props) => {
  const [checkedBox, setCheckedBox] = useState(checked);
  const handleClick = () => {
    if (notChangable) return;
    setCheckedBox(!checkedBox);
  };
  return (
    <div onClick={handleClick}>
      <CheckboxSvg checked={checkedBox} />
    </div>
  );
};

export default Checkbox;
