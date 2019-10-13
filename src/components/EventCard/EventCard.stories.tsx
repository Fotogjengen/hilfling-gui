import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import EventCard from "./EventCard";
import CardTitle from "../CardTitle/CardTitle";

storiesOf("Event Card", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Samfundet", () => (
    <EventCard type={"samfundet"}>
      <CardTitle title={"Dette er en overskrift"} />
      Dette er vanlig tekst som står her.
    </EventCard>
  ))
  .add("UKA", () => (
    <EventCard type={"uka"}>
      <CardTitle title={"Dette er en overskrift"} capitalized={true} />
      Dette er vanlig tekst som står her. Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står
      her.Dette er vanlig tekst som står her.Dette er vanlig tekst som står her.
    </EventCard>
  ))
  .add("Isfit", () => (
    <EventCard type={"isfit"}>
      <CardTitle title={"Dette er en overskrift"} />
      Dette er vanlig tekst som står her.
    </EventCard>
  ))
  .add("Annet", () => (
    <EventCard type={"annet"}>
      <CardTitle title={"Dette er en overskrift"} />
      Dette er vanlig tekst som står her.
    </EventCard>
  ));
