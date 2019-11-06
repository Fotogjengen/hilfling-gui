import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Hamburger from ".";

storiesOf("Hamburger", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Closed", () => (
    <Hamburger
      menuClicked={() => console.log("menu clicked")}
      color="#1b1b1b"
      isOpen={false}
      strokeWidth={3}
    ></Hamburger>
  ))
  .add("Open", () => (
    <Hamburger
      menuClicked={() => console.log("menu clicked")}
      color="#1b1b1b"
      isOpen={true}
    ></Hamburger>
  ));
