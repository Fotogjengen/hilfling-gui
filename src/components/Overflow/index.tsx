import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./Overflow.module.css";
import { DefaultProps } from "../../types";


interface Props extends DefaultProps {
    children: any;
} 

const OverflowMenu: React.FC<Props> = ({
    children,
    className
}: Props) => {

    return (
        <div className={styles.OverflowMenu}> 
            {children}
        </div>
    );
};


export default OverflowMenu; 
