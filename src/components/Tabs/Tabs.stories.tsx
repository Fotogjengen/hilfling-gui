import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tabs from ".";

storiesOf("Tabs", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Tab: Samfundet", () => (
    <Tabs type={"samfundet"} activeTab={"samfundet"} onClick={() => false}>
      TABS
    </Tabs>
  ));
