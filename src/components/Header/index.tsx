import React, { FC, SyntheticEvent } from "react";
import Logo from "../Logo";

interface Props {
  size: number;
  goHome(): void;
}

const Header: FC<Props> = ({ size, goHome }: Props) => (
  <div>
    <Logo size={size} onClick={goHome}/>
  </div>
);

export default Header;
