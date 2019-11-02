import React, { FC } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Input from ".";

storiesOf("Input", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Standard", () => <Input name={"name-of-form-data"} />)
  .add("Standard with placeholder", () => (
    <Input name={"name-of-form-data"} placeholder="Skriv her..." />
  ))
  .add("Disabled", () => (
    <Input
      name={"disabled"}
      placeholder={"Her kan du ikke skrive"}
      disabled={true}
    />
  ));
