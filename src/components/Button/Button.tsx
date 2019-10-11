import React, { FC } from "react";
import styles from './Button.module.css'

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = props => (
  <button className={styles.Button}>{props.label}</button>
);

export default Button;
