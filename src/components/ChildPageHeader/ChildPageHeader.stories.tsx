import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ChildPageHeader from ".";

storiesOf("ChildPageHeader", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <ChildPageHeader title="Tittelen på undersiden" />);
