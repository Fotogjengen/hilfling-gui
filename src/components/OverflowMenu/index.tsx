import React, { FC, useState, useRef, useEffect} from "react";
import cx from "classnames";
import styles from "./ThreeDotsMenu.module.css";
import { DefaultProps } from "../../types";
import ThreeDots from "../icons/ThreeDots"
import OverflowMenu from "./Overflow"
import OverflowMenuItem from "./Overflow/OverflowItem"
import Pencil from "../icons/Pencil"
import GarbageCan from "../icons/GarbageCan"
import useVisible from "./useVisible"


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
        const { ref, isVisible, setIsVisible } = useVisible(false);
        let Content = "showContent";
        const mock: [ThreeDotsItem] = [{
            icon: Pencil,
            title: "Rediger"
        }]
    return (
            <div ref={ref}>
                <div className={styles.ThreeDotsMenu} onClick={() => setIsVisible(!isVisible)}>
                    <ThreeDots size={20}/>
                </div>
                 <div >
                 {isVisible &&
                    <OverflowMenu overflowTabClass={Content} >
                        {mock.map(item => <OverflowMenuItem text={item.title} icon={item.icon}/>)}
                    </OverflowMenu>
                    }

                </div>
            </div>
    );
};

export default ThreeDotsMenu;




