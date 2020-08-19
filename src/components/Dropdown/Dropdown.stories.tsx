import React, { FC } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Dropdown from "./index";

const optionsList: Array<string> = ["option1", "option2", "option3"];

storiesOf("Dropdown", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Standard", () => (
    <Dropdown
      name="example"
      options={optionsList}
      whenSelected={() => alert("JAJA")}
    />
  ));
