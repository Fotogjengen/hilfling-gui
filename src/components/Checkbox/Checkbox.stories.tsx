import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from "./Checkbox";

storiesOf("Checkbox", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => <Checkbox />)
  .add("Checked", () => <Checkbox checked={true} />)
  .add("Unchecked not changable", () => <Checkbox notChangable={true} />)
  .add("Checked not changable", () => (
    <Checkbox checked={true} notChangable={true} />
  ));
