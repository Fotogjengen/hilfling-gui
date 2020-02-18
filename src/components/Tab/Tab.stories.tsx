import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tab from ".";
import Tabs from "../Tabs";

storiesOf("Tab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Tab: Samfundet", () => (
    <Tab type={"samfundet"} onClick={() => false} active={true}>
      SAMFUNDET
    </Tab>
  ))
  .add("Tab: UKA", () => (
    <Tab type={"uka"} onClick={() => false} active={false}>
      UKA
    </Tab>
  ))
  .add("Tab: Isfit", () => (
    <Tab type={"isfit"} onClick={() => false} active={false}>
      ISFIT
    </Tab>
  ))
  .add("Tab: Annet", () => (
    <Tab type={"annet"} onClick={() => false} active={false}>
      ANNET
    </Tab>
  ));
