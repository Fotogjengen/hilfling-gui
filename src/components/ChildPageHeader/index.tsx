import React, { FC } from "react";
import cx from "classnames";
import styles from "./ChildPageHeader.module.css";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  title: string;
}

const ChildPageHeader: FC<Props> = ({ title, className, ...rest }: Props) => {
  const style = cx(styles.header, className);
  return (
    <div>
      <h1 className={style}>{title}</h1>
      <div className={styles.underline}></div>
    </div>
  );
};

export default ChildPageHeader;
