import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import HeaderTextElement from ".";

storiesOf("HeaderTextElement", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <HeaderTextElement size={20}>Text</HeaderTextElement>);
