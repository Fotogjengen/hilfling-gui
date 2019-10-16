import React, { SyntheticEvent } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import HeaderTextElement from ".";

const onClickMethod = (event: SyntheticEvent) => {
  console.log("HeaderTextElement");
};

storiesOf("HeaderTextElement", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => (
    <HeaderTextElement size={20} onClick={onClickMethod}>Text</HeaderTextElement>
  ));
