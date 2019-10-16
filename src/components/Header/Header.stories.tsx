import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Header from ".";

const goHome = (): void => {
  console.log("Going home");
};

storiesOf("Header", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <Header size={30} goHome={goHome}></Header>);
