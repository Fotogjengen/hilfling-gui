import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Hamburger from ".";

storiesOf("Hamburger", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Closed", () => (
    <Hamburger color="#1b1b1b" size={40} open={false}></Hamburger>
  ))
  .add("Open", () => (
    <Hamburger color="#1b1b1b" size={40} open={true}></Hamburger>
  ));
