import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import DotDivider from ".";

storiesOf("Dot divider", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Red", () => <DotDivider color={"red"} />)
  .add("Blue", () => <DotDivider color={"blue"} />)
  .add("Yellow", () => <DotDivider color={"yellow"} />)
  .add("Orange", () => <DotDivider color={"orange"} />);
