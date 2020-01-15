import React, { FC } from "react";
import DropDownArrow from "../icons/DropDownArrow";
import styles from "./Dropdown.module.css";

interface Props {
  options: Array<string>;
  whenSelected: () => void;
}

const Dropdown: FC<Props> = ({ options, whenSelected }: Props) => {
  const optionsList = options.map(element => (
    <option onSelect={whenSelected} value={element}>
      {element}
    </option>
  ));
  return (
    <div>
      <select className={styles.select} onChange={whenSelected}>
        {optionsList}
      </select>
      <div className={styles.arrow}>
        <DropDownArrow />
      </div>
    </div>
  );
};

export default Dropdown;
