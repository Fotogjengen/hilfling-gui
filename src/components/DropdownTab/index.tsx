import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./DropdownTab.module.css";
import { DefaultProps } from "../../types";
import ContentTab from "../ContentTab"
import DropDownArrow from "../icons/DropDownArrow";
import OverflowMenuIcon from "../icons/OverflowMenuIcon";
import OverflowItem from "../Overflow/OverflowItem"
import OverflowMenuItem from "../Overflow/OverflowItem"

//type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
    color: string;
    name: string;
    //hva skal dukke opp dersom man trykker på
    child?: any; 
} 

//må vel få laget en funksjon som kan brukes til å endre isOpen til true dersom den blir trykket på 

const DropdownTab: React.FC<Props> = ({
        color, 
        name,
        className
    }: Props) => {
        const [toggle, setToggle] = useState(false);
        const [clickedArrow, setClickedArrow] = useState(false);
        const mock = ['hei1','hei2', 'hei3','hei4', 'hei5','hei6', 'hei7','hei8', 'hei9','hei10', 'hei11','hei', 'hei','hei', 'hei','hei', 'hei','hei', 'hei','hei', 'hei','hei', 'hei']
        
        let Content = "";

        if (toggle) {
            Content = "showContent"
        }
        else {
            Content = "hideContent"
        }

        function handleClick() {
            setToggle(!toggle)
            setClickedArrow(clickedArrow)
            
        }
    
        
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
                {name}
                <DropDownArrow clicked={clickedArrow}/>
            </div>
            <ContentTab contentTabClass={Content} name={name}>
                {mock.map(name => <div className={styles.column} key={name}> {name} 
            </div>)}
            </ContentTab>
        </div>
    );
};

export default DropdownTab; 