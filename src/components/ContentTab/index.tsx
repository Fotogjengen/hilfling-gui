import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./DropdownTab.module.css";
import { DefaultProps } from "../../types";

//type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
    contentTabClass: string;
    //hva skal dukke opp dersom man trykker på
    child?: any; 
    //dersom den er aktiv?? 
} 

//må vel få laget en funksjon som kan brukes til å endre isOpen til true dersom den blir trykket på 
const ContentTab: React.FC<Props> = ({ contentTabClass }: Props) => {


    const DropdownTabClass = cx(styles.content,  
        {
            [styles.hide]: contentTabClass == "hideContent",
        }
    );

    return (
        <div className={DropdownTabClass}>
            heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyYYYYYYYYYYYYYYYOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </div>
    );
};

export default ContentTab; 