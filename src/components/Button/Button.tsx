import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = props => (
  <button className="Button">{props.label}</button>
);

export default Button;
