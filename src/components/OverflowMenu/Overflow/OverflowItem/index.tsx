import React, { FC, useState } from "react";
import cx from "classnames";
import { DefaultProps } from "../../../../types";
import OverflowMenuIcon from "../../../icons/OverflowMenuIcon"; 
import styles from "./OverflowItem.module.css";

interface Props extends DefaultProps {
   text: string;
   icon: any;
} 

const OverflowMenuItem: React.FC<Props> = ({
    text,
    icon
}: Props) => {
    return (
        <div className={styles.OverflowMenuItem}>
            {icon}
            {text}
        </div>
    );
};

export default OverflowMenuItem; 
