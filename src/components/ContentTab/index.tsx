import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./ContentTab.module.css";
import { DefaultProps } from "../../types";

//type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
    contentTabClass: string;
    name: string;
    //hva skal dukke opp dersom man trykker på
    children?: any; 
} 

const ContentTab: React.FC<Props> = ({ contentTabClass, name, children }: Props) => {


    const ContentTabClass = cx(styles.ContentTab,  
        {
            [styles.column]: contentTabClass == "column",
            [styles.hide]: contentTabClass == "hideContent",
            [styles.ContentTab]: contentTabClass == "ContentTab"
        }
    );
    let newname = name.toLowerCase()

    return (
        <div className={ContentTabClass}>
            {children}
        </div>
    );
};

export default ContentTab; 