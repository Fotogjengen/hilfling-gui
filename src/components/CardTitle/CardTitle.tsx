import React, { FC } from "react";

interface Props {
  /** Title */
  title: string;
}

export const CardTitle: FC<Props> = ({ title, ...rest }: Props) => (
  <h2>{title}</h2>
);

export default CardTitle;
