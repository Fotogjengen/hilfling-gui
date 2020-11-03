import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ImageLogo from ".";

storiesOf("ImageLogo", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <ImageLogo size={200} />);
