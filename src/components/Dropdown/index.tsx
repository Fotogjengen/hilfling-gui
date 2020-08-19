import React, { FC, useRef } from "react";
import DropDownArrow from "../icons/DropDownArrow";
import styles from "./Dropdown.module.css";
import cx from "classnames";

interface Props {
  options: Array<string>;
  // Used by form to fetch selected value
  name: string;
  whenSelected?: () => void;
  className?: any;
  inputRef?: React.Ref<HTMLSelectElement>;
}

const Dropdown: FC<Props> = ({
  name,
  options,
  whenSelected,
  className,
  inputRef,
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
      <select
        name={name}
        ref={inputRef}
        className={selectClass}
        onChange={whenSelected}
        {...rest}
      >
        {optionsList}
      </select>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default Dropdown;
