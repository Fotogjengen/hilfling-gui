import React, { FC, useState, useRef, useEffect} from "react";
import cx from "classnames";
import styles from "./OverflowMenu.module.css";
import { DefaultProps } from "../../types";
import ThreeDots from "../icons/ThreeDots"
import OverflowMenu2 from "./OverflowTab"
import OverflowMenuItem from "./OverflowTab/OverflowItem"
import Pencil from "../icons/Pencil"
import GarbageCan from "../icons/GarbageCan"


function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    // TODO: Fix typescript error
    /*
    if (ref.current?.contains(event.target)) {
      setIsVisible(false);
    }
    */
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}


interface ThreeDotsItem {
    icon: React.FC;
    title: string;
}


interface Props extends DefaultProps {
    children?: any;
    items?: [ThreeDotsItem]
}

const OverflowMenu: React.FC<Props> = ({
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
                <div className={styles.OverflowMenu} onClick={() => setIsVisible(!isVisible)}>
                    <ThreeDots size={20}/>
                </div>
                 <div >
                 {isVisible &&
                    <OverflowMenu2 overflowTabClass={Content} >
                        {mock.map(item => <OverflowMenuItem text={item.title} icon={item.icon}/>)}
                    </OverflowMenu2>
                    }

                </div>
            </div>
    );
};

export default OverflowMenu;




