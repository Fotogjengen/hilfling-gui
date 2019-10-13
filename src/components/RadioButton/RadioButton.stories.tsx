import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RadioButton from "./index";

storiesOf("RadioButton", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Unchecked", () => <RadioButton />)
  .add("Checked", () => <RadioButton checked={true} />)
  .add("Unchecked not changable", () => <RadioButton notChangeable={true} />)
  .add("Checked not changable", () => (
    <RadioButton checked={true} notChangeable={true} />
  ));
