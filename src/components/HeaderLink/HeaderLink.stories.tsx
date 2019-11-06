import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import HeaderLink from ".";

storiesOf("Header link", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <HeaderLink>Text</HeaderLink>);
