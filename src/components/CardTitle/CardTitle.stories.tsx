import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import CardTitle from "./CardTitle";

storiesOf("CardTitle", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <CardTitle title={"Beste tittelen"} />)
