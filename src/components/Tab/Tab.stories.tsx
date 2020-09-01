import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tab from ".";

storiesOf("Tab", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Samfundet active", () => (
    <div>
      <Tab type={"samfundet"} onClick={() => false} active={true}>
        SAMFUNDET
      </Tab>
      <Tab type={"uka"} onClick={() => false} active={false}>
        UKA
      </Tab>
      <Tab type={"isfit"} onClick={() => false} active={false}>
        ISFIT
      </Tab>
      <Tab type={"annet"} onClick={() => false} active={false}>
        ANNET
      </Tab>
    </div>
  ))
  .add("UKA active", () => (
    <div>
      <Tab type={"samfundet"} onClick={() => false} active={false}>
        SAMFUNDET
      </Tab>
      <Tab type={"uka"} onClick={() => false} active={true}>
        UKA
      </Tab>
      <Tab type={"isfit"} onClick={() => false} active={false}>
        ISFIT
      </Tab>
      <Tab type={"annet"} onClick={() => false} active={false}>
        ANNET
      </Tab>
    </div>
  ))
  .add("Isfit active", () => (
    <div>
      <Tab type={"samfundet"} onClick={() => false} active={false}>
        SAMFUNDET
      </Tab>
      <Tab type={"uka"} onClick={() => false} active={false}>
        UKA
      </Tab>
      <Tab type={"isfit"} onClick={() => false} active={true}>
        ISFIT
      </Tab>
      <Tab type={"annet"} onClick={() => false} active={false}>
        ANNET
      </Tab>
    </div>
  ))
  .add("Annet active", () => (
    <div>
      <Tab type={"samfundet"} onClick={() => false} active={false}>
        SAMFUNDET
      </Tab>
      <Tab type={"uka"} onClick={() => false} active={false}>
        UKA
      </Tab>
      <Tab type={"isfit"} onClick={() => false} active={false}>
        ISFIT
      </Tab>
      <Tab type={"annet"} onClick={() => false} active={true}>
        ANNET
      </Tab>
    </div>
  ))
  .add("Other tab active", () => (
    <div>
      <Tab type={"samfundet"} onClick={() => false} active={false}>
        SAMFUNDET
      </Tab>
      <Tab type={"uka"} onClick={() => false} active={false}>
        UKA
      </Tab>
      <Tab type={"isfit"} onClick={() => false} active={false}>
        ISFIT
      </Tab>
      <Tab type={"annet"} onClick={() => false} active={false}>
        ANNET
      </Tab>

    </div>
  ));
