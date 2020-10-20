import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./ThreeDotsMenu.module.css";
import { DefaultProps } from "../../types";
import ThreeDots from "../icons/ThreeDots"
import OverflowMenu from "../Overflow"
import OverflowMenuItem from "../Overflow/OverflowItem"
import Pencil from "../icons/Pencil"
import GarbageCan from "../icons/GarbageCan"

interface ThreeDotsItem {
    icon: React.FC;
    title: string;
}


interface Props extends DefaultProps {
    children?: any;
    items?: [ThreeDotsItem]
} 

const ThreeDotsMenu: React.FC<Props> = ({
    className, 
    items,
    children
}: Props) => {
        const [toggle, setToggle] = useState(false);
        let Content = "";

        const mock: [ThreeDotsItem] = [ {
            icon: Pencil,
            title: "Rediger"
        }

        ]

        if (toggle) {
            Content = "showContent"
        }
        else {
            Content = "hideContent"
        }

        function handleClick() {
            setToggle(!toggle) 
        }
    return (
        <div>
            <div className={styles.ThreeDotsMenu} onClick={()=> handleClick()}> 
                <ThreeDots size={20}/>
            </div>
            <OverflowMenu overflowTabClass={Content}>
                {mock.map(item => <OverflowMenuItem text={item.title} icon={item.icon}/>)}
            </OverflowMenu>
        </div>
    );
};

export default ThreeDotsMenu;




