import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tab from ".";

storiesOf("Tab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Tab: Samfundet", () => (
    <Tab type={"samfundet"} active={true} onClick={() => false}>
      SAMFUNDET
    </Tab>
  ))
  .add("Tab: UKA", () => (
    <Tab type={"uka"} active={true} onClick={() => false}>
      UKA
    </Tab>
  ))
  .add("Tab: Isfit", () => (
    <Tab type={"isfit"} active={true} onClick={() => false}>
      ISFIT
    </Tab>
  ))
  .add("Tab: Annet", () => (
    <Tab type={"annet"} active={true} onClick={() => false}>
      ANNET
    </Tab>
  ))
  .add("Disabled", () => <Tab active={true} onClick={() => false}></Tab>);
