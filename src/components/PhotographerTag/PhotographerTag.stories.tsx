import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import PhotographerTag from "./index";

storiesOf("Tag", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Green tag", () => (
    <PhotographerTag color="green">tidliger: gjengsjef</PhotographerTag>
  ))
  .add("Blue tag", () => (
    <PhotographerTag color="blue">gjengsjef</PhotographerTag>
  ))
  .add("Purple tag", () => (
    <PhotographerTag color="purple">aktiv</PhotographerTag>
  ))
  .add("Yellow tag", () => (
    <PhotographerTag color="yellow">medlem siden: 2015</PhotographerTag>
  ))
  .add("Red tag", () => (
    <PhotographerTag color="red">tidliger: arkivsjef</PhotographerTag>
  ));
