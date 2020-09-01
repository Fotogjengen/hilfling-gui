import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import CardTitle from "../CardTitle";
import CardPreamble from "../CardPreamble";
import ImageCard from "./index";

storiesOf("ImageCard", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Gang Card", () => (
    <ImageCard
      placement={"top"}
      image={
        "https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg"
      }
    >
      <CardTitle title={"fotogjengen"} capitalized centered />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        color={"red"}
        type={"GjengfotoCard"}
        centered={true}
      />
    </ImageCard>
  ))
  .add("Event Card", () => (
    <ImageCard
      placement={"left"}
      image={
        "https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg"
      }
      type={"samfundet"}
    >
      <CardTitle title={"Temafest: Halloween"} capitalized={true} />
      <CardPreamble
        images={123}
        date={"12.10.2019"}
        location={"Daglighallen"}
        color={"red"}
        type={"EventCard"}
      />
    </ImageCard>
  ));
