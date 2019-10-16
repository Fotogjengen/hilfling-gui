import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import CardPreamble from "./CardPreamble";
import DotDivider from "../DotDivider/DotDivider";

storiesOf("Card Preamble", module)
  .addDecorator(withInfo({ inline: true }))
  .add("With location", () => (
    <CardPreamble
      images={123}
      date={"12.10.2019"}
      color={"red"}
      type={"EventCard"}
      location={"Daglighallen"}
    >
      <DotDivider color={"red"} />
    </CardPreamble>
  ))
  .add("Without location", () => (
    <CardPreamble
      images={123}
      date={"12.10.2019"}
      color={"red"}
      type={"GjengfotoCard"}
      location={"Daglighallen"}
    />
  ));
