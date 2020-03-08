import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card from "./Card";
import CardTitle from "../CardTitle";
import CardPreamble from "../CardPreamble";

storiesOf("Card", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Event Card: Samfundet", () => (
    <Card type={"samfundet"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"red"}
        type={"EventCard"}
      />
    </Card>
  ))
  .add("Event Card: UKA", () => (
    <Card type={"uka"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"yellow"}
        type={"EventCard"}
      />
    </Card>
  ))
  .add("Event Card: Isfit", () => (
    <Card type={"isfit"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"blue"}
        type={"EventCard"}
      />
    </Card>
  ))
  .add("Event Card: Annet", () => (
    <Card type={"annet"}>
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"orange"}
        type={"EventCard"}
      />
    </Card>
  ))
  .add("Article Card", () => (
    <Card rounded={true}>
      <CardTitle title={"Fotogjengen"} capitalized={true}></CardTitle>
      <p>
        Fotogjengen er en gjeng på Samfundet. Vi har ansvar for å dokumentere
        alt som skjer på huset. Alle bilder vi tar legges ut på denne nettsiden.
        Øsnker du å bruke noen av bildene våre. Venligst krediter med foto:
        foto.samfundet.no.
      </p>
      <p>
        <a href="https://foto.samfundet.no/informasjon/">Les mer om oss her.</a>
      </p>
    </Card>
  ))
  .add("Gjengfoto", () => (
    <Card>
      <CardTitle title={"fotogjengen"} capitalized centered />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        color={"red"}
        type={"GjengfotoCard"}
        centered={true}
      />
    </Card>
  ));
