import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from ".";

storiesOf("Checkbox", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => <Checkbox label="checkbox" />)
  .add("Checked", () => <Checkbox checked={true} label="checkbox" />)
  .add("Unchecked not changeable", () => (
    <Checkbox notChangeable={true} label="checkbox" />
  ))
  .add("Checked not changeable", () => (
    <Checkbox checked={true} notChangeable={true} label="checkbox" />
  ));
