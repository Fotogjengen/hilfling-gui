import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RadioButton from ".";

storiesOf("RadioButton", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => <RadioButton label="radiobutton" />)
  .add("Checked", () => <RadioButton checked={true} label="radiobutton" />)
  .add("Unchecked not changable", () => (
    <RadioButton notChangeable={true} label="radiobutton" />
  ))
  .add("Checked not changable", () => (
    <RadioButton checked={true} notChangeable={true} label="radiobutton" />
  ));
