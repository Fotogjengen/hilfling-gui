import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import CardTitle from ".";

storiesOf("CardTitle", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <CardTitle title={"Beste tittelen"} />)
  .add("Capitalized", () => <CardTitle title={"tittel med store bokstaver"} />);
