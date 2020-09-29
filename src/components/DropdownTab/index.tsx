import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./DropdownTab.module.css";
import { DefaultProps } from "../../types";
import ContentTab from "../ContentTab"

//type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
    color: string;
    name: string;
    //hva skal dukke opp dersom man trykker på
    child?: any; 
    //dersom den er aktiv?? 
} 

//må vel få laget en funksjon som kan brukes til å endre isOpen til true dersom den blir trykket på 

const DropdownTab: React.FC<Props> = ({
        color, 
        name,
        className
    }: Props) => {
        const [toggle, setToggle] = useState(false);
        
        let Content = "";

        if (toggle) {
            Content = "showContent"
        }
        else {
            Content = "hideContent"
        }

        function handleClick() {
            setToggle(!toggle)
        }
        
        console.log(Content)
        console.log(toggle)
        
        const DropdownTabClass = cx(styles.DropdownTab, className,  
            {
                [styles.red]: color == "red",
                [styles.yellow]: color == "yellow",
                [styles.blue]: color == "blue",
                [styles.green]: color =="green",
                [styles.purple]: color =="purple"
            }
        );

        
    return (
        <div>
            <div className={DropdownTabClass} onClick={()=> handleClick()}> 
                <div>{name}</div>
                <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M31.4167 0.083252L18 13.4999L4.58333 0.083252L0.5 4.16659L18 21.6666L35.5 4.16659L31.4167 0.083252Z" fill="black"/>
                np</svg>
            </div>
            <ContentTab contentTabClass={Content} />
        </div>
    );
};

export default DropdownTab; 