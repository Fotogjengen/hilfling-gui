import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tab from ".";

storiesOf("Tab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Tab: Samfundet", () => <Tab disabled={false} type={"samfundet"}>SAMFUNDET</Tab>)
  .add("Tab: UKA", () => <Tab disabled={false} type={"uka"}>UKA</Tab>)
  .add("Tab: Isfit", () =>
    <Tab disabled={false} type={"isfit"}>ISFIT</Tab>
  )
  .add("Tab: Annet", () => <Tab disabled={false} type={"annet"}>ANNET</Tab>
  )
  .add("Disabled", () => <Tab disabled={true}></Tab>);

