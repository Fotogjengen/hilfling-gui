import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import  Tab from ".";

storiesOf("Tab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Tab: Samfundet", () => <Tab type={"samfundet"}>SAMFUNDET</Tab>)
  .add("Tab: UKA", () => <Tab type={"uka"}>UKA</Tab>)
  .add("Tab: Isfit", () =>
    <Tab type={"isfit"}>ISFIT</Tab>
  )
  .add("Tab: Annet", () => <Tab type={"annet"}>ANNET</Tab>
  )
  .add("Disabled", () => <Tab></Tab>);

