import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import OverflowMenu from "."

storiesOf("OverflowMenu", module)
    .addDecorator(withInfo({ inline: true }))

    .add("OverflowMenu", ()=> (
        <div>
            <OverflowMenu>
                
            </OverflowMenu>
        </div>
        
    ));