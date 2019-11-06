import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Header from ".";
import HeaderLink from "../HeaderLink";
import Hamburger from "../Hamburger";

storiesOf("Header", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => (
    <Header>
      <HeaderLink onClick={() => alert("Bilder")}>BILDER</HeaderLink>
      <HeaderLink>OM OSS</HeaderLink>
      <HeaderLink>KONTAKT</HeaderLink>
      <HeaderLink>LOGG INN</HeaderLink>
    </Header>
  ));
