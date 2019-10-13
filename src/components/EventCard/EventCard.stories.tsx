import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import EventCard from "./EventCard";
import CardTitle from "../CardTitle/CardTitle";
import EventCardDescription from "../EventCardDescription/EventCardDescription";

storiesOf("Event Card", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Samfundet", () => (
    <EventCard type={"samfundet"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <EventCardDescription
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"red"}
      />
    </EventCard>
  ))
  .add("UKA", () => (
    <EventCard type={"uka"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <EventCardDescription
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"yellow"}
      />
    </EventCard>
  ))
  .add("Isfit", () => (
    <EventCard type={"isfit"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <EventCardDescription
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"blue"}
      />
    </EventCard>
  ))
  .add("Annet", () => (
    <EventCard type={"annet"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <EventCardDescription
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"orange"}
      />
    </EventCard>
  ));
