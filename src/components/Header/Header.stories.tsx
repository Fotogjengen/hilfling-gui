import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Header from ".";
import HeaderLink from "../HeaderLink";
import Hamburger from "../Hamburger";

storiesOf("Header", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Normal", () => (
    <Header size={60}>
      <Hamburger
        menuClicked={() => console.log("click")}
        color="black"
        isOpen={false}
        width={20}
        height={20}
      />
      <HeaderLink size={20}>BILDER</HeaderLink>
      <HeaderLink size={20}>OM OSS</HeaderLink>
      <HeaderLink size={20}>KONTAKT</HeaderLink>
      <HeaderLink size={20}>LOGG INN</HeaderLink>
    </Header>
  ));
