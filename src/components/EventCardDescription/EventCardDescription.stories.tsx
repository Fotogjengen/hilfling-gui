import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import EventCardDescription from "./EventCardDescription";

storiesOf("Event Card Description", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Example", () => (
    <EventCardDescription
      images={123}
      date={"12.10.2019"}
      location={"Daglighallen"}
      color={"red"}
    />
  ));
