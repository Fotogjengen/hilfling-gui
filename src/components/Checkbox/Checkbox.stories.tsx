import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withInfo({ inline: true }))
  .add('Unchecked', () => <Checkbox></Checkbox>)
  .add('Checked', () => <Checkbox checked={true}></Checkbox>);
