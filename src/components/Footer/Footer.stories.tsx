import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Footer from "./index";

storiesOf("Footer", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => <Footer />);
