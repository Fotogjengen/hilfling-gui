import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from ".";

storiesOf("Checkbox", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => <Checkbox />)
  .add("Checked", () => <Checkbox checked={true} />)
  .add("Unchecked not changeable", () => <Checkbox notChangeable={true} />)
  .add("Checked not changeable", () => (
    <Checkbox checked={true} notChangeable={true} />
  ));
