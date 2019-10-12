import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => (
    <Button label={"Last opp"} primary={true} onClick={() => alert("test")} />
  ))
  .add("Disabled", () => <Button label={"Last opp"} disabled={true} />)
  .add("Warning", () => (
    <Button label={"Avbryt"} warning={true} onClick={() => alert("test")} />
  ));
