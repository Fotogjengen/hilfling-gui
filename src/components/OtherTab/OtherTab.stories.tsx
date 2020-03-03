import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import OtherTab from ".";

storiesOf("OtherTab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Other Tab", () => (
    <div>
      <OtherTab btnColor={"red"} btnBorderColor={"blue"} onClick={() => false} active={true}>
        SAMFUNDET
      </OtherTab>
    </div>
  ));
