import React, { FC } from 'react';
import styles from './CardTitle.css';

interface Props {
  // Title
  title: string;
}

export const CardTitle: FC<Props> = ({ title, ...rest }: Props) => (
  <h2 className={styles.test}>{title}</h2>
);

export default CardTitle;
