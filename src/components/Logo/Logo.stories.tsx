import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Logo from ".";

storiesOf("Logo", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <Logo size={40} />);
