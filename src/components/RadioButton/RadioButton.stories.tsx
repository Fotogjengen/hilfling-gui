import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RadioButton from ".";

storiesOf("RadioButton", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => (
    <RadioButton name="radiobutton" label="radiobutton" />
  ))
  .add("Checked", () => (
    <RadioButton name="radiobutton" checked={true} label="radiobutton" />
  ))
  .add("Unchecked not changable", () => (
    <RadioButton notChangeable={true} name="radiobutton" label="radiobutton" />
  ))
  .add("Checked not changable", () => (
    <RadioButton
      name="radiobutton"
      checked={true}
      notChangeable={true}
      label="radiobutton"
    />
  ));
