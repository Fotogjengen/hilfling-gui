import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <Button primary={true}>Last opp</Button>)
  .add("Disabled", () => <Button disabled={true}>Last opp</Button>)
  .add("Warning", () => (
    <Button warning={true} onClick={() => alert("test")}>
      Avbryt
    </Button>
  ));
