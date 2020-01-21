import React, { FC, useState } from "react";
import { CheckboxSvg } from "../icons";
import styles from "./Checkbox.module.css";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** True if checkbox is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
}

const Checkbox: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  ...rest
}: Props) => {
  const [checkedBox, setCheckedBox] = useState(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedBox(!checkedBox);
  };
  return (
    <div
      onClick={handleClick}
      className={cx(styles.checkbox, className)}
      {...rest}
    >
      <CheckboxSvg checked={checkedBox} />
    </div>
  );
};

export default Checkbox;
