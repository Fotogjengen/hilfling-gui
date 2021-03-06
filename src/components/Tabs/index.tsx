import React, { FC, useState } from "react";
import { DefaultProps, EventType } from "../../types";
import Tab from "../Tab";

interface Props extends DefaultProps {
  /** Primary button styling */
  type?: EventType;
  /** Called when a button is clicked */
  onClick?: () => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
  /** Which tab is active? */
  activeTab: string;
}

const Tabs: FC<Props> = ({
  type,
  activeTab = "isfit",
  onClick,
  ...rest
}: Props) => {
  const [current, setCurrent] = useState<string>(activeTab);
  return (
    <div>
      <Tab
        onClick={setCurrent}
        type={"samfundet"}
        active={current == "samfundet"}
      >
        SAMFUNDET
      </Tab>
      <Tab onClick={setCurrent} type={"uka"} active={current == "uka"}>
        UKA
      </Tab>
      <Tab onClick={setCurrent} type={"isfit"} active={current == "isfit"}>
        ISFIT
      </Tab>
      <Tab onClick={setCurrent} type={"annet"} active={current == "annet"}>
        ANNET
      </Tab>
    </div>
  );
};

export default Tabs;
