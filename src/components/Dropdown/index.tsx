import React, { FC, useRef } from "react";
import DropDownArrow from "../icons/DropDownArrow";
import styles from "./Dropdown.module.css";
import cx from "classnames";

interface Props {
  options: Array<string>;
  whenSelected: () => void;
  className?: any;
}

const Dropdown: FC<Props> = ({
  options,
  whenSelected,
  className,
  ...rest
}: Props) => {
  const optionsList = options.map(element => (
    <option onSelect={whenSelected} value={element}>
      {element}
    </option>
  ));
  const selectClass = cx(className);
  return (
    <div>
      <select className={selectClass} onChange={whenSelected} {...rest}>
        {optionsList}
      </select>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default Dropdown;
