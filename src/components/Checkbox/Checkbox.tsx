import React, { FC } from 'react';
import CheckboxSvg from '../icons/Checkbox';
import CheckedCheckboxSvg from '../icons/CheckedCheckbox';

interface Props {
  /** True if checkbox is checked */
  checked?: boolean;
}

const Checkbox: FC<Props> = ({ checked = false, ...rest }: Props) => (
  <div>{checked ? <CheckedCheckboxSvg /> : <CheckboxSvg />}</div>
);

export default Checkbox;
